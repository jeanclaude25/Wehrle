export default /* glsl */`
precision lowp float;

uniform float uAlpha;
#define BACKGROUND_COLOR vec3(0.038, 0.02, 0.023)
#define SECONDARY_COLOR vec3(0.73, 0.584, 0.418)
#define iteration 3
#define SPACE_DUST_COLOR vec3(0.012, 0.013, 0.019)


varying vec2 vUv;
varying vec3 vPosition;

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float Hash(in vec2 p, in float scale)
{
	// This is tiling part, adjusts with the scale...
	p = mod(p, scale);
	return fract(sin(dot(p, vec2(27.16898, 38.90563))) * 5151.5473453);
}

float noise(in vec2 p, in float scale )
{
	vec2 f;
	
	p *= scale;

	
	f = fract(p);		// Separate integer from fractional
    p = floor(p);
	
    f = f*f*(3.0-2.0*f);	// Cosine interpolation approximation
	
    float res = mix(mix(Hash(p, 				 scale),
						Hash(p + vec2(1.0, 0.0), scale), f.x),
					mix(Hash(p + vec2(0.0, 1.0), scale),
						Hash(p + vec2(1.0, 1.0), scale), f.x), f.y);
    return res;
}

float fbm(in vec2 p, int iter, float scale)
{
    float f = 0.0;
	// Change starting scale to any integer value...
    p = mod(p, scale);
	float amp   = 1.0;
    float norm = 1.0;
	
	for (int i = 0; i < iteration; i++)
	{
		f += noise(p, scale) * amp;
        norm += amp;
		amp *= .5;
		// Scale must be multiplied by an integer value...
		scale *= 2.;
	}
	// Clamp it just in case....
	return min(f / norm, 1.0);
}

vec3 hash(vec3 p3)
{    
	p3 = fract(p3 * vec3(.1031,.11369,.13787));
    p3 += dot(p3, p3.yxx+19.19);
    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float voronoi(vec2 n, float t) {
    
    vec3 p = vec3(n.x, n.y, t);
    const float K1 = 0.333333333;
    const float K2 = 0.166666667;
    
    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
    
    vec3 e = step(vec3(0.0), d0 - d0.yzx);
	vec3 i1 = e * (1.0 - e.zxy);
	vec3 i2 = 1.0 - e.zxy * (1.0 - e);
    
    vec3 d1 = d0 - (i1 - 1.0 * K2);
    vec3 d2 = d0 - (i2 - 2.0 * K2);
    vec3 d3 = d0 - (1.0 - 3.0 * K2);
    
    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
    vec4 q = h * h * h * h * vec4(dot(d0, hash(i)), dot(d1, hash(i + i1)), dot(d2, hash(i + i2)), dot(d3, hash(i + 1.0)));
    
    return dot(vec4(50.), q);

}

float voronoiFbm(vec2 p, int iter)
{
    float f = 0.0;
    float a = 1.0;
    float norm = 0.0;
    
    for (int i = 0; i < iteration; i++) {
	    f += a * abs(voronoi(p, 0.0)); 
        norm += a;
        p *= 2.0;
        a *= 0.65;
    }
    
    return 1.0 - f / norm;
}


void main()
{
    vec2 uv = vUv;
    vec2 uv2 = uv * vec2(2000);

    vec3 col = BACKGROUND_COLOR; // Background
    float primary = sqrt(fbm(uv + vec2(6.175, -23.612), iteration, 3.0)); // Space lighness
    float secondary = fbm(uv, iteration, 4.0);
    float nebula = 4.0 * pow(fbm(uv + vec2(-12.1, 2.62), iteration, 4.0), 5.0);
    float space = primary * secondary * nebula;
    vec3 variation = normalize(vec3(fbm(uv + vec2(11.61), iteration, 2.0), fbm(uv - vec2(2.11), iteration, 2.0), fbm(uv + vec2(66.61), iteration, 2.0)));
    
    col *= space;
    col = mix(col, secondary * SECONDARY_COLOR, 0.5); // Nebula
    col = mix(variation, col, 0.93);
    col += SPACE_DUST_COLOR * vec3(pow(fbm(uv, iteration, 38.0), 3.0) * 0.5);
    col += vec3(0.7, 0.6, 0.5) * nebula;
    col /= 1.0 + max(1.0 - 2.0 * length(uv - vec2(0.5)), 0.0) * vec3(1.0, 1.3, 1.5) * (4.0 * vec3(pow(max(voronoiFbm(uv * 2.0, iteration), 0.0), 6.0))); // Voronoi (stripes of emptiness)

    gl_FragColor = vec4(col, uAlpha);
}
`
export default /* glsl */`
varying float vHeight;

uniform vec3 waterColor;
uniform vec3 waterHighlight;

uniform float offset;
uniform float contrast;
uniform float brightness;

varying vec2 vUv;

vec3 calcColor() {
  float mask = (pow(vHeight, 2.) - offset) * contrast;
  vec3 diffuseColor = mix(waterColor, waterHighlight, mask);
  diffuseColor *= brightness;
  return diffuseColor;
}

void main() {
  // csm_DiffuseColor = vec4(calcColor(), 1.0); 
  csm_DiffuseColor = vec4(calcColor(), 0.7);  
}
`
export default /* glsl */`

varying vec2 vUv;
varying vec3 vPosition;


void main()
{
    vec3 pos = 1.0-position;
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    
    vUv = uv;
    vPosition = position;
}
`
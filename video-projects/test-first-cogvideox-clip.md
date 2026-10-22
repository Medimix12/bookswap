# First clip test: CogVideoX hosted demo

## Use this public ZeroGPU demo
https://huggingface.co/spaces/kaidjuric/cogvideox-5b-text-to-video

The Space README says it creates approximately six-second, 720×480 clips and uses Hugging Face ZeroGPU shared quota. The public demo requires no local install, but quota / service availability may vary. It is not invoked from GitHub Actions.

## Test prompt
A cinematic science documentary shot in deep space. The camera slowly approaches a magnificent spiral galaxy, its luminous arms glowing blue and gold, star fields sparkling in the distance, subtle cosmic dust, smooth stable camera movement, realistic astronomical visualization, high detail, no titles, no logos.

## Steps
1. Open the demo link in a browser and wait for its app to load.
2. Enter the prompt and press Generate.
3. If a clip completes, play it and use the interface's download option to save the MP4.
4. If the app reports quota exhausted, server stopped, or a queue error, record the exact message and try again later or use the ModelScope demo linked from the official CogVideo repository: https://github.com/zai-org/CogVideo
5. A successful first clip proves only that the demo can produce one shot. Create the five-minute film by generating additional shots and editing them together.

## Honest status
The GitHub connector can save this test plan but cannot submit a generation request to an external Hugging Face Space or download its video from within this chat. This file is not a generated clip.

# Alternative free video-generation models (GitHub research)

## Decision: try CogVideoX-2B first for lower hardware requirements
Official repository: https://github.com/zai-org/CogVideo
The maintainer's README says CogVideoX-2B can run on older GPUs such as GTX 1080 Ti, while 5B targets desktop GPUs such as RTX 3060. It supports text-to-video; the 2B model's listed output is 720×480 with 8N+1 frames (49 frames by default). It will still need a compatible GPU and setup. Model code repo license: Apache-2.0; verify the exact checkpoint's model card/terms before commercial use.
Online demo (may have queue/quotas): https://huggingface.co/spaces/THUDM/CogVideoX-5B

## Alternative: LTX-Video 2B distilled
Official repository: https://github.com/Lightricks/LTX-Video
This is an Apache-2.0 code repository with 2B distilled model checkpoints and ComfyUI workflows documented in the README. A local GPU or a hosted demo is still needed; open-source does not mean free hosted compute.

## Newer but heavier: LTX-2 / LTX-2.5
Official repository: https://github.com/Lightricks/LTX-2
The current README describes synchronized audio/video generation and provides inference steps, but the 22B model parts in the documented quick start total roughly 66 GiB of downloads, so it is not the best low-resource choice. The README points to https://console.ltx.video/playground for an online playground; free usage/credits are subject to the service's current terms.

## Why not continue with Wan2.2 for now?
Wan2.2 is open-weight, but our attempted GitHub Actions job is queued awaiting a self-hosted GPU runner. It cannot render from a standard GitHub Actions runner without suitable GPU compute.

## Reality check about five minutes
None of these models is likely to create a polished five-minute film in one call. Generate short clips, then edit, add narration/music, and export the assembled MP4. Public demos can have queues and usage caps. No video has been rendered merely by saving prompts to GitHub.

## Recommended next steps
1. Try the CogVideoX hosted demo if you want to test without installing software: https://huggingface.co/spaces/THUDM/CogVideoX-5B
2. If using your own PC, start with CogVideoX-2B for a lower hardware threshold or LTX-Video 2B distilled using ComfyUI.
3. Check model/checkpoint terms before commercial use, and don't assume a demo is unlimited or permanently free.

# Can we run a free video model from this ChatGPT/GitHub workflow?

## Findings (checked 2026-10-22)

### Key limitation
GitHub stores the plan and workflow files, but does not itself give this conversation a GPU runtime. The current Actions run remains queued for a self-hosted runner labelled `self-hosted, linux, gpu`. No video artifact exists yet. See https://github.com/Medimix12/bookswap/actions

### Most practical option to try right now
**CogVideoX hosted demo:** https://huggingface.co/spaces/THUDM/CogVideoX-5B  
Official model/code repository: https://github.com/zai-org/CogVideo  
This is a public demo linked from the model authors' repository. It may be free while available, but its GPU queue/quota and current uptime are not guaranteed. It generates short clips; build the five-minute film from clips.

### Other browser-based candidates
- CogVideo Online: https://cogvideo.net/online — third-party hosted service that currently advertises free-to-start browser generation. It is not the official model-owner demo, so review its terms/privacy before uploading anything.
- NOVA AI Video Generator: https://novaos-original.github.io/nova-os-website/video-studio/ai-generator.html — currently advertises a public LTX Video model on a shared Hugging Face GPU queue; reliability depends on the backend Space.
- LTX-2.5 demo: https://huggingface.co/spaces/Lightricks/LTX-2.5 — official public Space, but requests may queue, fail due to GPU capacity, or use account quotas. A community client also exists at https://arpitkgoyal-ltx-2-5-demo.static.hf.space/index.html and says it forwards requests to the official Space; use your own Hugging Face token only if you trust the page and understand its handling.

### Is Google Colab a way?
Colab advertises free GPU access, but explicitly says availability/usage limits are not guaranteed. Its official FAQ also notes free managed runtimes may terminate workloads that primarily use a web UI for content generation. Treat it as an experiment, not a dependable unattended five-minute render. Source: https://research.google.com/colaboratory/faq.html

## Recommended immediate path
1. Open the official CogVideoX Hugging Face Space above and test one short universe prompt.
2. If the Space works, generate short shots from the 30 scene prompts in `universe-scenes.json`; download each result.
3. Assemble in a local editor or another accessible render environment. A true five-minute deliverable needs editing, narration, and audio in addition to generated shots.

## Honest status
The browser/GitHub connector can search repositories and write project files, but it cannot execute inference on a GPU inside this chat. No model has been run from this conversation, and no five-minute MP4 has been produced. The links above are candidates for an external hosted runtime, not proof of live successful generation.

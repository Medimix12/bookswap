# Free open models that can work in this ChatGPT + GitHub setup

Updated 2026-10-22.

## Important distinction: model vs runtime
GitHub is useful for discovering models and storing code, prompts, scripts, and outputs. The GitHub connector available in this workflow can read/write GitHub content, but does not run arbitrary Python or load model weights on a GPU/CPU in this chat. A public hosted demo or separate runtime is required to actually execute inference.

## Most useful model families beyond video

### 1. Text / code / reasoning models
- Ollama: https://github.com/ollama/ollama — free local runner for open model families such as Qwen, Gemma, Llama, and others. Requires a local computer or hosted VM; it does not run directly in GitHub connector.
- llama.cpp: https://github.com/ggml-org/llama.cpp — CPU/GPU inference for quantized models on compatible hardware.
Use: summarize text, draft code, classify data, answer questions. Not executable from this chat through GitHub alone.

### 2. Speech-to-text
- Whisper reference implementation: https://github.com/openai/whisper
- faster-whisper: https://github.com/SYSTRAN/faster-whisper
Use: transcribe audio. Requires an execution environment with dependencies and model files.

### 3. Text-to-speech
- Piper: https://github.com/rhasspy/piper
Use: synthesize spoken narration from text. Requires local or hosted execution. Review voice/model licenses individually.

### 4. Image generation
- Stable Diffusion WebUI: https://github.com/AUTOMATIC1111/stable-diffusion-webui
- ComfyUI: https://github.com/comfyanonymous/ComfyUI
Use: generate images, storyboards, thumbnails, and stills. Usually needs GPU for practical speed and cannot be launched by the GitHub connector itself.

### 5. Embeddings / semantic search
- Sentence Transformers: https://github.com/huggingface/sentence-transformers
Use: semantic search, clustering, recommendations, document similarity. Many models can run on CPU after installation.

## What can run “from here”?
- Directly through GitHub connector: repository search/read/write, edit code/config files, create scripts and workflow definitions, inspect Actions metadata/logs/artifacts when available.
- Not directly through the GitHub connector: execute model inference, obtain GPU allocation, invoke arbitrary public demos, or guarantee free hosted compute.
- GitHub Actions typically provides ephemeral runners, but the currently configured workflow explicitly requires a self-hosted runner labelled `self-hosted, linux, gpu`; it stays queued if no matching runner is online. Standard hosted Actions should not be treated as a free, persistent model server.

## Recommendation
For workflows entirely within this chat + GitHub connector, use model-generated plans/code/configs and GitHub as storage; do not claim inference happened unless a run log or real output artifact confirms it. If the goal is to use models without local hardware, choose a public Hugging Face Space or another hosted service separately, noting its queue and quotas.

# A Journey Through the Universe — 5-Minute Video Starter

This repository contains a production plan and script, not a rendered video file. Wan2.2 generates short clips; assemble the results in a video editor to reach five minutes.

## Recommended free/open model
- Official model repository: https://github.com/Wan-Video/Wan2.2
- Suggested model: Wan2.2 TI2V-5B (text/image-to-video; supports 720p at 24 fps).
- The model code repository uses Apache-2.0; check the model checkpoint card/license for your specific use.
- Model generation is free to download, but compute may require a capable local GPU or a cloud GPU with quotas/costs.

## Video format
- Runtime: 5:00
- Landscape 16:9, 720p, 24 fps
- Plan: 30 shots of about 10 seconds each. Generate variants and edit the strongest clips.
- Audio: English narration, subtle ambient music, simple transitions, chapter titles.

## Voiceover script and visual prompts

### 00:00–00:30 — The quiet beginning
**Narration:** Before the first sunrise, before the first ocean wave, the universe was almost impossibly simple: hot, dense, and changing. From that beginning came everything we can see—and perhaps more than we will ever know.
**Visual prompts:** (1) Cinematic black frame slowly filled by a tiny radiant point, subtle cosmic dust, slow push-in. (2) Expanding luminous plasma wave, abstract scientific visualization, deep indigo and gold, slow motion. (3) Vast dark space emerging from light, elegant documentary style.

### 00:30–01:00 — A universe takes shape
**Narration:** As the universe expanded and cooled, particles formed, atoms followed, and gravity began its patient work. Matter gathered into clouds. Over time, those clouds became the first stars, turning darkness into islands of light.
**Visual prompts:** (4) Wisps of primordial gas drifting together in a dark cosmos. (5) Gravity pulling a glowing nebula inward, time-lapse. (6) First stars igniting inside a blue-violet cloud, cinematic wide shot.

### 01:00–01:30 — The stellar forge
**Narration:** Stars are more than points in the sky. They are furnaces. Deep inside them, pressure and heat transform simple elements into heavier ones. When massive stars die, they scatter those elements into space—the raw ingredients for planets and life.
**Visual prompts:** (7) Close-up of a brilliant star surface with solar prominences. (8) Star glowing in a dusty nebula, slow camera orbit. (9) Supernova blooming outward in a luminous expanding shell, scientifically inspired, no text.

### 01:30–02:00 — Galaxies like cities
**Narration:** Over billions of years, stars gathered into galaxies: immense cities of light separated by unimaginable distances. Each galaxy holds its own history, and each tiny patch of sky may contain more worlds than we can count.
**Visual prompts:** (10) Spiral galaxy rotating slowly, crisp arms and glowing core. (11) Camera drifting past multiple galaxies in a deep field. (12) Edge-on galaxy with dark dust lanes, majestic scale, smooth tracking shot.

### 02:00–02:30 — Our solar system
**Narration:** Around one ordinary star, a disk of dust and rock began to collide and combine. The planets formed. The young Earth was violent, molten, and unrecognizable—but it was becoming a place where something extraordinary could happen.
**Visual prompts:** (13) Protoplanetary disk around a young star, orbiting dust and rocks. (14) Molten early Earth, glowing lava and volcanic atmosphere, space view. (15) Earth cooling into oceans beneath a dramatic early atmosphere, slow orbital reveal.

### 02:30–03:00 — A living planet
**Narration:** On Earth, chemistry found pathways toward biology. Life reshaped the atmosphere and oceans. Over immense spans of time, simple organisms diversified, ecosystems spread, and eventually eyes turned toward the night sky that had always been above them.
**Visual prompts:** (16) Ancient ocean with hydrothermal vents, atmospheric documentary lighting. (17) Abstract microscopic early life drifting through water, macro cinematography. (18) Lush prehistoric landscape at dawn with mist and distant flying creatures, natural history film style.

### 03:00–03:30 — Looking outward
**Narration:** Humans learned to read the sky. We built instruments that gather faint light from distant objects and turn it into evidence. Telescopes are time machines: the farther away we look, the further into the past we see.
**Visual prompts:** (19) Observatory telescope rotating under a star-filled desert sky. (20) Close-up of telescope mirror catching starlight, realistic engineering detail. (21) View from orbit toward a colorful deep-space nebula, slow approach.

### 03:30–04:00 — Worlds beyond our own
**Narration:** Around other stars, planets travel on their own paths. Some may be scorched; others frozen. A few orbit where liquid water might be possible. We do not yet know whether life is common or rare, but the search changes how we understand our place in the cosmos.
**Visual prompts:** (22) Planet transiting a bright distant star, precise astronomical visualization. (23) Rocky exoplanet with thin atmosphere near a red dwarf, cinematic but plausible. (24) Ocean world beneath an alien sky, speculative science documentary, no creatures visible.

### 04:00–04:30 — The invisible universe
**Narration:** Much of the cosmos remains mysterious. Dark matter reveals itself through gravity. Dark energy describes the observed acceleration of cosmic expansion. These names mark the edge of our understanding—not the end of the questions.
**Visual prompts:** (25) Galaxy cluster with subtle gravitational lensing arcs, scientific visualization. (26) Large-scale cosmic web, glowing filaments and dark voids, camera flying slowly. (27) Expanding grid of galaxies across deep space, elegant abstract visualization.

### 04:30–05:00 — A small world, a vast future
**Narration:** From a small planet, we have measured the age of stars, mapped galaxies, and begun to explore other worlds. The universe is vast, but so is human curiosity. Every answer opens another question. And every clear night reminds us that our story is still unfolding.
**Visual prompts:** (28) Earth rising over the lunar horizon, realistic and quiet, slow camera movement. (29) Astronaut silhouette looking toward a dense starfield, reflective wide shot. (30) Slow pullback from Earth to the Milky Way and finally a vast star-filled cosmos, fade to black.

## Consistent style suffix
Add this to every prompt: “cinematic science documentary, physically plausible, slow stable camera, detailed volumetric lighting, no titles, no logos, 16:9 landscape.”

## Generation and editing workflow
1. Read the official Wan2.2 setup and inference instructions: https://github.com/Wan-Video/Wan2.2#run-wan22
2. Use the TI2V-5B model in a compatible ComfyUI workflow or official inference path. The larger A14B text-to-video path needs substantial GPU memory; prefer 5B if hardware is limited.
3. Generate 5–10 second shots. Keep a shared visual style suffix across scenes to improve consistency.
4. Choose about 30 clips, trim them to a combined 300 seconds, and arrange them in timestamp order.
5. Record or synthesize narration from the script. Mix voice above music and use appropriately licensed music and effects.
6. Edit in Kdenlive or DaVinci Resolve. Add restrained fades and chapter labels; export H.264 MP4 at 1280×720, 24 fps. Upscale to 1080p only if needed.

## Important note
A five-minute AI video is an editing project, not a single model call. Public demo availability and GPU quotas vary. This document is a starter plan; it does not include generated footage or audio.

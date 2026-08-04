# Image shortlist

Candidate images per guide, all from Unsplash (free for commercial use, no
attribution required — though crediting is good practice).

**These are candidates, not selections.** I could not view them, so treat every
row as "open it and decide". Some may not suit; the alternates column exists for
that. Any guide you skip keeps its generated plate, and mixing looks deliberate.

## How to use this

For each row you like:

1. Open the URL
2. Click **Download free** → choose **Small (640px)** or **Medium (1920px)**
3. Rename the file to the slug in column one, with a `.webp` extension if you
   convert, or leave it `.jpg` — both work
4. Save it into this folder (`src/assets/Images/guides/`)

That's it. No code change. Rebuild and it appears on the guide page and its
library card.

**Converting to webp** (optional — jpg is fine, webp is ~30% smaller). `sharp`
is already installed in this project, so from the repo root:

```bash
node -e "
const sharp=require('sharp'),fs=require('fs'),p='src/assets/Images/guides/';
fs.readdirSync(p).filter(f=>/\.(jpg|jpeg|png)$/i.test(f)).forEach(f=>{
  const out=p+f.replace(/\.(jpg|jpeg|png)$/i,'.webp');
  sharp(p+f).resize(1600,null,{withoutEnlargement:true}).webp({quality:80})
    .toFile(out).then(()=>{fs.unlinkSync(p+f);console.log('converted',out)});
});"
```

That resizes to 1600px wide, converts to webp at quality 80, and deletes the
original. Run it after dropping any batch of images in.

---

## AI & Engineering

| Guide slug | Image | Notes |
|---|---|---|
| `how-machine-learning-actually-works` | [Abstract neural network background](https://unsplash.com/photos/abstract-neural-network-technology-background-JR5NaQmOSqo) | Blue/abstract, should sit well on navy |
| `neural-networks-explained` | [Neural network / AI brain concept](https://unsplash.com/photos/digital-rendering-of-a-neural-network-or-ai-brain-concept-using-glowing-blue-lines-and-a-sunrise-like-light-burst-for-a-futuristic-and-high-tech-visual-1I_FQ-KoKC8) | Check it isn't too "glowing brain" — that's the cliché to avoid |
| `how-large-language-models-work` | [Artificial neural network visualisation](https://unsplash.com/photos/a-conceptual-visualization-of-an-artificial-neural-network-the-glowing-nodes-and-interconnected-lines-represent-neurons-and-synapses-processing-information-within-a-deep-learning-model-7px0qo55xUI) | Nodes + links, echoes the generated plates |
| `rag-explained` | [Defocus dots and lines, dark](https://unsplash.com/photos/defocus-dots-and-lines-connection-on-abstract-technology-background-GQ4_WLi-qOc) | Soft focus, good for text overlay |
| `what-is-artificial-intelligence` | [Circuit board, abstract, dark](https://unsplash.com/photos/circuit-boardabstract-network-technology-background3d-renderingconceptual-image-6dJ6nRcmg1U) | |
| `cybersecurity-basics-for-builders` | [Dark room filled with servers](https://unsplash.com/photos/a-dark-room-filled-with-lots-of-servers-1FbFuzNesR4) | Tagged cyber security |
| `api-integration-that-doesnt-break` | [Blue ethernet cables in a rack](https://unsplash.com/photos/an-artistic-close-up-of-blue-ethernet-cables-organized-in-a-server-rack-this-image-showcases-modern-technology-and-data-connectivity-in-a-digital-environment-ZoiKsSBoJCc) | Literal but clean |
| `evaluating-ai-systems` | [Server room, rows of servers](https://unsplash.com/photos/a-server-room-with-rows-of-data-servers-_ov9HrXs9ms) | |
| `building-your-first-ai-agent` | [Blue and black servers](https://unsplash.com/photos/a-room-filled-with-lots-of-blue-and-black-servers-8pUDMDdjNTE) | |
| `data-cleaning-fundamentals` | [Abstract architecture, dark ground](https://unsplash.com/photos/abstract-architecture-against-a-dark-background-4NtZ0yU50lY) | Structure/order reads well for this topic |
| `python-for-data-work` | [Dimly lit desk, laptop and monitor](https://unsplash.com/photos/a-dimly-lit-desk-with-a-laptop-and-monitor-IUKdnYUlDco) | |

## Life & Career, Business

| Guide slug | Image | Notes |
|---|---|---|
| `deep-work-and-focus` | [Dimly lit desk, laptop and monitor](https://unsplash.com/photos/a-dimly-lit-desk-with-a-laptop-and-monitor-IUKdnYUlDco) | Same as above — use on one, not both |
| `clear-writing-that-gets-read` | [Dark and moody stone texture](https://unsplash.com/photos/a-dark-and-moody-stone-texture-If2Ekdoh-tw) | Abstract texture beats a photo of a notebook |
| `time-management-systems-compared` | [Light trails on a city street at night](https://unsplash.com/photos/light-trails-on-a-city-street-at-night-HYkuuAFIXks) | Motion/time, not literal clocks |
| `automation-worth-building` | [Nighttime traffic light trails, long exposure](https://unsplash.com/photos/nighttime-traffic-light-trails-captured-with-long-exposure-6-QINjM3DSM) | Flow/throughput |
| `building-habits-that-stick` | [City street at night with light trails](https://unsplash.com/photos/city-street-at-night-with-light-trails-F-iQE69s2ac) | Repetition/accumulation |

## Browse pages, if none of the above fit

- [Abstract dark](https://unsplash.com/s/photos/abstract-dark)
- [Minimal abstract](https://unsplash.com/s/photos/minimal-abstract)
- [Abstract architecture](https://unsplash.com/s/photos/abstract-architecture)
- [Long exposure](https://unsplash.com/s/photos/long-exposure)
- [Texture / pattern / grey collection](https://unsplash.com/collections/1467303/texture)

## What to avoid

Handshakes, lightbulbs, glowing brains, people pointing at whiteboards, anyone
smiling at a laptop. These read as filler and will cheapen pages that currently
look considered. Abstract texture, architecture, materials and macro detail all
sit far better with the monograph aesthetic.

## Adding a credit line

The filename convention uses the guide title as alt text and shows no credit.
For anything you keep, set it explicitly on the guide instead — better alt text
and a small credit bottom-right of the hero:

```ts
heroImage: {
  src: "/src/assets/Images/guides/my-image.webp",
  alt: "Rows of dark server racks lit from below",
  credit: "Photo: Mohamed Nohassi / Unsplash",
},
```

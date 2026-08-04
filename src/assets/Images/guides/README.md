# Guide hero images

Drop an image in here named after the guide's slug and it appears
automatically as that guide's hero — on the guide page and on its card
in the library. No code change needed.

    src/assets/Images/guides/how-machine-learning-actually-works.jpg
    src/assets/Images/guides/building-your-first-ai-agent.jpg

The slug is the guide's filename in `src/content/guides/` without `.ts`,
and it's also the last part of the guide's URL:

    /resources/building-your-first-ai-agent
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is the slug

Accepted: `.jpg`, `.jpeg`, `.png`, `.webp`.
Any guide without a matching file keeps its generated plate artwork —
mixing the two across the library is fine and looks deliberate.

## Picking images

- **Aspect**: roughly 2.3:1 (e.g. 1600×700). It's rendered with
  `object-fit: cover`, so anything wide works; very tall images get
  cropped hard top and bottom.
- **Size**: aim under ~300 KB each. Vite hashes and serves them as
  bundled assets, but it does not resize — a 6 MB camera JPEG ships at
  6 MB. Resize before adding.
- **Subject**: the image sits under a navy gradient wash, so pick
  something with a clear, uncluttered area toward the bottom where the
  wash is strongest. Busy or high-contrast photos fight the overlay.
- **Avoid** literal stock clichés — handshakes, lightbulbs, glowing
  brains, people pointing at whiteboards. They actively cheapen the
  page. Abstract texture, architecture, materials and macro detail all
  sit better with the monograph look than "people doing business".

## Licensing — please read

Only use images whose licence permits commercial use. Good sources:

- **Unsplash** — unsplash.com/license
- **Pexels** — pexels.com/license
- **Wikimedia Commons** — check each file, licences vary per image

Two things that matter:

1. **Check the licence on the specific image**, not just the site.
   Wikimedia in particular hosts everything from public domain to
   share-alike to non-commercial.
2. **Credit the photographer.** Several of these licences describe
   attribution as appreciated rather than required, but crediting is
   both good practice and cheap insurance. To add a credit line, set
   `heroImage` explicitly on the guide instead of using the filename
   convention:

```ts
heroImage: {
  src: "/src/assets/Images/guides/my-image.jpg",
  alt: "A short description of what the image shows",
  credit: "Photo: Jane Doe / Unsplash",
},
```

Setting `heroImage` also lets you write proper alt text. With the
filename convention the alt text falls back to the guide title, which
is adequate but not descriptive — worth upgrading for anything you keep.

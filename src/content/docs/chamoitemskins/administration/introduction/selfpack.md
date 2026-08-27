---
title: "Using self-pack"
---

Self pack, is the name of the utility that allows you to host a texture pack, with an HTTP server and apply it to your
players. It has 2 main modes:
- Make the utility make the texture pack
- Provide the texture pack yourself

Now we will go through detail for the two of the different modes

### Provide the texture pack yourself

1. Disable the `pre-make` option in your config
2. Copy your zipped texture pack to `./selfpack/` (Relative to the plugins path)
3. Rename your texture pack to: `resourcepack.zip`

### "Pre-Make" the texture pack

1. Enable the `pre-make` option in your config
2. Copy the item models (The ones that define which type and more it is using (Also this is your model id)) to `./selfpack/models/items`
3. Copy the item textures to `./selfpack/models/textures`
4. (Optional) Copy the exported file from Blockbench (If using Blockbench models) to `./selfpack/models/`

## General Options

You can see the other options [here](/docs/chamoitemskins/administration/introduction/configuring/#selfpack) in a more detailied guide
---
title: "Placeholders"
description: "All the placeholders of ChamoItemSkins and what do they return"
---

:::note

**You will need PlaceholderAPI to use these placeholders**

:::

### `%chamoitemskins_total_skins%`

Returns the number of currently enabled skins

### `%chamoitemskins_rarity_<skinid>%`

Get the rarity of the skin, by the skin id. It will return an empty string is rarities are disabled.

### `%chamoitemskins_total_bundles%`

Returns the number of Bundles that exist

## The below placeholders need to have a player

:::note

Most of the time, it will have a player parsing the placeholders, so you don't have tp worry

:::

### `%chamoitemskins_active_<material>%`

Get the names of the skins a player is using for items in their inventories with that material

### `%chamoitemskins_owns_<skinid>%`

Get a `true`/`false` about if a player owns a skin.

### `%chamoitemskins_total_owned%`

Get the number of skins a player has

### `%chamoitemskins_owns_bundle_<bundleid>%`

Get a `true`/`false` about if a player owns a Bundle
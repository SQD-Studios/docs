---
title: "API Examples"
---

### Applying Skins to Items

:::caution

This doesn't check if the player owns the skin or not, so you have to check it yourself. It also doesn't send the
messages to the player.

:::

```java 
GrantService service = api.getGrantService;

service.setActiveSkin(player.getUuid(), item_material, skinId);
```

### Removing skins from items

It's as simple as doing:

```java 
GrantService service = api.getGrantService;

service.setActiveSkin(player.getUuid(), item_material, null);
```

It may cause confusion that setting null unsets the skin, so be careful

### Getting the active skin from an item

```java 
GrantService service = api.getGrantService
SkinService sService = api.getSkinService

Optional<String> oSkinId = service.getActiveSkin(player.getUuid(), item_material)
if (skinId.isPresent()) { // If it isn't present it means it doesn't have an active skin
    Skin skin;
    Optional<Skin> oSkin = sService.getSkin(skinId)
    if (oSkin.isPresent()) {
        skin = oSkin.get();
        // Your operation with the skin
    }
}
```
### Checking if a player has a skin

```java 
GrantService service = api.getGrantService;

boolean hasSkin = service.hasSkin(player.getUuid(), skinId);
```
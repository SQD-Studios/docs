---
title: "FavoriteService"
---

### Getting the `FavoriteService` instance

```java
FavoriteService service = api.getFavoriteService();
```

#### Change the favorite status for a player's skin

```java 
service.changeFavoriteSkin(player, skin);
```

#### Get a `Collection<Skin>` of favorite skins from a player

```java 
service.getFavoriteSkinsFromPlayer(player);
```
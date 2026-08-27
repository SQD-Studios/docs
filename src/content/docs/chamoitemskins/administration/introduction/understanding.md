---
title: Understanding concepts of ChamoItemSkins
---

ChamoItemSkins is not a simple plugin, nor an advanced plugin. For example, I (The one writing this), understand this
plugin because I made it, but others don't because of its concepts.

# Notes

**Notes** are a way for players to claim skins or bundles. Notes, are physical (configurable) items that when someone
clicks them, it gives them access for the skin/bundle it was made for. You can give notes to players by commands, or if
you want skip the entire proccess and give acces to a skin directly.

# Bundles

**Bundles**, are a collection of skins, you can grant at once. After granting a bundle, you give the player acces to all
the skins it has. When revoking access to a bundle, it removes all the skins the bundle had inside, and doesn't care if
the player had a skin before the bundle was granted to him

# Skins

**Skins**, are "Skins" for items players have. It can have "Categories", which determine which items it can be applied
to. After a player applies the skin through the GUI, it applies a model (A texture pack item texture) in all the items
of the same type the player was holding when applying the skin

# Grants

**Grants**, are a way to tell a player's ownership of a skin. You can grant skins/bundles to players for a limited
amount of time and have it "revoke" them when the time ends.

# Rarities

You can assign Rarities to certain skins, to mark how rare they are. You can disable this feature in the config.

---
title: "Commands"
description: "All the commands of ChamoItemSkins and what they do"
---

This page is to help you find all the commands we have.

## User Commands

This section is for commands that anybody can run, without having OP (Can be overidden by permissions)

- `/skins` - This command opens the "Main GUI"

## Admin Commands

This section is for commands that only players with the permission can run (Which defaults to OP)

- `/skins [player]` - Opens the "Main GUI" for the specified player. Can only be run by players

- `/skinsadmin` - Opens the "Admin GUI". Can only be run by players
    - `editor` - Opens the [Editor](/docs/chamoitemskins/administration/introduction/editor)
    - `access` - Gives or revokes access to skins
        - `give <target> <skinid> [expires when]` - Give access to a player for a skin. If the passed arguement
          in [expires when] is -1, it will default to permanent
        - `revoke <target> <skinid>` - Revokes access to a player's skin
    - `give <target> <skinid> [amount] [time]` - Gives a skin note to a player. The player must be online. [amount]
      defaults to 1, and if in [time], is passed -1, it's permanent
    - `migrate hmcwarps` - Migrates from HMCWarps. You need to have the plugin enabled to work.
    - `reload` - Reloads the plugin
    - `help` - Brings a list of commands
    - `bundle` - Bundle related commands
        - `access` - Access related commands
            - `give <target> <bundleid>` - Gives access to all skins that the bundle had
            - `revoke <target> <bundleid>` - Revokes all skins that the bundle had from the player
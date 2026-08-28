---
title: "MigrateService"
---

### Getting the `MigrateService` instance

```java
MigrateService service = api.getMigrateService();
```

#### Migrating from HMCWarps

```java 
service.migrateHMC(Bukkit.getConsoleSender());
```
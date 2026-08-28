---
title: "RarityService"
---

### Getting the `MigrateService` instance

```java
RarityService service = api.getRarityService();
```

:::note

You should check `service.isEnabled()`, and if it is false to not use the `RarityService`

:::
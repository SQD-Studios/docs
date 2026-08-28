---
title: "CategoryService"
---

### Getting the `CategoryService` instance

```java
CategoryService service = api.getCategoryService();
```

#### Getting a list with the categories

```java
List<Category> categories = service.getCategories();
```

#### Get the category by name

```java
Category category = service.getCategoryByName("Category Name");
```

#### Get a category `Map<Category Name, Category Object>`

```java 
Map<String, Category> cMap = service.getCategoryMap();
```
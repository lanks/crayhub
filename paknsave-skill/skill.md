---
name: paknsave-skill
description: Shop on paknsave with your personal shopping agent.
---

# Paknsave Skill

## login

Login to paknsave.

Parameters:


```json
{
  "name": "login",
  "type": "http",
  "parameters": {
  },
  "request": {
    "method": "POST",
    "url": "https://www.paknsave.co.nz/api/user/login",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "banner": "PNS",
      "email": "{email}",
      "fingerprintGuest": "{userAgent}",
      "password": "{password}",
      "sourceApplication": "WEB"
    }
  }
}
```

## getCurrentUser

Get an anonymous session token from Paknsave.

Parameters:


```json
{
  "name": "getCurrentUser",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "POST",
    "url": "https://www.paknsave.co.nz/api/user/get-current-user",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "fingerprintUser": "{fingerprintUser}",
      "fingerprintGuest": "{userAgent}"
    }
  }
}
```

## chooseStore

Choose the store location the customer is going to shop at.

Parameters:


```json
{
  "name": "chooseStore",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "GET",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/cart",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    }
  }
}
```

## getStoreId

Get the store id for the chosen store location.

Parameters:


```json
{
  "name": "getStoreId",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "GET",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/cart",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    }
  }
}
```

## searchProducts

Search for products on Paknsave.

Parameters:


```json
{
  "name": "searchProducts",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "POST",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/search/products/query/index/products-index-popularity-asc",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    },
    "body": {
      "algoliaQuery": {
        "query": "{searchQuery}",
        "analyticsTags": ["fs#WEB:desktop"],
        "hitsPerPage": 5,
        "facetFilters": [["stores:{storeId}"], ["tobacco:false"]]
      },
      "disableAds": true,
      "publishImpressionEvent": false
    }
  }
}
```

## addToCart

Add a product to the cart.

Parameters:


```json
{
  "name": "addToCart",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "POST",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/cart",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    },
    "body": {
      "products": [
        {
          "productId": "{productId}",
          "quantity": 1,
          "sale_type": "UNITS"
        }
      ]
    }
  }
}
```

## getAvailableTimeslots

Get available click and collect timeslots for a store.

Parameters:


```json
{
  "name": "getAvailableTimeslots",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "GET",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/store/{storeId}/clickAndCollectSlots?type=COMBINED",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    }
  }
}
```

## chooseTimeslot

Reserve a click and collect timeslot for pickup.

Parameters:


```json
{
  "name": "chooseTimeslot",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "PUT",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/cart/timeslot/{timeslotId}/reserve",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    }
  }
}
```

## getShoppingLists

Get all shopping lists for the current user.

Parameters:


```json
{
  "name": "getShoppingLists",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "GET",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/list",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    }
  }
}
```

## getShoppingList

Get a specific shopping list with its products.

Parameters:


```json
{
  "name": "getShoppingList",
  "type": "http",
  "parameters": {},
  "request": {
    "method": "GET",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/list/{listId}",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {accessToken}"
    }
  }
}
```
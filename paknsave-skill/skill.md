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

## chooseStore

Choose the store location the customer is going to shop at.

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

## getStoreId

Get the store id for the chosen store location.

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

## searchProducts

Search for products on Paknsave.

Parameters:


```json
{
  "name": "searchProducts",
  "type": "http",
  "parameters": {
  },
  "request": {
    "method": "POST",
    "url": "https://api-prod.paknsave.co.nz/v1/edge/search/products/query/index/products-index-popularity-asc",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {"algoliaQuery":{"query":"{searchQuery}","analyticsTags":["fs#WEB:desktop"],"hitsPerPage":5,"facetFilters":[["stores:{storeId}"],["tobacco:false"]]},"disableAds":true,"publishImpressionEvent":false}
  }
}
```
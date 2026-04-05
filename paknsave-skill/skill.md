---
name: paknsave-skill
description: Shop on PAK'nSAVE with your personal shopping agent. Search products, manage cart, book pickup timeslots, and view shopping lists.
---

# PAK'nSAVE Skill

## How to execute

IMPORTANT: Do NOT execute the requests in this file directly via curl, fetch, or any other method outside the browser. All functions in this skill MUST be executed inside a browser context.

For each function below:
1. Open a browser and navigate to the function's **Target URL**.
2. Inject the skill runtime by adding `scripts/skill-bundle.js` to the page.
3. Call `window.webSkill.execute("<functionName>", { ...params })` in the browser.
4. The result is `{ success: boolean, data?: any, error?: string }`.

## Available Functions

### login

Login to PAK'nSAVE with email and password.

- **Target URL:** `about:blank`

Parameters:
- email (string): Account email address
- password (string): Account password
- userAgent (string): Browser user agent string

Example:
```js
await window.webSkill.execute("login", {
  email: "user@example.com",
  password: "secret",
  userAgent: navigator.userAgent
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "login",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "email": "string",
    "password": "string",
    "userAgent": "string"
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

### getCurrentUser

Get an anonymous session token from PAK'nSAVE. Returns an `access_token` that can be used as `accessToken` in other functions.

- **Target URL:** `about:blank`

Parameters:
- fingerprintUser (string): A fingerprint hash for the user
- userAgent (string): Browser user agent string

Example:
```js
await window.webSkill.execute("getCurrentUser", {
  fingerprintUser: "463c703ebf536f0ff79c34910a31e7dc",
  userAgent: navigator.userAgent
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "getCurrentUser",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "fingerprintUser": "string",
    "userAgent": "string"
  },
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

### chooseStore

Get the current cart, which includes the active store information.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser

Example:
```js
await window.webSkill.execute("chooseStore", {
  accessToken: "eyJ..."
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "chooseStore",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string"
  },
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

### getStoreId

Get the store ID for the currently chosen store. Uses the same cart endpoint as chooseStore.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser

Example:
```js
await window.webSkill.execute("getStoreId", {
  accessToken: "eyJ..."
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "getStoreId",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string"
  },
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

### searchProducts

Search for products on PAK'nSAVE by keyword.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser
- searchQuery (string): Search term (e.g. "milk", "bread")
- storeId (string): Store UUID to search within

Example:
```js
await window.webSkill.execute("searchProducts", {
  accessToken: "eyJ...",
  searchQuery: "freyas",
  storeId: "21ecaaed-0749-4492-985e-4bb7ba43d59c"
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "searchProducts",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string",
    "searchQuery": "string",
    "storeId": "string"
  },
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

### addToCart

Add a product to the cart.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser
- productId (string): Product ID (e.g. "5259530-EA-000")

Example:
```js
await window.webSkill.execute("addToCart", {
  accessToken: "eyJ...",
  productId: "5259530-EA-000"
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "addToCart",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string",
    "productId": "string"
  },
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

### getAvailableTimeslots

Get available click and collect timeslots for a store.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser
- storeId (string): Store UUID

Example:
```js
await window.webSkill.execute("getAvailableTimeslots", {
  accessToken: "eyJ...",
  storeId: "21ecaaed-0749-4492-985e-4bb7ba43d59c"
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "getAvailableTimeslots",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string",
    "storeId": "string"
  },
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

### chooseTimeslot

Reserve a click and collect timeslot for pickup.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser
- timeslotId (string): Timeslot UUID from getAvailableTimeslots

Example:
```js
await window.webSkill.execute("chooseTimeslot", {
  accessToken: "eyJ...",
  timeslotId: "635c8b38-ab22-4437-9f13-ef4c2d37884d"
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "chooseTimeslot",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string",
    "timeslotId": "string"
  },
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

### getShoppingLists

Get all shopping lists for the current user.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser

Example:
```js
await window.webSkill.execute("getShoppingLists", {
  accessToken: "eyJ..."
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "getShoppingLists",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string"
  },
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

### getShoppingList

Get a specific shopping list with its products.

- **Target URL:** `about:blank`

Parameters:
- accessToken (string): Bearer token from login or getCurrentUser
- listId (string): Shopping list UUID

Example:
```js
await window.webSkill.execute("getShoppingList", {
  accessToken: "eyJ...",
  listId: "2affb571-a891-4ca0-bcc4-b576787fd82c"
})
```

<!-- engine-definition: do not execute directly -->
```json
{
  "name": "getShoppingList",
  "type": "http",
  "target_url": "https://www.paknsave.co.nz/",
  "parameters": {
    "accessToken": "string",
    "listId": "string"
  },
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

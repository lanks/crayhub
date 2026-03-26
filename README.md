# CrayHub

A collection of web skills that let AI agents interact with online services. Each skill defines a set of HTTP actions that an agent can execute to perform tasks on behalf of a user.

## Skills

### paknsave-skill

Shop on PAK'nSAVE (New Zealand grocery store) with your personal shopping agent.

**Actions:**

- **login** - Authenticate with email and password
- **getCurrentUser** - Get an anonymous session token
- **chooseStore** / **getStoreId** - Select and retrieve the active store
- **searchProducts** - Search the product catalogue by keyword
- **addToCart** - Add a product to the cart
- **getAvailableTimeslots** - List click & collect pickup windows for a store
- **chooseTimeslot** - Reserve a pickup timeslot
- **getShoppingLists** / **getShoppingList** - View saved shopping lists and their products

## How it works

Each skill is defined in a `skill.md` file with YAML frontmatter (name, description) and a series of action definitions. Actions are JSON blocks describing HTTP requests with templated parameters (e.g. `{accessToken}`, `{searchQuery}`).

The `scripts/script.js` entry point loads the skill markdown and exposes an `execute(name, args)` function via `window.clawSkill`.

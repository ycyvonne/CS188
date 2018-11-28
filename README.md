# Team Deez

View deployed site at: https://serene-tesla-b2da3f.netlify.com/

To start, run `yarn start`. Open [http://localhost:3000](http://localhost:3000).

## Architecture

The redux store is an array of ingredients a user has, all other data is handled directly via routing and direct api requests.

```
src/
├── actions # redux actions
├── components
├── global # global constants and styles
├── index.js # The base of the app. Routing and rendering is handled here.
├── pages # The individual pages of each app.
│   ├── IngredientSearch.js
│   ├── IngredientSearchResults
│   │   ├── container.js # redux container component
│   │   └── index.js # redux presentational component
│   ├── IngredientsPage
│   │   ├── container.js
│   │   └── index.js
│   ├── RecipeCustomize.js
│   ├── RecipePage.js
│   └── RecipeSearchResults
│       ├── container.js
│       └── index.js
└── reducers # redux reducer
```

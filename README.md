# Spice, by Team Deez

View deployed site at: https://serene-tesla-b2da3f.netlify.com/

To start, run `yarn start`. Open [http://localhost:3000](http://localhost:3000). To build, run `yarn build`.

## Architecture

Below is the arcitecture of the app.

```
src/
├── assets/ # Application assets
│   ├── icons/ # SVG icons
│   └── images/ # Images used by the app
├── base.js # Firebase configuration
├── components/ # Page Components
├── global/ # Global constants and styles
├── index.js # Starting point of the application. Handles routing and loading pages.
└── pages/ # Inidividual pages of the application
```

The following libraries are used:

- React
- Firebase and Re-base
- Reach Router
- Emotion
- Normalize.css
- Lodash

A previous version of the app used redux as well.

/* eslint-disable quotes */
module.exports = {
  "env": {
    "browser": true, // Add browser environment
    "node": true,
    "es6": true,
    "jest/globals": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:playwright/jest-playwright"],
  "globals": {
    "globalThis": false,
    "document": false, // Define document as a global variable
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": ["react", "jest"],
  "settings": {
    "react": {
      "version": "detect", // Specify React version
    },
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-console": "error",
    "react/prop-types": 0,
  },
}


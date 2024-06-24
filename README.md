## Installation

### ts-config

`npm i mandrade-ts-config --save-dev`

Add the rules to your `tsconfig.json`

```json
{
  "extends": "mandrade-ts-config",
  "compilerOptions": {
    // Your own configuration here ...
  }
}
```

### eslint (with Typescript)

Make sure you have eslint installed:

`npm install eslint --save-dev`

Then, install the rule package:

`npm i mandrade-eslint --save-dev`

And finally add the profile to your `.eslintrc` or `.eslintrc.json`:

```json
{
  "extends": "airbnb",
  "rules": {
    // Your own rules here...
  }
}
```

Don't forget to create a script in your pacakge.json to ensure the rules:

```json
{
	"scripts": {
		"lint": "eslint ."
		"lint:fix": "eslint . --fix"
	}
}
```

## Prettier with Eslint

Install the package:

`npm i mandrade-prettier`

Update your `eslint.config.js` to work with prettier:

```json
{
  "extends": ["plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

Create a script to format your code:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
    "format": "prettier --write ."
  }
}
```

## Installation

### ts-config

`npm i mandrade-ts-config --save-dev`

Add the rules to your `tsconfig.json`

```javascript
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

```javascript
{
  "extends": "airbnb",
  "rules": {
		// Your own rules here...
  }
}
```

Don't forget to create a script in your pacakge.json to ensure the rules:

```javascript
{
	"scripts": {
		"lint": "eslint ."
		"lint:fix": "eslint . --fix"
	}
}
```

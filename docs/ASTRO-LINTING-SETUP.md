# Astro Project Linting & Pre-commit Setup

A standardized code quality configuration for Astro projects using ESLint, Prettier, and Husky pre-commit hooks.

## Overview

This setup provides:

- **ESLint** with Astro plugin for linting `.astro`, `.js`, `.ts` files
- **Prettier** with Astro plugin for consistent code formatting
- **Astro Check** for type checking Astro components
- **Husky + lint-staged** for automatic pre-commit validation

---

## Quick Start

### 1. Install Dependencies

```bash
# Linting tools
npm install -D eslint eslint-plugin-astro @typescript-eslint/parser prettier prettier-plugin-astro

# Pre-commit hooks
npm install -D husky lint-staged

# Type checking (if not already installed)
npm install @astrojs/check typescript
```

### 2. Create ESLint Config

Create `eslint.config.js` in your project root:

```javascript
import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
	// Astro recommended config
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,ts}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
		rules: {
			// Add project-specific rules here
		},
	},
	{
		ignores: ["dist/", "node_modules/", ".astro/"],
	},
];
```

### 3. Create Prettier Config

Create `.prettierrc` in your project root:

```json
{
	"semi": true,
	"singleQuote": false,
	"tabWidth": 2,
	"useTabs": true,
	"trailingComma": "es5",
	"printWidth": 100,
	"plugins": ["prettier-plugin-astro"],
	"overrides": [
		{
			"files": "*.astro",
			"options": {
				"parser": "astro"
			}
		}
	]
}
```

Create `.prettierignore`:

```
dist/
node_modules/
.astro/
package-lock.json
```

### 4. Add npm Scripts

Add these scripts to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint . && astro check",
		"lint:fix": "eslint . --fix",
		"format": "prettier --write .",
		"format:check": "prettier --check .",
		"prepare": "husky"
	}
}
```

### 5. Initialize Husky

```bash
npx husky init
```

### 6. Configure Pre-commit Hook

Replace the contents of `.husky/pre-commit` with:

```bash
npx lint-staged
```

### 7. Add lint-staged Config

Add to your `package.json`:

```json
{
	"lint-staged": {
		"*.{js,mjs,ts}": ["eslint --fix", "prettier --write"],
		"*.astro": ["eslint --fix", "prettier --write"],
		"*.{json,md,css}": ["prettier --write"]
	}
}
```

---

## Available Commands

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run lint`         | Run ESLint + Astro type check    |
| `npm run lint:fix`     | Auto-fix ESLint issues           |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without changes |

---

## How Pre-commit Works

1. Developer stages files with `git add`
2. Developer runs `git commit`
3. Husky triggers the pre-commit hook
4. lint-staged runs linters **only on staged files**
5. If issues are found:
   - Auto-fixable issues are fixed and re-staged
   - Non-fixable issues block the commit
6. If all checks pass, commit proceeds

---

## Complete package.json Example

```json
{
	"name": "my-astro-project",
	"type": "module",
	"scripts": {
		"dev": "astro dev",
		"build": "astro build",
		"preview": "astro preview",
		"lint": "eslint . && astro check",
		"lint:fix": "eslint . --fix",
		"format": "prettier --write .",
		"format:check": "prettier --check .",
		"prepare": "husky"
	},
	"dependencies": {
		"@astrojs/check": "^0.9.6",
		"astro": "^5.x",
		"typescript": "^5.x"
	},
	"devDependencies": {
		"@typescript-eslint/parser": "^8.x",
		"eslint": "^9.x",
		"eslint-plugin-astro": "^1.x",
		"husky": "^9.x",
		"lint-staged": "^16.x",
		"prettier": "^3.x",
		"prettier-plugin-astro": "^0.14.x"
	},
	"lint-staged": {
		"*.{js,mjs,ts}": ["eslint --fix", "prettier --write"],
		"*.astro": ["eslint --fix", "prettier --write"],
		"*.{json,md,css}": ["prettier --write"]
	}
}
```

---

## Troubleshooting

### Pre-commit hook not running

```bash
# Reinstall husky hooks
npm run prepare
```

### ESLint not recognizing .astro files

Ensure `eslint-plugin-astro` is installed and the config includes `...eslintPluginAstro.configs.recommended`.

### Prettier not formatting .astro files

Ensure `prettier-plugin-astro` is in your `.prettierrc` plugins array.

### TypeScript errors in Astro check

Run `npm install typescript` and ensure `tsconfig.json` exists (Astro creates one by default).

---

## IDE Integration

### VS Code

Install these extensions:

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Add to `.vscode/settings.json`:

```json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[astro]": {
		"editor.defaultFormatter": "astro-build.astro-vscode"
	},
	"eslint.validate": ["javascript", "typescript", "astro"]
}
```

---

## Migration from Codacy

If your project currently uses Codacy, you can safely remove:

- `.codacy/` folder
- Any Codacy-related CI configuration

Codacy's tools don't natively support `.astro` files, making this Astro-native setup more effective.

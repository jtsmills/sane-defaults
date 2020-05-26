module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'no-console': 'error',
		'prettier/prettier': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{varsIgnorePattern: '^_', argsIgnorePattern: '^_'},
		],
		'object-shorthand': ['error', 'always'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

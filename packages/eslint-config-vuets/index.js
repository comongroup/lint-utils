module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'standard'
	],
	overrides: [
		{
			'files': ['*.vue'],
			'rules': {
				'indent': 'off'
			}
		}
	],
	rules: {
		// general JS rules
		'arrow-parens': ['error', 'always'],
		'brace-style': ['error', 'stroustrup'],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'lines-between-class-members': 'off',
		'max-len': ['warn', 140],
		'no-extra-semi': 'error',
		'no-unused-vars': 'off', // it's complaining along with typescript
		'no-tabs': 'off',
		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
		'quote-props': 'off',
		'semi': ['error', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',

		// general TS rules
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/member-delimiter-style': ['error', {
			'multiline': { 'delimiter': 'semi', 'requireLast': true },
			'singleline': { 'delimiter': 'semi', 'requireLast': true }
		}],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',

		// general VUE rules
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/html-indent': ['error', 'tab'],
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-multi-spaces': 'off',
		'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
		'vue/no-v-html': 'off',
		'vue/script-indent': ['error', 'tab', { 'baseIndent': 1, 'switchCase': 1 }],
		'vue/singleline-html-element-content-newline': 'off',

		// vue-cli config rules
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	plugins: [
		'@typescript-eslint'
	]
};

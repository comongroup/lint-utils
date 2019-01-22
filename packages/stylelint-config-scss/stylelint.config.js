module.exports = {
	extends: 'stylelint-config-recommended-scss',
	plugins: [
		'stylelint-scss'
	],
	rules: {
		'block-opening-brace-space-before': 'always',
		'block-opening-brace-space-after': 'always-single-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-trailing-semicolon': 'always',
		'indentation': 'tab',
		'max-empty-lines': 1,
		'max-line-length': 140,
		'no-descending-specificity': null,
		'no-extra-semicolons': true,
		'no-missing-end-of-source-newline': true,
		'selector-combinator-space-after': 'always',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'string-quotes': 'single',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never'
	}
}

module.exports = {
    customSyntax: require('postcss-scss'),
    extends: [],
    plugins: [
        'stylelint-csstree-validator',
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-z-index-value-constraint',
        'stylelint-order',
        '@greenly/stylelint-config-rational-order/plugin',
    ],
    rules: {
        'at-rule-disallowed-list': ['document', 'viewport', 'counter-style', 'font-feature-values'],
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'after-same-name',
                    'inside-block',
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                    'first-nested',
                ],
            },
        ],
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'block-no-empty': true,
        'color-named': 'never',
        'color-no-hex': null,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            { except: ['first-nested'], ignore: ['after-comment', 'stylelint-commands'] },
        ],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'csstree/validator': {
            ignoreAtrules: ['container'],
            properties: {
                'container-name': '<any-value>',
                'container-type': '| normal | size | inline-size | inherit | initial | revert | revert-layer | unset',
            },
            syntaxExtensions: ['sass', 'less'],
        },
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-comment', 'after-custom-property', 'first-nested'],
                ignore: ['first-nested'],
            },
        ],
        'custom-property-pattern': '^([a-z][a-z]*)((-|__|_)[a-z0-9]+)*$',
        'declaration-block-no-duplicate-properties': [
            true,
            { ignoreProperties: ['/background\\-/'] },
        ],
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,
        'declaration-empty-line-before': [
            'never',
            { ignore: ['after-comment', 'after-declaration'] },
        ],
        'declaration-no-important': true,
        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': [true, { ignoreFontFamilies: ['Inter'] }],
        'function-calc-no-unspaced-operator': true,
        'function-disallowed-list': [
            'hsl',
            'hsla',
            'repeating-linear-gradient',
            'repeating-radial-gradient',
            'hwb',
            'inset',
            'perspective',
            'polygon',
            'symbols',
        ],
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-name-case': 'lower',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'function-url-scheme-disallowed-list': ['data', 'ftp', 'file', '/^http/'],
        'import-notation': 'string',
        'keyframe-declaration-no-important': true,
        'max-nesting-depth': [7, { ignore: ['blockless-at-rules'] }],
        'media-feature-name-disallowed-list': [
            'any-hover',
            'any-pointer',
            'color-gamut',
            'grid',
            'inverted-colors',
            'max-monochrome',
            'min-monochrome',
            'monochrome',
            'scripting',
            'update',
        ],
        'media-feature-name-no-unknown': [
            true,
            { ignoreMediaFeatureNames: ['min-device-pixel-ratio'] },
        ],
        'media-feature-name-no-vendor-prefix': true,
        'no-descending-specificity': null,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-invalid-double-slash-comments': true,
        'number-max-precision': 2,
        'order/properties-order': [],
        'plugin/declaration-block-no-ignored-properties': true,
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': true,
                'no-empty-lines-between-properties': true,
                severity: 'warning',
            },
        ],
        'plugin/z-index-value-constraint': [
            { max: 10, min: 0 },
            { ignoreValues: [20, 30, 100, 101, 110, 1000, 1001] },
        ],
        'property-disallowed-list': [
            'property-blacklist',
            'box-decoration-break',
            'break-after',
            'break-before',
            'break-inside',
            'clip',
            'hyphens',
            'hanging-punctuation',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'orphans',
            'perspective',
            'perspective-origin',
            'text-combine-upright',
        ],
        'property-no-unknown': true,
        'property-no-vendor-prefix': [
            true,
            { ignoreProperties: ['line-clamp', 'box-orient', 'tap-highlight-color'] },
        ],
        'rule-empty-line-before': [
            'always',
            { except: ['first-nested'], ignore: ['after-comment'] },
        ],
        'selector-attribute-quotes': 'always',
        'selector-class-pattern': [
            '^.[a-zA-Z\\d-]+(?:__[a-zA-Z\\d-]+)?(?:_[a-zA-Z\\d-]+)?$',
            { resolveNestedSelectors: true },
        ],
        'selector-id-pattern': '^[a-z]+(?:[a-z\\d-]+)?$',
        'selector-max-attribute': 5,
        'selector-max-class': 5,
        'selector-max-combinators': 5,
        'selector-max-compound-selectors': 5,
        'selector-max-id': 0,
        'selector-max-pseudo-class': 6,
        'selector-max-specificity': ['0,5,3', { ignoreSelectors: [':global', ':local'] }],
        'selector-max-universal': 1,
        'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-disallowed-list': [
            'any',
            'any-link',
            'default',
            'defined',
            'dir',
            'host',
            'left',
            'right',
            'scope',
        ],
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['local', 'global'] }],
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-disallowed-list': [
            '/^-moz-/i',
            '/^-ms-/i',
            '/^-webkit-/i',
            'backdrop',
            'cue',
            'grammar-error',
            'spelling-error',
        ],
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'string-no-newline': true,
        'time-min-milliseconds': 100,
        'unit-disallowed-list': ['ex', 'cm', 'mm', 'in', 'pt', 'pc', 'ch'],
        'unit-no-unknown': [true, { ignoreUnits: ['x'] }],
        'value-keyword-case': ['lower', { ignoreKeywords: ['/^U\\+[\\w-]+$/'] }],
        'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
        'annotation-no-unknown': true,
        'custom-property-no-missing-var-function': true,
        'declaration-block-no-duplicate-custom-properties': true,
        'function-no-unknown': true,
        'keyframe-block-no-duplicate-selectors': true,
        'media-query-no-invalid': true,
        'named-grid-areas-no-invalid': true,
        'no-invalid-position-at-import-rule': true,
        'no-irregular-whitespace': true,
        'selector-anb-no-unmatchable': true,
        'alpha-value-notation': [
            'percentage',
            {
                exceptProperties: [
                    'opacity',
                    'fill-opacity',
                    'flood-opacity',
                    'stop-opacity',
                    'stroke-opacity',
                ],
            },
        ],
        'color-function-notation': 'modern',
        'color-hex-length': 'short',
        'custom-media-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: (name) => `Expected custom media query name "${name}" to be kebab-case`,
            },
        ],
        'hue-degree-notation': 'angle',
        'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
        'keyframes-name-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: (name) => `Expected keyframe name "${name}" to be kebab-case`,
            },
        ],
        'length-zero-no-unit': [
            true,
            {
                ignore: ['custom-properties'],
            },
        ],
        'media-feature-range-notation': 'context',
        'selector-not-notation': 'complex',
        'shorthand-property-no-redundant-values': true,
    },
    overrides: [
        {
            files: '**/*.scss',
            plugins: ['stylelint-scss'],
            rules: {
                'at-rule-no-unknown': null,
                'scss/at-rule-no-unknown': [
                    true,
                    {
                        ignoreAtRules: ['value'],
                    },
                ],
                'function-no-unknown': null,
                'scss/function-no-unknown': [
                    true,
                    {
                        ignoreFunctions: ['global'],
                    },
                ],
            },
        },
    ],
};

module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript-prettier',
        'plugin:@tanstack/eslint-plugin-query/recommended'
    ],
    globals: {
        mount: true,
        shallow: true,
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/array-type': 0,
                '@typescript-eslint/await-thenable': 0,
                '@typescript-eslint/ban-ts-comment': 0,
                '@typescript-eslint/ban-types': 0,
                '@typescript-eslint/consistent-type-definitions': 0,
                '@typescript-eslint/consistent-type-imports': 0,
                '@typescript-eslint/default-param-last': 0,
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/no-floating-promises': 0,
                '@typescript-eslint/no-misused-promises': 0,
                '@typescript-eslint/no-non-null-assertion': 0,
                '@typescript-eslint/no-shadow': 0,
                '@typescript-eslint/no-throw-literal': 0,
                '@typescript-eslint/no-unsafe-argument': 0,
                '@typescript-eslint/no-unsafe-assignment': 0,
                '@typescript-eslint/no-unsafe-call': 0,
                '@typescript-eslint/no-unsafe-member-access': 0,
                '@typescript-eslint/no-unsafe-return': 0,
                '@typescript-eslint/no-var-requires': 0,
                '@typescript-eslint/prefer-as-const': 0,
                '@typescript-eslint/require-await': 0,
                '@typescript-eslint/restrict-plus-operands': 0,
                '@typescript-eslint/restrict-template-expressions': 0,
                '@typescript-eslint/return-await': 0,
                '@typescript-eslint/unbound-method': 0,

                'default-param-last': 0,
                'guard-for-in': 0,

                'import/no-import-module-exports': 0,
                'import/no-named-as-default': 0,
                'import/no-named-as-default-member': 0,
                'import/prefer-default-export': 0,

                'no-case-declarations': 0,
                'no-unsafe-optional-chaining': 0,
                'no-unused-expressions': 0,

                'react/jsx-no-constructed-context-values': 0,
                'react/jsx-no-useless-fragment': 0,
                'react/no-array-index-key': 0,
                'sort-keys-fix/sort-keys-fix': 0,
            },
        },
        {
            files: [
                '**/*.tsx?',
                '**/*.jsx?',
                '!src/**',
                'src/**/__tests__/**',
                'src/**/__e2e__/**',
                'src/**/__mocks__/**',
            ],
            rules: {
                '@typescript-eslint/unbound-method': 0,
                'import/no-extraneous-dependencies': 0,
                'no-restricted-imports': 0,
                'no-console': 0,
                'prefer-promise-reject-errors': 0,
                'no-await-in-loop': 0,
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'filenames',
        'simple-import-sort',
        'import',
        'prettier',
        'typescript-sort-keys',
        'sort-keys-fix',
        'node',
        'eslint-plugin-sonarjs',
    ],
    root: true,
    rules: {
        'sonarjs/cognitive-complexity': [2, 15],
        'sonarjs/no-collapsible-if': 2,
        'sonarjs/no-duplicate-string': [2, { threshold: 8 }],
        'sonarjs/no-element-overwrite': 2,
        'sonarjs/no-gratuitous-expressions': 2,
        'sonarjs/no-identical-expressions': 2,
        'sonarjs/no-ignored-return': 2,
        'sonarjs/no-inverted-boolean-check': 2,
        'sonarjs/no-redundant-boolean': 2,
        'sonarjs/no-unused-collection': 2,
        'sonarjs/no-use-of-empty-return-value': 2,
        'sonarjs/no-useless-catch': 2,
        'sonarjs/no-identical-functions': ['error', 5],
        'sonarjs/prefer-immediate-return': 2,
        'sonarjs/prefer-object-literal': 2,
        'sonarjs/prefer-single-boolean-return': 2,
        '@typescript-eslint/array-type': [1, { default: 'array-simple', readonly: 'array-simple' }],
        '@typescript-eslint/consistent-type-definitions': [2, 'type'],
        '@typescript-eslint/consistent-type-imports': 1,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-throw-literal': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-unused-vars': [
            1,
            {
                args: 'after-used',
                ignoreRestSiblings: false,
                vars: 'all',
                varsIgnorePattern: '^React$|^_$',
            },
        ],
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'separate-type-imports',
            },
        ],

        'arrow-body-style': [2, 'as-needed'],
        'class-methods-use-this': 1,
        'consistent-return': 0,
        'default-case': 0,
        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true, true],
        'getter-return': 1,
        'global-require': 0,
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    '**/*.stories.*',
                    '**/*.test.*',
                    '**/storybook/**/*.*',
                    'vite.config.ts',
                    'vitest.config.ts',
                    'vitest.setup.ts',
                    'stylelint.config.cjs',
                    'postcss.config.cjs',
                ],
                peerDependencies: true,
            },
        ],

        'import/order': 0,
        'import/prefer-default-export': 0,

        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/no-static-element-interactions': 0,

        'max-params': 0,
        'media-has-caption': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-restricted-globals': 0,
        'no-restricted-properties': [
            2,
            {
                message: 'Please use square brackets to access array element with index.',
                property: 'at',
            },
        ],
        'no-restricted-syntax': 0,
        'no-underscore-dangle': 1,
        'no-unused-vars': 1,
        'node/file-extension-in-import': [
            2,
            'always',
            {
                '.js': 'never',
                '.jsx': 'never',
                '.ts': 'never',
                '.tsx': 'never',
            },
        ],
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                next: 'return',
                prev: '*',
            },
        ],

        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 0,
        'react/function-component-definition': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-fragments': [2, 'syntax'],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-sort-props': [
            1,
            {
                multiline: 'last',
                reservedFirst: true,
                shorthandFirst: true,
            },
        ],

        'react/jsx-uses-react': 1,
        'react/no-children-prop': 2,
        'react/no-unused-prop-types': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'react/sort-comp': [
            1,
            {
                order: [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'react-hooks/exhaustive-deps': 1,
        'simple-import-sort/exports': 2,

        'simple-import-sort/imports': [
            2,
            {
                groups: [
                    ['^react', '^@?\\w'],
                    ['^\\$app+', '^\\$pages+', '^\\$widgets+', '^\\$entities+', '^\\$shared+', '^\\$+'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    ['^\\$styles.+\\.(c|le|sa|sc|pc)ss$', '^.+\\.(c|le|sa|sc|pc)ss$'],
                ],
            },
        ],
        'sort-imports': 0,
        'sort-keys-fix/sort-keys-fix': [1, 'asc', { caseSensitive: true, natural: true }],
        'typescript-sort-keys/interface': [1, 'asc', { caseSensitive: true, natural: true, requiredFirst: true }],
        'typescript-sort-keys/string-enum': [1, 'asc', { caseSensitive: true, natural: true }],
        'no-await-in-loop': 0,
        'import/no-restricted-paths': [
            'error',
            {
                zones: [
                    // pages
                    {
                        from: 'src/app',
                        target: 'src/pages',
                    },
                    {
                        from: 'src/processes',
                        target: 'src/pages',
                    },
                    // Cross import
                    {
                        from: 'src/pages/*/index.ts',
                        target: 'src/pages/*/**/*',
                    },

                    // widgets
                    {
                        from: 'src/app',
                        target: 'src/widgets',
                    },
                    {
                        from: 'src/processes',
                        target: 'src/widgets',
                    },
                    {
                        from: 'src/pages',
                        target: 'src/widgets',
                    },
                    // Cross import
                    {
                        from: 'src/widgets/*/index.ts',
                        target: 'src/widgets/*/**/*',
                    },

                    // features
                    {
                        from: 'src/app',
                        target: 'src/features',
                    },
                    {
                        from: 'src/processes',
                        target: 'src/features',
                    },
                    {
                        from: 'src/pages',
                        target: 'src/features',
                    },
                    {
                        from: 'src/widgets',
                        target: 'src/features',
                    },
                    // Cross import
                    {
                        from: 'src/features/*/index.ts',
                        target: 'src/features/*/**/*',
                    },

                    // entities
                    {
                        from: 'src/app',
                        target: 'src/entities',
                    },
                    {
                        from: 'src/processes',
                        target: 'src/entities',
                    },
                    {
                        from: 'src/pages',
                        target: 'src/entities',
                    },
                    {
                        from: 'src/widgets',
                        target: 'src/entities',
                    },
                    {
                        from: 'src/features',
                        target: 'src/entities',
                    },
                    // Cross import
                    {
                        from: 'src/entities/*/index.ts',
                        target: 'src/entities/*/**/*',
                    },

                    // shared
                    {
                        from: 'src/app',
                        target: 'src/shared',
                    },
                    {
                        from: 'src/processes',
                        target: 'src/shared',
                    },
                    {
                        from: 'src/pages',
                        target: 'src/shared',
                    },
                    {
                        from: 'src/widgets',
                        target: 'src/shared',
                    },
                    {
                        from: 'src/features',
                        target: 'src/shared',
                    },
                    {
                        from: 'src/entities',
                        target: 'src/shared',
                    },
                ],
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    // Use public API only
                    '$app/**',
                    '$pages/*/**',
                    '$widgets/*/**',
                    '$features/*/**',
                    '$entities/*/**',
                    '$shared/*/*/**',

                    '../**/app',
                    '../**/pages',
                    '../**/widgets',
                    '../**/features',
                    '../**/entities',
                    '../**/shared',
                ],
            },
        ],
    },
    settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
};

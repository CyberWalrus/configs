module.exports = {
    rules: {
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
    }
}
module.exports = {
    configs: {
        all: {
            extends: [
				'./rules/base.cjs',
				'./rules/fcd.cjs'
			].map(require.resolve),
            rules: {},
        },
        base: {
            extends: ['./rules/base.cjs'].map(require.resolve),
            rules: {},
        },
        fcd: {
            extends: ['./rules/fcd.cjs'].map(require.resolve),
            rules: {},
        },
    },
    meta: {
        name: '@cyber-walrus',
    },
};
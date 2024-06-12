/* eslint-disable @typescript-eslint/no-unsafe-assignment */
module.exports = {
    extends: ['plugin:@cyber-walrus/all'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    root: true,
};

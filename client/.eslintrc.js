module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "react/no-unescaped-entities": "off",
    }
};

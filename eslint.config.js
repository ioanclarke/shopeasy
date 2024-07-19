import js from "@eslint/js";
import solid from "eslint-plugin-solid/configs/typescript.js";
import * as tsParser from "@typescript-eslint/parser";
import plugin from "@typescript-eslint/eslint-plugin";
import globals from 'globals'

export default [
    {
        files: ["src/**/*.ts", "src/**/*.tsx"], // Correct pattern for TypeScript files
        plugins: {
            "@typescript-eslint": plugin,
            solid: solid.plugins.solid
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "tsconfig.json",
            },
            globals: {
                ...globals.browser,
            }
        },
        rules: {
            ...js.configs.recommended.rules,
            ...plugin.configs.recommended.rules,
            ...solid.rules,
            "@typescript-eslint/explicit-function-return-type": "error",
        },
    },
];

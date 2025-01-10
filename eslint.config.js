import globals from 'globals'
import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import securityPlugin from 'eslint-plugin-security'
import reactPlugin from 'eslint-plugin-react'

export default [

    { languageOptions: { globals: globals.browser } },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

    eslint.configs.recommended,
    prettierConfig,
    securityPlugin.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    

    {

        settings: {
            react: {
                version: "detect",
            },
        },
    },


];
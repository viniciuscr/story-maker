import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    {

        settings: {
            react: {
                version: "detect",
            },
        },
    },

];
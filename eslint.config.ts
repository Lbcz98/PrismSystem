import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'dist/**',
      '**/dist/**',
      'build/**',
      'storybook-static/**',
      'node_modules/**',
      '**/*.cjs',
      '**/*.cjs.map'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Imported DTV Design System (github.com/Lbcz98/dtv-design-system).
    // DTV uses the automatic JSX runtime (no React import) and TS types for
    // props, so relax the classic-runtime / prop-types React rules for it.
    files: [
      'packages/dtv-react/**/*.{ts,tsx}',
      'packages/dtv-tokens/**/*.{ts,mts,mjs}',
      'stories/DTV/**/*.{ts,tsx}'
    ],
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off'
    }
  }
]);

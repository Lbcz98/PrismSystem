import React from 'react';
import { create } from 'storybook/theming';
import { DocsContainer } from '@storybook/addon-docs/blocks';

// DTV Design System (imported): global token variables + embedded preview base.
import '@dtv/tokens/css';
import '@dtv/tokens/css/dark';
import './dtv-preview.css';

const docsLightTheme = create({
  base: 'light',
  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode:
    '"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  colorPrimary: '#005C8A',
  colorSecondary: '#000000',
  appContentBg: '#ffffff',
  textColor: '#1a1a1a',
  textMutedColor: '#404040'
});

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
  globalTypes: {
    dtvTheme: {
      description: 'DTV theme (applies to DTV/* stories)',
      defaultValue: 'dark',
      toolbar: {
        title: 'DTV theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'DTV Light' },
          { value: 'dark', title: 'DTV Dark' }
        ],
        dynamicTitle: true
      }
    }
  },

  decorators: [
    (Story, context) => {
      const isDtv = (context.title || '').startsWith('DTV');

      if (isDtv) {
        // DTV stories render in an isolated, themeable scope so DTV's
        // primitive token variables never leak into Prism's own components.
        const theme = context.globals.dtvTheme ?? 'dark';
        return React.createElement(
          'div',
          { className: 'dtv-scope', 'data-theme': theme },
          React.createElement(Story)
        );
      }

      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-color-mode', 'light');
        document.documentElement.setAttribute('data-theme', 'core');
        document.body?.setAttribute('data-color-mode', 'light');
        document.body?.setAttribute('data-theme', 'core');
      }

      return Story();
    }
  ],

  parameters: {
    options: {
      storySort: {
        /**
         * Storybook Navigation IA (single control point)
         *
         * L1 = top-level sections/pages
         * L2 = children of an L1 section
         * L3 = children of an L2 subsection
         *
         * Note: "Introduction" is both an L1 item and a standalone page.
         */
        order: [
          // L1 — standalone page
          'Foundations',
          [
            // L2 (Foundations children)
            'Design Tokens',
            'Tokens MCP',
            '*'
          ],

          // L1 — standalone page
          'Introduction',

          // L1 — section
          'Theme',
          [
            // L2 (Theme children)
            'Grid',

            // L2 — subsection
            'Color Palette',
            [
              // L3 (Theme > Color Palette children)
              'Core',
              'Accents',
              '*'
            ],

            // L2 — subsection
            'Typography',
            [
              // L3 (Theme > Typography children)
              'Base',
              'Composed',
              '*'
            ],
            '*'
          ],

          // L1 — section
          'Components',
          [
            // L2 (Components children)
            'Button',
            'Divider',
            'Input',
            'IconButton',
            'Link',
            'Text',
            '*'
          ],

          // L1 — section (imported DTV Design System)
          'DTV',
          [
            'Playground',
            'Guidelines',
            'Foundations',
            'Components',
            'Templates',
            'Pages',
            '*'
          ],

          // Keep any unmatched stories at the end
          '*'
        ],
        method: 'configure',
        locales: 'en-US'
      }
    },

    viewport: {
      options: {
        small: {
          name: 'small (0-767px)',
          styles: {
            width: '767px',
            height: '1024px'
          },
          type: 'mobile'
        },
        medium: {
          name: 'medium (768-1023px)',
          styles: {
            width: '1023px',
            height: '1024px'
          },
          type: 'tablet'
        },
        large: {
          name: 'large (1024-1439px)',
          styles: {
            width: '1439px',
            height: '1024px'
          },
          type: 'desktop'
        },
        xlarge: {
          name: 'xlarge (1440-∞px)',
          styles: {
            width: '1440px',
            height: '1024px'
          },
          type: 'desktop'
        }
      }
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    docs: {
      container: (props) =>
        React.createElement(DocsContainer, {
          ...props,
          theme: docsLightTheme
        })
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
};

export default preview;

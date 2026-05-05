/**
 * MarkdownOffice Design System — Tailwind Configuration
 * Microsoft Fluent 2 Web + MarkdownOffice product tokens
 *
 * Pair with: design-tokens.css → mo-tokens.css → components-starter.css → mo-components.css
 */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      'neutral-bg': {
        1: 'var(--colorNeutralBackground1)',
        '1-hover': 'var(--colorNeutralBackground1Hover)',
        '1-pressed': 'var(--colorNeutralBackground1Pressed)',
        '1-sel': 'var(--colorNeutralBackground1Selected)',
        2: 'var(--colorNeutralBackground2)',
        '2-hover': 'var(--colorNeutralBackground2Hover)',
        3: 'var(--colorNeutralBackground3)',
        4: 'var(--colorNeutralBackground4)',
        5: 'var(--colorNeutralBackground5)',
        6: 'var(--colorNeutralBackground6)',
        inverted: 'var(--colorNeutralBackgroundInverted)',
        disabled: 'var(--colorNeutralBackgroundDisabled)',
      },
      'subtle-bg': {
        DEFAULT: 'var(--colorSubtleBackground)',
        hover: 'var(--colorSubtleBackgroundHover)',
        pressed: 'var(--colorSubtleBackgroundPressed)',
        sel: 'var(--colorSubtleBackgroundSelected)',
      },
      'neutral-fg': {
        1: 'var(--colorNeutralForeground1)',
        2: 'var(--colorNeutralForeground2)',
        3: 'var(--colorNeutralForeground3)',
        4: 'var(--colorNeutralForeground4)',
        disabled: 'var(--colorNeutralForegroundDisabled)',
        'on-brand': 'var(--colorNeutralForegroundOnBrand)',
        inverted: 'var(--colorNeutralForegroundInverted)',
      },
      'neutral-stroke': {
        1: 'var(--colorNeutralStroke1)',
        2: 'var(--colorNeutralStroke2)',
        3: 'var(--colorNeutralStroke3)',
        accessible: 'var(--colorNeutralStrokeAccessible)',
        disabled: 'var(--colorNeutralStrokeDisabled)',
      },
      brand: {
        DEFAULT: 'var(--colorBrandBackground)',
        hover: 'var(--colorBrandBackgroundHover)',
        pressed: 'var(--colorBrandBackgroundPressed)',
        sel: 'var(--colorBrandBackgroundSelected)',
        2: 'var(--colorBrandBackground2)',
        'fg-1': 'var(--colorBrandForeground1)',
        'fg-2': 'var(--colorBrandForeground2)',
        'fg-link': 'var(--colorBrandForegroundLink)',
        'stroke-1': 'var(--colorBrandStroke1)',
        'stroke-2': 'var(--colorBrandStroke2)',
      },
      'compound-brand': {
        DEFAULT: 'var(--colorCompoundBrandBackground)',
        hover: 'var(--colorCompoundBrandBackgroundHover)',
        pressed: 'var(--colorCompoundBrandBackgroundPressed)',
        fg: 'var(--colorCompoundBrandForeground1)',
        stroke: 'var(--colorCompoundBrandStroke)',
      },
      danger: {
        bg: 'var(--colorStatusDangerBackground1)',
        'bg-3': 'var(--colorStatusDangerBackground3)',
        fg: 'var(--colorStatusDangerForeground1)',
        border: 'var(--colorStatusDangerBorder1)',
      },
      success: {
        bg: 'var(--colorStatusSuccessBackground1)',
        'bg-3': 'var(--colorStatusSuccessBackground3)',
        fg: 'var(--colorStatusSuccessForeground1)',
        border: 'var(--colorStatusSuccessBorder1)',
      },
      warning: {
        bg: 'var(--colorStatusWarningBackground1)',
        'bg-3': 'var(--colorStatusWarningBackground3)',
        fg: 'var(--colorStatusWarningForeground1)',
        border: 'var(--colorStatusWarningBorder1)',
      },
      focus: {
        1: 'var(--colorStrokeFocus1)',
        2: 'var(--colorStrokeFocus2)',
      },
    },

    fontSize: {
      'base-100': ['10px', { lineHeight: '14px' }],
      'base-200': ['12px', { lineHeight: '16px' }],
      'base-300': ['14px', { lineHeight: '20px' }],
      'base-400': ['16px', { lineHeight: '22px' }],
      'base-500': ['20px', { lineHeight: '28px' }],
      'base-600': ['24px', { lineHeight: '32px' }],
      'hero-700': ['28px', { lineHeight: '36px' }],
      'hero-800': ['32px', { lineHeight: '40px' }],
      'hero-900': ['40px', { lineHeight: '52px' }],
      'hero-1000': ['68px', { lineHeight: '92px' }],
    },

    fontFamily: {
      sans: 'var(--fontFamilyBase)',
      mono: 'var(--fontFamilyMonospace)',
      numeric: 'var(--fontFamilyNumeric)',
    },

    fontWeight: {
      regular: 'var(--fontWeightRegular)',
      medium: 'var(--fontWeightMedium)',
      semibold: 'var(--fontWeightSemibold)',
      bold: 'var(--fontWeightBold)',
    },

    spacing: {
      0: '0',
      xxs: '2px',
      xs: '4px',
      'sn': '6px',
      s: '8px',
      'mn': '10px',
      m: '12px',
      l: '16px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px',
      40: '40px',
      48: '48px',
      64: '64px',
      80: '80px',
      96: '96px',
    },

    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      lg: '6px',
      xl: '8px',
      '2xl': '12px',
      '3xl': '16px',
      '4xl': '24px',
      '5xl': '32px',
      '6xl': '40px',
      full: '10000px',
    },

    borderWidth: {
      0: '0',
      DEFAULT: 'var(--strokeWidthThin)',
      thin: 'var(--strokeWidthThin)',
      thick: 'var(--strokeWidthThick)',
      thicker: 'var(--strokeWidthThicker)',
      thickest: 'var(--strokeWidthThickest)',
    },

    boxShadow: {
      none: 'none',
      2: 'var(--shadow2)',
      4: 'var(--shadow4)',
      8: 'var(--shadow8)',
      16: 'var(--shadow16)',
      28: 'var(--shadow28)',
      64: 'var(--shadow64)',
      '2-brand': 'var(--shadow2Brand)',
      '4-brand': 'var(--shadow4Brand)',
      '8-brand': 'var(--shadow8Brand)',
      '16-brand': 'var(--shadow16Brand)',
      '28-brand': 'var(--shadow28Brand)',
      '64-brand': 'var(--shadow64Brand)',
    },

    transitionTimingFunction: {
      DEFAULT: 'var(--curveEasyEase)',
      linear: 'var(--curveLinear)',
      ease: 'var(--curveEasyEase)',
      'ease-max': 'var(--curveEasyEaseMax)',
      'accel-min': 'var(--curveAccelerateMin)',
      'accel-mid': 'var(--curveAccelerateMid)',
      'accel-max': 'var(--curveAccelerateMax)',
      'decel-min': 'var(--curveDecelerateMin)',
      'decel-mid': 'var(--curveDecelerateMid)',
      'decel-max': 'var(--curveDecelerateMax)',
    },

    transitionDuration: {
      DEFAULT: 'var(--durationFaster)',
      'ultra-fast': 'var(--durationUltraFast)',
      faster: 'var(--durationFaster)',
      fast: 'var(--durationFast)',
      normal: 'var(--durationNormal)',
      gentle: 'var(--durationGentle)',
      slow: 'var(--durationSlow)',
      slower: 'var(--durationSlower)',
      'ultra-slow': 'var(--durationUltraSlow)',
    },

    extend: {
      // MarkdownOffice structural heights/widths (use as h-mo-header, w-mo-sidebar, etc.)
      height: {
        'mo-header': 'var(--mo-shell-header-height)',
        'mo-ribbon': 'var(--mo-ribbon-height)',
        'mo-ribbon-tab': 'var(--mo-ribbon-tab-height)',
        'mo-ribbon-cmd': 'var(--mo-ribbon-cmd-height)',
        'mo-status': 'var(--mo-status-bar-height)',
      },
      width: {
        'mo-sidebar': 'var(--mo-sidebar-width)',
        'mo-panel': 'var(--mo-right-panel-width)',
        'mo-gutter': 'var(--mo-editor-gutter-width)',
      },
      maxWidth: {
        'mo-content': 'var(--mo-editor-content-max-width)',
      },
      // MO surface colors (use as bg-mo-canvas, etc.)
      backgroundColor: {
        'mo-canvas': 'var(--mo-editor-canvas-bg)',
        'mo-source': 'var(--mo-editor-source-bg)',
        'mo-preview': 'var(--mo-editor-preview-bg)',
        'mo-sidebar': 'var(--mo-sidebar-bg)',
        'mo-ribbon': 'var(--mo-ribbon-bg)',
        'mo-status-bar': 'var(--mo-status-bar-bg)',
        'mo-block-hover': 'var(--mo-block-hover-bg)',
        'mo-block-sel': 'var(--mo-block-selected-bg)',
        'mo-agent-propose': 'var(--mo-agent-propose-bg)',
      },
      borderColor: {
        'mo-split': 'var(--mo-editor-split-border)',
        'mo-ribbon': 'var(--mo-ribbon-border)',
        'mo-sidebar': 'var(--mo-sidebar-border)',
      },
      textColor: {
        'mo-source': 'var(--mo-editor-source-fg)',
        'mo-gutter': 'var(--mo-editor-gutter-fg)',
        'mo-status': 'var(--mo-status-bar-fg)',
        'mo-syntax-heading': 'var(--mo-syntax-heading)',
        'mo-syntax-link': 'var(--mo-syntax-link)',
      },
    },
  },
};

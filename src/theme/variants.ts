import merge from 'deepmerge';
import { Palette } from '@material-ui/core/styles/createPalette';
import { green, grey, indigo, red } from '@material-ui/core/colors';
import { APP_THEMES } from 'constants/app';

const customBlue: Record<number, string> = {
  50: '#e9f0fb',
  100: '#c8daf4',
  200: '#a3c1ed',
  300: '#7ea8e5',
  400: '#6395e0',
  500: '#4782da',
  600: '#407ad6',
  700: '#376fd0',
  800: '#2f65cb',
  900: '#2052c2 ',
};

export type HeaderKey = 'color' | 'background' | 'search';

export type FooterKey = 'color' | 'background';

export type SidebarKey = 'color' | 'background' | 'header' | 'footer' | 'badge';

export type VariantType = {
  name: string;
  palette: Partial<Palette>;
  header: { [K in HeaderKey]?: Record<any, string | number> | number | string };
  footer: { [K in FooterKey]?: Record<any, string | number> | number | string };
  sidebar?: {
    [k in SidebarKey]?: Record<any, string | number> | number | string;
  };
};

const defaultVariant: VariantType = {
  name: APP_THEMES.DEFAULT,
  palette: {
    type: 'light',
    primary: {
      main: customBlue[700],
      light: '',
      dark: '',
      contrastText: '#FFF',
    },
    secondary: {
      main: customBlue[500],
      light: '',
      dark: '',
      contrastText: '#FFF',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFF',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.5)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  header: {
    color: grey[300],
    background: '#1B2635',
    search: {
      color: grey[200],
    },
  },
  footer: {
    color: grey[300],
    background: '#233044',
  },
};

const darkVariant: VariantType = merge(defaultVariant, {
  name: APP_THEMES.DARK,
  palette: {
    type: 'dark',
    primary: {
      main: customBlue[600],
      contrastText: '#FFF',
    },
    background: {
      default: '#1B2635',
      paper: '#233044',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.5)',
    },
  },
  header: {
    color: grey[300],
    background: '#1B2635',
    search: {
      color: grey[200],
    },
  },
  footer: {
    color: grey[300],
    background: '#233044',
  },
});

const lightVariant: VariantType = merge(defaultVariant, {
  name: APP_THEMES.LIGHT,
  palette: {
    type: 'light',
  },
  header: {
    color: grey[200],
    background: customBlue[800],
    search: {
      color: grey[100],
    },
    indicator: {
      background: red[700],
    },
  },
  sidebar: {
    color: grey[900],
    background: '#FFF',
    header: {
      color: '#FFF',
      background: customBlue[800],
      brand: {
        color: '#FFFFFF',
      },
    },
    footer: {
      color: grey[800],
      background: '#F7F7F7',
      online: {
        background: green[500],
      },
    },
  },
});

const blueVariant: VariantType = merge(defaultVariant, {
  name: APP_THEMES.BLUE,
  palette: {
    type: 'light',
  },
  sidebar: {
    color: '#FFF',
    background: customBlue[700],
    header: {
      color: '#FFF',
      background: customBlue[800],
      brand: {
        color: '#FFFFFF',
      },
    },
    footer: {
      color: '#FFF',
      background: customBlue[800],
      online: {
        background: '#FFF',
      },
    },
    badge: {
      color: '#000',
      background: '#FFF',
    },
  },
});

const greenVariant: VariantType = merge(defaultVariant, {
  name: APP_THEMES.GREEN,
  palette: {
    primary: {
      main: green[800],
      contrastText: '#FFF',
    },
    secondary: {
      main: green[500],
      contrastText: '#FFF',
    },
  },
  header: {
    indicator: {
      background: green[600],
    },
  },
  sidebar: {
    color: '#FFF',
    background: green[700],
    header: {
      color: '#FFF',
      background: green[800],
      brand: {
        color: '#FFFFFF',
      },
    },
    footer: {
      color: '#FFF',
      background: green[800],
      online: {
        background: '#FFF',
      },
    },
    badge: {
      color: '#000',
      background: '#FFF',
    },
  },
});

const indigoVariant: VariantType = merge(defaultVariant, {
  name: APP_THEMES.INDIGO,
  palette: {
    primary: {
      main: indigo[600],
      contrastText: '#FFF',
    },
    secondary: {
      main: indigo[400],
      contrastText: '#FFF',
    },
  },
  header: {
    indicator: {
      background: indigo[600],
    },
  },
  sidebar: {
    color: '#FFF',
    background: indigo[700],
    header: {
      color: '#FFF',
      background: indigo[800],
      brand: {
        color: '#FFFFFF',
      },
    },
    footer: {
      color: '#FFF',
      background: indigo[800],
      online: {
        background: '#FFF',
      },
    },
    badge: {
      color: '#000',
      background: '#FFF',
    },
  },
});

const variants = [
  defaultVariant,
  darkVariant,
  lightVariant,
  blueVariant,
  greenVariant,
  indigoVariant,
];

export default variants;

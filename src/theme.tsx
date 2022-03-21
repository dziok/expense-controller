import { createTheme, ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
 import { ThemeProvider as MuiThemeProvider2 } from '@mui/styles'
import '@mui/styles'
import { Palette as MuiPallete, PaletteOptions as MuiPaletteOptions,} from '@mui/material/styles/createPalette';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme { }
}

// declare module '@mui/material/styles/createPalette' {
//     // @ts-ignore
//     interface Palette extends MuiPallete {
//         tertiary: {main: string, dark: string};
//     }
//     // @ts-ignore
//     interface PaletteOptions extends MuiPaletteOptions {
//         tertiary?: {main: string, dark: string};
//     }
//   }

const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#266799',
            dark: '#1c4c70'
        },
        secondary: {
            main: '#f2f6fb',
            dark: '#e1e5f0'
        },
        // tertiary:{
        //     main: '#266799',
        //     dark: '#1c4c70'
        // }

    },
});

const theme = createTheme({
    ...baseTheme,
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                   
                }
            }
        }
    }
});

export const ThemeProvider: React.FC = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
             <MuiThemeProvider2 theme={theme}> 
                {children}
             </MuiThemeProvider2> 
        </MuiThemeProvider>
    )
}
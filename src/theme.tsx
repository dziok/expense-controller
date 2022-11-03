import { createTheme, ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider2 } from '@mui/styles'
import '@mui/styles'

declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme { }
}

const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#266799',
            dark: '#1c4c70',
        },
        secondary: {
            main: '#f2f2f2',
            light: '#fafafa'
        },
    },
});

const theme = createTheme({
    ...baseTheme,
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white'
                }
            },

        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: baseTheme.palette.primary.main,
                    color: 'white'
                },

            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: 'white',
                    fontWeight: 'bold'
                },
                stickyHeader: {
                    backgroundColor: baseTheme.palette.primary.main,

                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                body2: {
                    fontSize: '12px'
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
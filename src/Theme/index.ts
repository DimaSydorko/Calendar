import { createTheme, PaletteMode } from '@mui/material'
import { amber, blue, grey } from '@mui/material/colors'

export const size = {
  header: 48,
  dayInWeek: 28
}

export const colors = {
  secondary: grey[300],
  primary: blue.A200,
  menu: grey[800],
  white: grey[50]
}

export const themeStyle = (mode: PaletteMode) =>
  createTheme({
    typography: {
      h3: {
        fontSize: 36,
        margin: 'auto'
      }
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            background: colors.menu
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: 'none'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      }
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: colors.primary
            },
            secondary: {
              main: colors.secondary
            },
            divider: blue[200],
            text: {
              // primary: blue[500],
              secondary: grey[400]
            }
          }
        : {
            primary: amber,
            divider: amber[200],
            text: {
              primary: amber[900],
              secondary: amber[800]
            }
          })
    }
  })

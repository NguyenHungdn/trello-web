// import { createTheme } from '@mui/material/styles'
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '56px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {``
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  components: {
    // custom scrollbar
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none',
          borderWidth: '1px',
          '&:hover': { borderWidth: '1px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // InputLabel --Mode
        root: () => {
          return {
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        // InputLabel --Mode
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: () => {
          return {
            //lấy ra màu primary.main theo mode light dark
            // color: theme.palette.primary.main,
            fontSize: '0.875rem',
            //config border outline của MUI
            // '.MuiOutlinedInput-notchedOutline': {
            //   // borderColor: theme.palette.primary.light
            // },
            // //khi hover
            // '&:hover': {
            //   '.MuiOutlinedInput-notchedOutline': {
            //     // borderColor: theme.palette.primary.main
            //   }
            // },
            '& fieldset': {
              borderWidth: '1px !important'
            },
            '&:hover fieldset': {
              borderWidth: '2px !important'
            },
            '&.Mui-focused fieldset': {
              borderWidth: '2px !important'
            }
          }
        }
      }
    }
  }
  //...other properties
})
export default theme

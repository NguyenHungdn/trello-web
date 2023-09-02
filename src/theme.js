// import { createTheme } from '@mui/material/styles'
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
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
            backgroundColor: 'white',
            borderRadius: '8px'
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
            //
            // color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
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

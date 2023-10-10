import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
    typography:{
        allVariants:{
            fontFamily:'Raleway',
            textTransform:'none',
            fontSize:15,
        }
    },
    palette:{
        primary:{
            main:grey[700]
        },
        secondary:{
            main:pink[200]
        }
    },
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    px:1
                },
                variant:'subtitle2',
                textTransform:'capitalize'
            }
        },
        MuiStack:{
            defaultProps:{
                sx:{
                    px:2,
                    py:2
                },
                spacing:2,
                direction:'row'
            }
        },
        MuiPaper:{
            defaultProps:{
                elevation:0
            }
        },
        MuiLink:{
            defaultProps:{
                sx:{
                    color:theme=>theme.palette.primary.main
                },
                underline:'none'
            }
        }
    }
});

const AppThemeProvider = (prop) => {
  return (
    <ThemeProvider theme={theme}>
{prop.childern}
    </ThemeProvider>
  )
}

export default AppThemeProvider

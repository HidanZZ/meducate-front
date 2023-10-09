// ** React Imports
import { useEffect, useCallback, useRef, useState, ChangeEvent } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import MuiDialog from '@mui/material/Dialog'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiAutocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'


// ** Types Imports

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs Imports
import { Medicament } from 'src/types/apps/medicament' 
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import { search ,reset ,setSearchType} from 'src/store/apps/medicament/components/search'
import SwitchWithLabels from './SwitchesBasic'

interface Props {
  hidden?: boolean
}

// ** Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  '& fieldset': {
    border: 0
  },
  '& + .MuiAutocomplete-popper': {
    '& .MuiAutocomplete-listbox': {
      paddingTop: 0,
      height: '100%',
      maxHeight: 'inherit',
      '& .MuiListSubheader-root': {
        top: 0,
        fontWeight: 400,
        lineHeight: '15px',
        fontSize: '0.75rem',
        letterSpacing: '1px',
        color: theme.palette.text.disabled
      }
    },
    '& .MuiAutocomplete-paper': {
      border: 0,
      height: '100%',
      borderRadius: 0,
      boxShadow: 'none'
    },
    '& .MuiListItem-root.suggestion': {
      padding: 0,
      '& .MuiListItemSecondaryAction-root': {
        display: 'flex'
      },
      '&.Mui-focused.Mui-focusVisible, &:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '& .MuiListItemButton-root: hover': {
        backgroundColor: 'transparent'
      },
      '&:not(:hover)': {
        '& .MuiListItemSecondaryAction-root': {
          display: 'none'
        },
        '&.Mui-focused, &.Mui-focused.Mui-focusVisible:not(:hover)': {
          '& .MuiListItemSecondaryAction-root': {
            display: 'flex'
          }
        },
        [theme.breakpoints.down('sm')]: {
          '&.Mui-focused:not(.Mui-focusVisible) .MuiListItemSecondaryAction-root': {
            display: 'none'
          }
        }
      }
    },
    '& .MuiAutocomplete-noOptions': {
      display: 'grid',
      minHeight: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(10)
    }
  }
}))

// ** Styled Dialog component
const Dialog = styled(MuiDialog)({
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(4px)'
  },
  '& .MuiDialog-paper': {
    overflow: 'hidden',
    '&:not(.MuiDialog-paperFullScreen)': {
      height: '100%',
      maxHeight: 550
    }
  }
})
const AutocompleteComponent = ({ }: Props) => {
  // ** States
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  // ** Hooks & Vars
  const theme = useTheme()
  const router = useRouter()
  const wrapper = useRef<HTMLDivElement>(null)
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down('sm'))

    const dispatch = useDispatch<AppDispatch>()

    const {medicaments,searchType}: {medicaments:Array<Medicament>,status:string,searchType:'name' | 'molecule'} = useSelector((state:any) => state.medicament.search)    

    

  // Get all data using API
  useEffect(() => {
    if (searchValue.length > 2) {
      dispatch(search({ nom: searchValue, searchType })); // Pass an object with 'nom' and 'searchType'
    } else {
      dispatch(reset());
    }
  }, [searchValue, searchType, dispatch]);

  useEffect(() => {
    if (!openDialog) {
      setSearchValue('')
    }
  }, [openDialog])

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  // Handle click event on a list item in search result
  const handleOptionClick = (obj: Medicament) => {
    setSearchValue('');
    setOpenDialog(false);

    // Navigate to the search result page using the selected medicament's ID
    router.push('/third-page/search-result/'+ obj._id);
  };
  

 const handleSwitchToggle = (newValue: 'medicament' | 'molecule') => {
    // Dispatch the action with the selected search type
    dispatch(setSearchType(newValue));
  };

  // Handle ESC & shortcut keys keydown events
  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      // ** Shortcut keys to open searchbox (Ctrl + /)
      if (!openDialog && event.ctrlKey && event.which === 191) {
        setOpenDialog(true)
      }
    },
    [openDialog]
  )

  // Handle shortcut keys keyup events
  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      // ** ESC key to close searchbox
      if (openDialog && event.keyCode === 27) {
        setOpenDialog(false)
      }
    },
    [openDialog]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, handleKeydown])

  if (!isMounted) {
    return null
  } else {
    return (
      <Box
        ref={wrapper}
        onClick={() => !openDialog && setOpenDialog(true)}
        sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}
      >
        <IconButton color='inherit' sx={{ mr: 1, ml: -2.75 }}>
          <Icon icon='mdi:magnify' />
        </IconButton>
        
          <Typography sx={{ userSelect: 'none', color: 'text.disabled' }}>Search (Ctrl+/)</Typography>

        
        {openDialog && (
          <Dialog fullWidth open={openDialog} fullScreen={fullScreenDialog} onClose={() => setOpenDialog(false)}>
            <Box sx={{ top: 0, width: '100%', position: 'sticky' }}>
              <Autocomplete
                autoHighlight
                disablePortal
                options={medicaments}
                id='names-search'
                isOptionEqualToValue={() => true}
                onInputChange={(event, value: string) => setSearchValue(value)}
                onChange={(event, obj) => handleOptionClick(obj as Medicament)}

                // noOptionsText={<NoResult value={searchValue} setOpenDialog={setOpenDialog} status={status} />}
                getOptionLabel={(option: Medicament | unknown) => (option as Medicament).nomDuMedicament}
                
                sx={{
                  '& + .MuiAutocomplete-popper': {
                    ...(searchValue.length> 3
                      ? {
                          overflow: 'auto',
                          maxHeight: 'calc(100vh - 69px)',
                          borderTop: `1px solid ${theme.palette.divider}`,
                          height: fullScreenDialog ? 'calc(100vh - 69px)' : 481,
                          '& .MuiListSubheader-root': { p: theme.spacing(3.75, 6, 0.75) }
                        }
                      : {
                          '& .MuiAutocomplete-listbox': { pb: 0 }
                        })
                  }
                }}
                renderInput={(params: AutocompleteRenderInputParams) => {
                  return (
                    <TextField
                      {...params}
                      value={searchValue}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                      inputRef={input => {
                        if (input) {
                          if (openDialog) {
                            input.focus()
                          } else {
                            input.blur()
                          }
                        }
                      }}
                      InputProps={{
                        ...params.InputProps,
                        sx: { p: `${theme.spacing(3.75, 6)} !important` },
                        startAdornment: (
                          <InputAdornment position='start' sx={{ color: 'text.primary' }}>
                            <Icon icon='mdi:magnify' />                        
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position='end'
                            sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}
                          >
                            {/* {!hidden ? <Typography sx={{ mr: 2.5, color: 'text.disabled' }}>[esc]</Typography> : null} */}
                            
                            <SwitchWithLabels onToggle={handleSwitchToggle} />
                            <IconButton 
                              onClick={() => setOpenDialog(false)}
                              size='small' sx={{ p: 1 }}
                            >
                              <Icon icon='mdi:close' fontSize={20} />
                            </IconButton>
                           
                          </InputAdornment>
                        ),
                      }}
                    />
                    
                  )
                }}
                renderOption={(props, option: Medicament | unknown) => {
                    
                  return searchValue.length ? (
                    <ListItem
                      {...props}
                      key={(option as Medicament).nomDuMedicament}
                      className={`suggestion ${props.className}`}
                      onClick={() => handleOptionClick(option as Medicament)}
                      secondaryAction={<Icon icon='mdi:subdirectory-arrow-left' fontSize={20} />}
                      sx={{
                        '& .MuiListItemSecondaryAction-root': {
                          '& svg': {
                            cursor: 'pointer',
                            color: 'text.disabled'
                          }
                        }
                      }}
                    >
                      <ListItemButton
                        sx={{
                          py: 2.5,
                          px: `${theme.spacing(6)} !important`,
                          '& svg': { mr: 2.5, color: 'text.primary' }
                        }}
                      >
                        {/* <Icon fontSize={20} icon={(option as SearchName).icon || themeConfig.navSubItemIcon} /> */}
                        <Typography variant='body2' sx={{ color: 'text.primary' }}>
                          {(option as Medicament).nomDuMedicament}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ) : null
                }}
              />
            </Box>
            {searchValue.length <3 ? (
              <Box
                sx={{
                  p: 10,
                  display: 'grid',
                  overflow: 'auto',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTop: `1px solid ${theme.palette.divider}`,
                  height: fullScreenDialog ? 'calc(100vh - 69px)' : '100%'
                }}
              >
                {/* <DefaultSuggestions setOpenDialog={setOpenDialog} /> */}
              </Box>
            ) :null}
          </Dialog>
        )}
      </Box>
    )
  }
}

export default AutocompleteComponent

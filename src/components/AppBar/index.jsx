import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ModeSelect from '../ModeSelect'
//Component prop SVG
import AppsIcon from '@mui/icons-material/Apps'

import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Template from './Menus/Templates'
import Starred from './Menus/Starred'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [searchValue, SetSearchValue] = useState('')
  return (
    <div>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          overflow: 'auto',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
        }}
      >
        {/* --Left--App--Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'white' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon
              fontSize="small"
              component={TrelloLogo}
              inheritViewBox
              sx={{ color: 'white' }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              Trello
            </Typography>
          </Box>
          {/* Menu-Item */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Template />
            <Button
              sx={{
                color: 'white',
                border: 'none',
                '&:hover': { border: 'none' }
              }}
              variant="outlined"
              startIcon={<LibraryAddIcon />}
            >
              Create
            </Button>
          </Box>
          {/* End Menu-Item */}
        </Box>
        {/* --Right-App_bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search-Box */}
          <TextField
            value={searchValue}
            onChange={(e) => SetSearchValue(e.target.value)}
            id="outlined-search"
            r
            label="Search..."
            type="text"
            size="small"
            sx={{
              minWidth: 120,
              maxWidth: 180,
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  onClick={() => SetSearchValue('')}
                  fontSize="small"
                  sx={{
                    color: searchValue ? 'white' : 'transparent',
                    cursor: 'pointer'
                  }}
                />
              )
            }}
          />
          {/* Theme Select*/}
          <ModeSelect />
          {/* notifications */}
          <Tooltip title="notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="help">
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </Tooltip>
          {/* profile component*/}
          <Profile />
        </Box>
      </Box>
    </div>
  )
}

export default AppBar

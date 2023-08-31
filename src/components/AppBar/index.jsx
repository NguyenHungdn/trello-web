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

function AppBar() {
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
          overflow: 'auto'
        }}
      >
        {/* --Left--App--Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon
              fontSize="small"
              component={TrelloLogo}
              inheritViewBox
              sx={{ color: 'primary.main' }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'primary.main'
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
            <Button variant="outlined">Create</Button>
          </Box>
          {/* End Menu-Item */}
        </Box>
        {/* --Right-App_bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search-Box */}
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            size="small"
            sx={{ minWidth: 120 }}
          />
          {/* Theme Select*/}
          <ModeSelect />
          {/* notifications */}
          <Tooltip title="notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="help">
            <HelpOutlineIcon sx={{ color: 'primary.main' }} />
          </Tooltip>
          {/* profile component*/}
          <Profile />
        </Box>
      </Box>
    </div>
  )
}

export default AppBar

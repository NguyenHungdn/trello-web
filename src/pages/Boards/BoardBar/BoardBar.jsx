import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'
import Dashboard from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '9px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
function BoardBar({ board }) {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          overflowX: 'auto',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          borderBottom: '1px solid white',
          paddingX: 2
        }}
      >
        {/* Left */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            icon={<Dashboard />}
            label={board.title}
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<VpnLockIcon />}
            label={capitalizeFirstLetter(board?.type)}
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<AddToDriveIcon />}
            label="Add To Driver"
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<BoltIcon />}
            label="Automation"
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<FilterListIcon />}
            label="Filters"
            clickable
            sx={MENU_STYLE}
          />
        </Box>
        {/* Right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': { borderColor: 'white', borderWidth: '2px' }
            }}
            variant="outlined"
            startIcon={<PersonAddIcon />}
          >
            Invite
          </Button>
          <AvatarGroup
            max={3}
            sx={{
              gap: '10px',
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16,
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                '&:first-of-type': {
                  bgcolor: '#a4b0be'
                }
              }
            }}
          >
            <Tooltip title="NguyenHung">
              <Avatar
                alt="NguyenHung"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/362045176_6543690402354851_8485765920081114099_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p515x515_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fsgn2-3.fna&_nc_cat=107&_nc_ohc=Ub_4Es26bVUAX8PVMT8&ccb=1-7&_nc_sid=5fac6f&oh=00_AfCYxRznYlaHHe3l7kgmRURlSTtuPu8dSqz5frYEqHd5Mg&oe=64F61CC8"
              />
            </Tooltip>
            <Tooltip title="NguyenHung">
              <Avatar
                alt="NguyenHung"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/362045176_6543690402354851_8485765920081114099_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p515x515_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fsgn2-3.fna&_nc_cat=107&_nc_ohc=Ub_4Es26bVUAX8PVMT8&ccb=1-7&_nc_sid=5fac6f&oh=00_AfCYxRznYlaHHe3l7kgmRURlSTtuPu8dSqz5frYEqHd5Mg&oe=64F61CC8"
              />
            </Tooltip>{' '}
            <Tooltip title="NguyenHung">
              <Avatar
                alt="NguyenHung"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/362045176_6543690402354851_8485765920081114099_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p515x515_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fsgn2-3.fna&_nc_cat=107&_nc_ohc=Ub_4Es26bVUAX8PVMT8&ccb=1-7&_nc_sid=5fac6f&oh=00_AfCYxRznYlaHHe3l7kgmRURlSTtuPu8dSqz5frYEqHd5Mg&oe=64F61CC8"
              />
            </Tooltip>{' '}
            <Tooltip title="NguyenHung">
              <Avatar
                alt="NguyenHung"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/362045176_6543690402354851_8485765920081114099_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p515x515_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fsgn2-3.fna&_nc_cat=107&_nc_ohc=Ub_4Es26bVUAX8PVMT8&ccb=1-7&_nc_sid=5fac6f&oh=00_AfCYxRznYlaHHe3l7kgmRURlSTtuPu8dSqz5frYEqHd5Mg&oe=64F61CC8"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </div>
  )
}

export default BoardBar

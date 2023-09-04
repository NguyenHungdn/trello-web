import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Cloud from '@mui/icons-material/Cloud'
import ContentCut from '@mui/icons-material/ContentCut'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import DeleteForever from '@mui/icons-material/DeleteForever'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        {/* Box columns */}
        <Box
          sx={{
            bgcolor: 'inherit',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            '& ::-webkit-scrollbar-track': { m: 2 }
          }}
        >
          <Box
            sx={{
              minWidth: '300px',
              maxWidth: '300px',
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
              ml: 2,
              borderRadius: '6px',
              height: 'fit-content',
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )})`,
              '& ::-webkit-scrollbar-thumb': {
                backgroundColor: '#ced0da'
              },
              '& ::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#bfc2cf'
              }
            }}
          >
            {/* Header */}
            <Box
              sx={{
                height: COLUMN_HEADER_HEIGHT,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
              >
                Column Title
              </Typography>
              {/* Column DropDown */}
              <Box>
                <Tooltip title="More Option">
                  <ExpandMoreIcon
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? 'basic-menu-column-dropdown' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                  />
                </Tooltip>
                <Menu
                  id="basic-menu-workspaces"
                  aria-labelledby="basic-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add Cart</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForever fontSize="small" />
                    </ListItemIcon>
                    <ListItemText> Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            {/* Box-ListCard */}
            <Box
              sx={{
                p: '0 5px',
                m: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${theme.trello.boardContentHeight} -
                  ${theme.spacing(5)} - 
                  ${COLUMN_HEADER_HEIGHT} - 
                  ${COLUMN_FOOTER_HEIGHT})`
              }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://th.bing.com/th?id=ORMS.555c6db4ea98636e9e9f42336d8c96e4&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>NguyenHung MERN</Typography>
                </CardContent>
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<CommentIcon />}>
                    15
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    10
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>
              {/* Clone */}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>
              {/* EndClone */}
            </Box>

            {/* Footer */}
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add new card</Button>{' '}
              <Tooltip title="Drag to Move">
                <DragHandleIcon
                  sx={{
                    cursor: 'pointer',
                    boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)'
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
          {/* Box colums Clone */}
          <Box
            sx={{
              minWidth: '300px',
              maxWidth: '300px',
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
              ml: 2,
              borderRadius: '6px',
              height: 'fit-content',
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )})`,
              '& ::-webkit-scrollbar-thumb': {
                backgroundColor: '#ced0da'
              },
              '& ::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#bfc2cf'
              }
            }}
          >
            {/* Header */}
            <Box
              sx={{
                height: COLUMN_HEADER_HEIGHT,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
              >
                Column Title
              </Typography>
              {/* Column DropDown */}
              <Box>
                <Tooltip title="More Option">
                  <ExpandMoreIcon
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? 'basic-menu-column-dropdown' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  />
                </Tooltip>
                <Menu
                  id="basic-menu-workspaces"
                  aria-labelledby="basic-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add Cart</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForever fontSize="small" />
                    </ListItemIcon>
                    <ListItemText> Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            {/* Box-ListCard */}
            <Box
              sx={{
                p: '0 5px',
                m: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${theme.trello.boardContentHeight} -
                  ${theme.spacing(5)} - 
                  ${COLUMN_HEADER_HEIGHT} - 
                  ${COLUMN_FOOTER_HEIGHT})`
              }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gbQDj.img?w=768&h=432&m=6"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>NguyenHung MERN</Typography>
                </CardContent>
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<CommentIcon />}>
                    15
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    10
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>
              {/* Clone */}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>
              {/* EndClone */}
            </Box>

            {/* Footer */}
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add new card</Button>{' '}
              <Tooltip title="Drag to Move">
                <DragHandleIcon
                  sx={{
                    cursor: 'pointer',
                    boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)'
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
          <Box
            sx={{
              minWidth: '300px',
              maxWidth: '300px',
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
              ml: 2,
              borderRadius: '6px',
              height: 'fit-content',
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )})`,
              '& ::-webkit-scrollbar-thumb': {
                backgroundColor: '#ced0da'
              },
              '& ::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#bfc2cf'
              }
            }}
          >
            {/* Header */}
            <Box
              sx={{
                height: COLUMN_HEADER_HEIGHT,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
              >
                Column Title
              </Typography>
              {/* Column DropDown */}
              <Box>
                <Tooltip title="More Option">
                  <ExpandMoreIcon
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? 'basic-menu-column-dropdown' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                  />
                </Tooltip>
                <Menu
                  id="basic-menu-workspaces"
                  aria-labelledby="basic-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add Cart</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForever fontSize="small" />
                    </ListItemIcon>
                    <ListItemText> Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            {/* Box-ListCard */}
            <Box
              sx={{
                p: '0 5px',
                m: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${theme.trello.boardContentHeight} -
                  ${theme.spacing(5)} - 
                  ${COLUMN_HEADER_HEIGHT} - 
                  ${COLUMN_FOOTER_HEIGHT})`
              }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gbUzG.img?w=800&h=415&q=60&m=2&f=jpg"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>NguyenHung MERN</Typography>
                </CardContent>
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<CommentIcon />}>
                    15
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    10
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>
              {/* Clone */}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              <Card
                sx={{
                  cursor: 'pointer',
                  boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)',
                  overflow: 'unset'
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Cart01</Typography>
                </CardContent>
              </Card>{' '}
              {/* EndClone */}
            </Box>

            {/* Footer */}
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add new card</Button>{' '}
              <Tooltip title="Drag to Move">
                <DragHandleIcon
                  sx={{
                    cursor: 'pointer',
                    boxShadow: ' 0 1px 1px rgba(0,0,0,0.2)'
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BoardContent

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import Cloud from '@mui/icons-material/Cloud'
import ContentCut from '@mui/icons-material/ContentCut'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import DeleteForever from '@mui/icons-material/DeleteForever'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'
//
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Column({ column }) {
  //dndkit
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } })

  const dndKitColumnStyles = {
    // touchAction: 'none',
    //Nếu sử dnụng CSS.Transfỏm như docs sẽ lỗi kiểu stretch
    //https://github.com/clauderic/dnd-kit/issues/117
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    // Chiều cao phải là luôn max 100% vì nếu không sẽ lỗi lúc kéo column ngắn qua một cái column dài thì phải kéo ở khu vực ơ giữa rất khó chịu ( dome ở video32) ,.Lưu ý lúc nào phải kết hợp với {...listens} nằm ở box chứ không phải ở div ngoài cùng để tránh trường hợp kéo vào vùng xanh
    opacity: isDragging ? 0.5 : undefined
  }
  //end dnd-kit

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) =>
            `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
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
            height: (theme) => theme.trello.columnHeaderHeight,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
          >
            {column?.title}
          </Typography>
          {/*Box Column DropDown */}
          <Box>
            <Tooltip title="More Option">
              <ExpandMoreIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
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
        <ListCards cards={orderedCards} />
        {/* Footer */}
        <Box
          sx={{
            height: (theme) => theme.trello.columnFooterHeight,
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
    </div>
  )
}

export default Column

import { Box } from '@mui/material'

function BoardBar() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.trello.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        BoardBar
      </Box>
    </div>
  )
}

export default BoardBar

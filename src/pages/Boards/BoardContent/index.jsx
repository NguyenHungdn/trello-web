import { Box } from '@mui/material'

function BoardContent() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Box Content
      </Box>
    </div>
  )
}

export default BoardContent

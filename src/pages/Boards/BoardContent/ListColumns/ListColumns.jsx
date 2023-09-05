import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
function ListColumns({ columns }) {
  /**
   * Thằng sortableContext yêu cầu là items là một mảng dạng ['id-1','id-2' chứn không phải dạng [{id:'id-1'},{id:'id-2'}]]
   * Nếu không đúng thì vẫn kéo thả được không không có animation
   */
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
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
        {columns?.map((column) => {
          return <Column key={column._id} column={column} />
        })}

        {/* add column */}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}
        >
          <Button
            sx={{
              color: 'white',
              witdh: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1
            }}
            startIcon={<NoteAddIcon />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns

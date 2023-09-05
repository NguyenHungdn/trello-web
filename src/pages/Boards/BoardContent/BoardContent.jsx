import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { useEffect, useState } from 'react'

import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
function BoardContent({ board }) {
  //https://docs.dndkit.com/api-documentation/sensors
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 }
  })
  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix khi click cũng gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })
  //Nhấn giữ 250ms và dung sai của cảm ứng  500px, thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  })
  // const sensors = useSensors(pointerSensor)
  //ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trại nghiệM trên mobile tốt nhất, không bị bug
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumnsState, setOrderedColumnsState] = useState([])
  useEffect(() => {
    setOrderedColumnsState(
      mapOrder(board?.columns, board?.columnOrderIds, '_id')
    )
  }, [board])

  const handleDragEnd = (event) => {
    // console.log('handleDragEnd', event)
    const { active, over } = event
    // kiểm tra nếu không tồn tại over ( kéo ra ngoài làm over ===null)
    if (!over) return
    if (active.id !== over.id) {
      //lấy vị trí cũ (từ active)
      const oldIndex = orderedColumnsState.findIndex((c) => c._id === active.id)
      //lấy vị trí mới ( từ over)
      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id)
      //Dùng arrayMove của thằng dnd-kit để xắp xếp lại mảng column ban đầu
      //Code của arrayMove ở đây : dnd-kit/packages/sorttable/src/utilities/arrayMove.ts
      const dndOrderedColumns = arrayMove(
        orderedColumnsState,
        oldIndex,
        newIndex
      )
      // 2 cái cosole.log  dữ liệU này để sau dùng xử lý gọi api
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
      // console.log('dndOrderedColumns', dndOrderedColumns)
      // console.log('dndOrderedColumnsIds', dndOrderedColumnsIds)

      //cập nhật lại state column ban đầu sau khi đã drag drop
      setOrderedColumnsState(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
        <ListColumns columns={orderedColumnsState} />
      </Box>
    </DndContext>
  )
}

export default BoardContent

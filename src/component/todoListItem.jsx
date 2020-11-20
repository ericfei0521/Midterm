import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoInput from './todoInput'
import '../style/list.css'
const TodoItem = ({ title }) => {
  let [lists, setLists] = useState([])
  const addList = (title) => {
    setLists([...lists, title])
  }

  function handleDrag (result){
     if(!result.destination){
       return
     }else if (result.destination === result.source.index){
       return
     }else{
       const newarr = Array.from(lists)
       const [remove] = newarr.splice(result.source.index,1)
       newarr.splice(result.destination.index,0,remove)
       setLists(newarr)
     }
  }
  return (
    <div className="list">
      <h1>{title}</h1>
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="List">
          {(provided) => (
            <div className="listcontent" ref={provided.innerRef} {...provided.droppableProps}>
              {lists.map((list, index) => (
                <Draggable draggableId={index.toString()} index={index}>
                  { p => (
                    <div key={list.id} className="listItem" 
                    {...p.draggableProps} 
                    {...p.dragHandleProps} 
                    ref={p.innerRef}>
                    <h1>{list.name}</h1>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <TodoInput addList={addList} title="Add Card" />
    </div>
  )
}
export default TodoItem

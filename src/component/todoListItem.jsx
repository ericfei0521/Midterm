import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoInput from './todoInput'
import '../style/list.css'
const TodoItem = ({ title }) => {
  let [lists, setLists] = useState([])
  const addList = (title) => {
    setLists([...lists, title])
  }
  return (
    <div className="list">
      <h1>{title}</h1>
      <DragDropContext>
        <Droppable droppableId="todocard">
          {provided => (
            <div className="listcontent" ref={provided.innerRef} {...provided.droppableProps}>
              {lists.map((list, i) => (
                <Draggable draggableId={list.id} index={i}>
                  { p => (
                    <div key={list.id} className="listItem" {...p.draggableProps} {...p.dragHandleProps} ref={p.innerRef}>
                      <h1>{list.name}</h1>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <TodoInput addList={addList} title="Add Card" />
    </div>
  )
}
export default TodoItem

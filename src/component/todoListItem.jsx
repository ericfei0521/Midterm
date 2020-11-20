import React,{ useState } from 'react'
import styles from '../Style/listItem.module.scss'
import {useDispatch} from 'react-redux'
import { deleteTodo } from '../action/action'
import { editTodo } from '../action/action'
import {switchComplete} from '../action/action'
function TodoItem(todo){
    let dispatch = useDispatch();
    let [editable, setEditable] = useState(false);
    let [name, setName] = useState()
    if(editable === false){
        return(
            <div className={styles.listItem}>
                <div className={styles.content}>
                <input type="checkbox" 
                id = {todo.todo.id}
                checked={todo.todo.isComplete}
                className={styles.checkbox}
                onChange = {()=>{
                    // console.log(complete)
                    dispatch(switchComplete(
                        {
                            id:todo.todo.id,
                        }
                    ))
                }}
                />
                <h2>{todo.todo.name}</h2>
                </div>
                <div className={styles.btnGroup}>
                    <button onClick={()=>setEditable(true)}>Edit</button>
                    <button onClick={()=>dispatch(deleteTodo(todo.todo.id))}>Deleted</button>
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.listItem}>
                <div className={styles.content}>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}/>
                </div>
                <div className={styles.btnGroup}>
                    <button 
                    onClick={()=>setEditable(false)}
                    >Cancel</button>
                    <button 
                    onClick={()=>{
                        setEditable(false)
                        dispatch(editTodo(
                            {
                                id:todo.todo.id,
                                name:name
                            }
                        ))
                        setName('');
                    }
                    }
                    >Save</button>
                </div>
            </div>
        )
    }

}

export default TodoItem
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Form } from 'react-bootstrap'

const Input = (props) => {

    const {taskList, setTaskList} = props
    const [taskName, setTaskName] = useState("")

    const inputHandler = (e) => {
        
        setTaskName(e.target.value);
    }

    const formHandler = (e) => {

        e.preventDefault();
        let newTask = {
            name: taskName,
            isComplete: false
        }
        setTaskList([...taskList,newTask]);
        setTaskName("");
    }

    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit = { formHandler }>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" onChange={ inputHandler } name="task" value={taskName}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary mb-4"/>
            </Form>
            
        </div>
    )
}

export default Input
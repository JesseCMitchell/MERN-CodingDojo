import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'

const InputForm = ({nameOfClass, name, placeholder}) => (
    <div className="mb-3">
        <Form.Control type="text" className={nameOfClass} name={name} placeholder={placeholder}/>
    </div>
)

const Form = () => {
    const {name, setName} = useContext(userContext);

    const inputHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <InputForm nameOfClass={"name-input"} name={"name"} placeholder={"Your Name"} onChange={inputHandler} value={name} />
                </Form.Group>
            </Form>
        </div>
    )
}
import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'


const Form = () => {
    const {name, setName} = useContext(userContext);

    const inputHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>

        </div>
    )
}
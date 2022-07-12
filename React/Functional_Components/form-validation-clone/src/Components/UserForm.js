import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, FormGroup } from 'react-bootstrap'

// Sets the initial state of global object
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

// Create reducer function for global state object
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}


const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleChange(e) {
        let currentError = null;
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // First and Last Name if check with EMAIL else statement
        if(e.target.name === "firstName" || e.target.name === "lastName") {
            if(e.target.value.length === 0){
                currentError = "Field Required."
            } else{
                currentError = null
            }
        }else{console.log(e.target.name.match(mailformat))
            if(!e.target.value.match(mailformat)){
            currentError = "Invalid email"
            }
            else{
            currentError = null
            } 
        }dispatch({
            type: e.target.name,
            payload: {
                value: e.target.value, 
                error: currentError
            }
        });   
    }


    // Create an event handler for updating fields when data is passed through and checking for errors
    // const handleErrors = e => {
    //     setInputs({ ...inputs, [e.target.name]: e.target.value });
    //     console.log(inputs);

    //     if (e.target.name == "firstName" || e.target.name == "lastName") {
    //         if (e.target.value.length != 0 && e.target.value.length < 2) {
    //             setErrors({...errors,[e.target.name]: "Name must be at least 2 characters."});
    //         }else{
    //             setErrors({...errors,[e.target.name]: ""});
    //         }
    //     }
    //     if(e.target.name == 'email'){
    //         if(e.target.value.length < 2 && e.target.value.length != 0){
    //             setErrors({...errors, [e.target.name]: "Email must be at least 2 characters."});
    //         }
    //         else{
    //             setErrors({...errors, [e.target.name]: ""});
    //         }
    //     }
    //     if(e.target.name == 'password' || e.target.name == 'confirmPassword'){
            
            
    //         if((e.target.value.length < 2 && e.target.value.length != 0) ){
                
    //             setErrors({...errors, [e.target.name]: "Password must be at least 8 characters."});
    //         }
    //         else{
    //             setErrors({...errors, [e.target.name]: ""});
    //         }
    //     }
    // };
    // Create form
    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <Form className="signup-form">
                <Form.Group>
                    <div className="mb-3">
                        {/* htmlFor and name must match with key name in App.js State object */} 
                        <Form.Control type="text" className="name-input" name="firstName" placeholder="First Name" value={state.firstName.value} onChange={handleChange}/>
                        {state.firstName.error !== null && (<p className="text-danger small"> { state.firstName.error }</p>)}
                    </div>
                    <div className="mb-3">
                        <Form.Control type="text" className="name-input" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                        {state.lastName.error !== null && (<p className="text-danger small"> { state.lastName.error }</p>)}
                    </div>
                    <div className="mb-3">
                        <Form.Control type="text" className="email-input" name="email" placeholder="Email" onChange={handleChange}/>
                        {state.email.error !== null && (<p className="text-danger small"> { state.email.error }</p>)}
                    </div>
                    
                    <div>
                        <Button className="submit-button" value="submit" type="submit">Submit</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
};

export default UserForm;

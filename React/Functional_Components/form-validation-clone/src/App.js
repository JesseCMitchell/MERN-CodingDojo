import React from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <div className="App bg-light">
            <div className="row justify-content-center">
                <div className="col-4">
                    <UserForm />
                </div>
            </div>
        </div>
    );
}

export default App;

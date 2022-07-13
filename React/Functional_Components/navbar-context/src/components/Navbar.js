import React, { useContext }  from 'react'

import userContext from '../contexts/UserContext';

const Navbar = () => {

    const {name} = useContext(userContext)

    return (
        <div>
            <div className ="bg-dark p-1">
                <p className = "text-right text-light font-weight-bold mx-4 my-0">Hi {name}!</p>
            </div>
        </div>
    )
}

export default Navbar
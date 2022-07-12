import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Button } from 'react-bootstrap'

const tab = (props) => {
    const { tab, index, setIndex } = props;
    const { label, content } = tab;

    const tabSelected = (e, index) => {
        setIndex(index);

    }

    return (
        <>
            <Button onClick={e => tabSelected(e, index)}
                className="button btn-submit d-inline-block mx-2 px-2">
                {label}
            </Button>
        </>
    )
}

export default tab
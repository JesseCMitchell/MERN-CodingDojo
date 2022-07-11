import React, { Component } from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            increase_age: this.props.age,
        };
    }
    // prettier-ignore
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <div>
                    <h1>
                        {lastName}, {firstName}
                    </h1>
                    <p>Age: {this.state.current_age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
                <button
                    onClick={ () => {this.setState({ increase_age: this.state.increase_age + 1 });}}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </>
        );
    }
}
export default PersonCard;

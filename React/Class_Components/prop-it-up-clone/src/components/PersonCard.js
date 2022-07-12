import React, { Component } from "react";

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increaseAge: this.props.age,
        };
    }

    handleClick = () => {
        this.setState({
            increaseAge: this.state.increaseAge + 1,
        });
    };

    render() {
        return (
            <div>
                <h1>
                    {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.state.increaseAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.handleClick}>
                    Birthday Button for {this.props.lastName}, {this.props.firstName}
                </button>
            </div>
        );
    }
}

// export default PersonCard;

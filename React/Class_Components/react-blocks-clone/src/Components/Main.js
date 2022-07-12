import React, { Component } from "react";
import styles from "./Main.module.css";

class Main extends Component {
    render() {
        return <div id={styles.main_content}>{this.props.children}</div>;
    }
}

export default Main;

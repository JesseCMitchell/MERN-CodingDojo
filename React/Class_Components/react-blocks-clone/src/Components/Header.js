import React, { Component } from "react";
import styles from "./Header.module.css";
import { render } from "@testing-library/react";

class Header extends Component {
    render() {
        return <div id={styles.header}></div>;
    }
}

export default Header;

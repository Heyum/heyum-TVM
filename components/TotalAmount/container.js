import React, { Component } from "react";
import TotalAmount from "./presenter";

class Container extends Component {

    componentWillReceiveProps = nextProps => {
        console.log("TotalAmount componentWillReceiveProps");
    };

    componentDidMount = () => {
        console.log("TotalAmount componentDidMount");
    }; 

    render() {
        console.log("TotalAmount render");
        return (
            <TotalAmount {...this.props} {...this.state} />
        );
    }
}

export default Container;
import React, { Component } from "react";
import PropTypes from "prop-types";
import VendingMachine from "./presenter";

class Container extends Component {
    static propTypes = {
        choosedVendingMachine: PropTypes.object,
    };

    componentWillReceiveProps = nextProps => {
        console.log("VendingMachine componentWillReceiveProps");
    };

    componentDidMount = () => {
        console.log("VendingMachine componentDidMount");
        const { initApp } = this.props;
        initApp();
    }; 

    render() {
        console.log("VendingMachine render");
        return (
            <VendingMachine {...this.props} {...this.state} />
        );
    }
}

export default Container;
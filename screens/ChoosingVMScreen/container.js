import React, { Component } from "react";
import PropTypes from "prop-types";
import ChoosingVMScreen from "./presenter";

class Container extends Component {
    static propTypes = {
        vendingMachines: PropTypes.array,
        initApp: PropTypes.func.isRequired,
        chooseVendingMachine: PropTypes.func.isRequired,
        resetByVMChoice: PropTypes.func.isRequired
    };

    componentWillReceiveProps = nextProps => {
        console.log("ChoosingVMScreen componentWillReceiveProps");    
    };


    componentDidMount = () => {
        console.log("ChoosingVMScreen componentDidMount");   
        const { initApp } = this.props;
        initApp();
    };

    render() {
        console.log("ChoosingVMScreen render");   
        return (
          <ChoosingVMScreen {...this.props} {...this.state} />
        );
    }
  
}

export default Container;
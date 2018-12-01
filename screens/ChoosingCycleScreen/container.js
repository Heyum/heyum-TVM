import React, { Component } from "react";
import PropTypes from "prop-types";
import ChoosingCycleScreen from "./presenter";

class Container extends Component {
    static propTypes = {
        cycles: PropTypes.array,
        initApp: PropTypes.func.isRequired,
        chooseCycle: PropTypes.func.isRequired,
    };

    componentWillReceiveProps = nextProps => {
        console.log("ChoosingCycleScreen componentWillReceiveProps");    
    };


    componentDidMount = () => {
        console.log("ChoosingCycleScreen componentDidMount");   
        const { initApp } = this.props;
        initApp();
    };

    render() {
        console.log("ChoosingCycleScreen render");   
        return (
          <ChoosingCycleScreen {...this.props} {...this.state} />
        );
    }
  
}

export default Container;
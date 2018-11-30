import React, { Component } from "react";
import PropTypes from "prop-types";
import ChoosingItemScreen from "./presenter";

class Container extends Component {
    static propTypes = {
        feeds: PropTypes.array,
        initApp: PropTypes.func.isRequired,
        pickItem: PropTypes.func.isRequired
    };

    componentWillReceiveProps = nextProps => {
        console.log("ChoosingItemScreen componentWillReceiveProps");    
    };


    componentDidMount = () => {
        console.log("ChoosingItemScreen componentDidMount");    
        const { initApp } = this.props;
        initApp();
    };

    render() {
        console.log("ChoosingItemScreen render");    
        return (
          <ChoosingItemScreen {...this.props} {...this.state} />
        );
    }
  
}

export default Container;
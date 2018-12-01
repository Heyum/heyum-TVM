import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeScreen from "./presenter";

class Container extends Component {
    static propTypes = {
        choosedVendingMachine: PropTypes.object,
    };

    componentWillReceiveProps = nextProps => {
        console.log("HomeScreen componentWillReceiveProps");    
    };


    componentDidMount = () => {
        console.log("HomeScreen componentDidMount");   

    };

    render() {
        console.log("HomeScreen render");   
        return (
          <HomeScreen {...this.props} {...this.state} />
        );
    }
  
}

export default Container;
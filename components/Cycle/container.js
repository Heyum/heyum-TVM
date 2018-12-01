import React, { Component } from "react";
import PropTypes from "prop-types";
import Cycle from "./presenter";

class Container extends Component {
    static propTypes = {
        choosedCycle: PropTypes.object,
    };

    componentWillReceiveProps = nextProps => {
        console.log("Cycle componentWillReceiveProps");
    };

    componentDidMount = () => {
        console.log("Cycle componentDidMount");
    }; 

    render() {
        console.log("Cycle render");
        return (
            <Cycle {...this.props} {...this.state} />
        );
    }
}

export default Container;
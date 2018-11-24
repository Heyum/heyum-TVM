import React, { Component } from "react";
import PropTypes from "prop-types";
import BuyingList from "./presenter";

class Container extends Component {
    static propTypes = {
        buyingLists: PropTypes.array,
        initApp: PropTypes.func.isRequired
    };

    componentWillReceiveProps = nextProps => {

    };

    componentDidMount = () => {
        const { initApp } = this.props;
        initApp();
    }; 

    render() {
        return (
            <BuyingList {...this.props} {...this.state} />
        );
    }
}

export default Container;
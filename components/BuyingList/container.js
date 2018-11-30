import React, { Component } from "react";
import PropTypes from "prop-types";
import BuyingList from "./presenter";

class Container extends Component {
    static propTypes = {
        buyingLists: PropTypes.array,
    };

    componentWillReceiveProps = nextProps => {
        console.log("BuyingList componentWillReceiveProps");
    };

    componentDidMount = () => {
        console.log("BuyingList componentDidMount");
    }; 

    render() {
        console.log("BuyingList render");
        return (
            <BuyingList {...this.props} {...this.state} />
        );
    }
}

export default Container;
import React, { Component } from "react";
import PropTypes from "prop-types";
import BuyingList from "./presenter";

class Container extends Component {
  static propTypes = {
    buyingLists: PropTypes.array,
    getFeed: PropTypes.func.isRequired
  };
  /* state = {
    isFetching: false
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        isFetching: false
      });
    }
  };
  */
  componentDidMount = () => {
    const { initApp } = this.props;
    initApp({ id: 1, name: '콜라' });
  }; 

  render() {

    return (
      <BuyingList {...this.props} {...this.state} />
    );
  }
  /*
  _refresh = () => {
    const { getFeed } = this.props;
    this.setState({
      isFetching: true
    });
    getFeed();
  }; */
}

export default Container;
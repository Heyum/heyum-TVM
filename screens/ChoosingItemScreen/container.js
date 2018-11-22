import React, { Component } from "react";
import PropTypes from "prop-types";
import ChoosingItemScreen from "./presenter";

class Container extends Component {
  static propTypes = {
    feeds: PropTypes.array,
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
    initApp();
  };

  render() {
    return (
      <ChoosingItemScreen {...this.props} {...this.state} />
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
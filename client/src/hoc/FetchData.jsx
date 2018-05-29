import React, { Component } from 'react';

const FetchEntity = fetchFn => {
  return WrappedContainer => {
    class Container extends Component {

      componentWillMount() {
        fetchFn(this.props);
      }

      componentWillReceiveProps(nextProps) {
        fetchFn(nextProps);
      }

      render() {
        return <WrappedContainer {...this.props} />;
      }
    }

    return Container;
  };
}

export default FetchEntity;
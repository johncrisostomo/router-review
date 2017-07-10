import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      return this.props.authenticated
        ? <ComposedComponent {...this.props} />
        : <Redirect to="/" />;
    }
  }

  const mapStateToProps = state => ({ authenticated: state.authenticated });

  return connect(mapStateToProps)(Authentication);
}

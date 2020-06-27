import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {name} from '../reducers';
import * as action from '../actions';
import Login from './Login.js';
import Account from "./Account"
import {Spinner} from 'native-base';
import {View} from 'react-native';

class Container extends PureComponent {
  componentDidMount() {
    this.props.actions.login();
  }

  render() {
    const {isLoading} = this.props;
    if (isLoading) {
      return (
        <View>
          <Spinner color="red" />
        </View>
      );
    }
    return (
      <React.Fragment>
        {/* <Login {...this.props} /> */}
        <Account {...this.props} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state[name],
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
  };
  return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

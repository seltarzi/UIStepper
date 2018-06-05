/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import UIStepper from './UIStepper'
export default class App extends Component  {


  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <UIStepper stepSize={1} onChangeValue={this.onChangeValue}/>
        <Text style={{fontSize: 20, padding: 20}}>Value changed: {this.state.value}</Text>
      </View>
    );
  }

  onChangeValue(newValue) {
    this.setState({value: newValue});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

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
import PropTypes from 'prop-types';

export default class UIStepper extends Component  {

  static propTypes = {
    initialValue: PropTypes.number,
    value: PropTypes.number,
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    stepSize: PropTypes.number,
  };

  static defaultProps = {
    initialValue: 0,
    value: 0,
    minimumValue: 0,
    maximumValue: 15,
    stepSize: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={()=>this.decrement()}>
            <View style={styles.cell}>
              <Text style={styles.textView}>-</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.separator}/>

          <View style={styles.cell}>
            <Text style={styles.textView}>{this.state.value}</Text>
          </View>

          <View style={styles.separator}/>

          <TouchableOpacity onPress={()=>this.increment()}>
            <View style={styles.cell}>
              <Text style={styles.textView}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  decrement() {
    let stepSize = this.props.stepSize;
    let newValue = this.state.value;
    newValue -= stepSize;
    if(newValue >= this.props.minimumValue) {
      this.setState({value: newValue});
      this.props.onChangeValue(newValue);
    }

  }

  increment() {
    let stepSize = this.props.stepSize;
    let newValue = this.state.value;
    newValue += stepSize;
    if(newValue <= this.props.maximumValue) {
      this.setState({value: newValue});
      this.props.onChangeValue(newValue);
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  innerContainer: {
    flexDirection: 'row',
    width: 300,
    height: 100,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#0000FF'
  },
  cell: {
    width: 98,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    height: 95,
    width: 3,
    backgroundColor: '#0000FF'
  },
  textView: {
    fontSize: 60,
    color: '#0000FF'
  },
  stepSizeContainer: {
    padding: 10
  }
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class NewProduct extends Component {
  constructor() {
  	super();
  	this.state= {
  		
  	}
	}
	static navigationOptions = {
    title: 'More Products',
    headerStyle: {
      backgroundColor: '#000'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'normal'
    }
  };

  render() {
  	let data = [{
      value: 'Community',
    }, {
      value: 'Product Manuals',
    }, {
      value: 'Articles',
    }, {
    	value: 'cases',
    }];
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>Know more about a product:</Text>
      <Dropdown
			  value= "Choose a product.."
        data={data}
        textColor="#000"
        fontSize={14}
        containerStyle={{justifyContent: 'center', height: 40, backgroundColor: '#096a8d', marginTop: 30}}
        rippleCentered={true}
      />
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 20
	}
});


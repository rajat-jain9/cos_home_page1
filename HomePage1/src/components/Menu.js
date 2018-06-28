import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Header from './Header';
export default class Menu extends Component {

	static navigationOptions = {
    header: null
  };
	
	test() {
		alert("Welcome");
	}
  
  render() {
  	const { navigate } = this.props.navigation;
    return (
    	<View style={styles.container}>
	    	<View style={{flex: 2}}>
	    		<Header />
	    	</View>
	    	<View style={{flex: 12}}>
	        <View style={{flex: 1, flexDirection: 'row', padding: 4}}>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={() => { navigate("SearchPage") }}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={() => { navigate("NewProductPage")}}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        </View>
	        <View style={{flex: 1, flexDirection: 'row'}}>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={this.test}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={this.test}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        </View>
	        <View style={{flex: 1, flexDirection: 'row'}}>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={this.test}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={this.test}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        </View>
	        <View style={{flex: 1, flexDirection: 'row'}}>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={this.test}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        	<TouchableOpacity style={{flex: 1, padding: 3}} onPress={this.test}>
	        	  <View style={{flex:1, backgroundColor: '#d6d4d4'}}>
	        	    <Text></Text>
	        	  </View>
	        	</TouchableOpacity>
	        </View>
	      </View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
});


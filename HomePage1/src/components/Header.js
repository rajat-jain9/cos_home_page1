import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.blackSection}>
	        <View style={{flex: 1, flexDirection: 'row'}}>
	        	<View style={styles.menu}>
	        		<Image
	              style={{width: 50, height: 50}}
	              source={require('../assets/menu.png')}
	            />
	        	</View>
	        	<View style={styles.logo}>
	        		<Image
	              style={{width: 120, height: 50}}
	             source={require('../assets/logo.png')}
	            />
	        	</View>
	        	<View style={styles.notification}>
	        		<Image
	              style={{width: 35, height: 38}}
	              source={require('../assets/bell.png')}
	            />
	        	</View>
	        	<View style={styles.profile}>
	        		<Image
	              style={{width:40, height: 38}}
	             source={require('../assets/user.png')}
	            />
	        	</View>
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
	blackSection: {
		flex: 2,
		backgroundColor: '#000'
	},
	menu: {
		flex:2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		flex:4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	notification: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	profile: {
		flex:2,
		justifyContent: 'center',
		alignItems: 'center'
	}
});


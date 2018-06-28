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


export default class Search extends Component {
  constructor() {
  	super();
  	this.state= {
  		title: "Content Type",
  		text: "",
  		txt: ""
  	}
	}
	static navigationOptions = {
    title: 'Search',
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

   onSelect(index, value){
        this.setState({
        txt: `Selected index: ${index} , value: ${value}`
        })
    }

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
      	<View style={styles.searchBarContainer}>
      		<View style={styles.dropDown}>
      			<Dropdown
      			  value= "Content Type"
              data={data}
              textColor="#000"
              fontSize={14}
              containerStyle={{justifyContent: 'center', height: 40}}
              rippleCentered={true}
            />
      		</View>
      		<View style={styles.search}> 
      			<TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder= "Start your search here..."
              underlineColorAndroid="transparent"
            />
      		</View>
      	</View>
      	<View style={styles.filterContainer}> 
      		<View style={styles.history}>
      		<View style={{flex: 1}}>
      			<Image
              source={require('../assets/clock.png')}
            />
            </View>
            <View style={{flex: 2, alignItems: 'flex-start'}}>
              <Text>View History</Text>
      			</View>
      		</View>
      		<View style={styles.radioBtn}>
      			<RadioGroup
              onSelect = {(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} >
                  <Text>All words</Text>
              </RadioButton>

              <RadioButton value={'item2'}>
                  <Text>Any of the words</Text>
              </RadioButton>

              <RadioButton value={'item3'}>
                  <Text>Use * as wildcards</Text>
              </RadioButton>
            </RadioGroup>
      		</View>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchBarContainer: {
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		padding: 20,
	},
	dropDown: {
		flex: 2,
		backgroundColor: '#d6d4d4',
	  justifyContent: 'flex-end',
	},
	search: {
		flex: 4,
		backgroundColor: '#fff'
	},
	filterContainer: {
		flex: 3,
		flexDirection: 'row',
		padding: 20
	},
	history: {
		flex: 2,
		flexDirection: 'row',
	},
	radioBtn: {
		flex: 3,
		paddingLeft: 50
	}
});


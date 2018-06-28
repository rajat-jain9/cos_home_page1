import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Menu from '../components/Menu';
import Search from '../components/Search';
import NewProduct from '../components/NewProduct';

const Navigation = StackNavigator({
  MenuPage: { screen: Menu },
  SearchPage: { screen: Search },
  NewProductPage: { screen: NewProduct}
});

export default Navigation;
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainService from './services/MainService';

import { MainScreenNavigator } from './components/AppNavigation'
import Home from './components/Home'
import DecijiTurizam from './components/DecijiTurizam'

export default class App extends React.Component {
  state = {
    loaded: false
  }

  constructor(){
    super();
    MainService.load(v => this.setState({loaded: true}));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ? <MainScreenNavigator /> : 
        <View style={styles.image}>  
        <Image source={require('./img/dest-logo.jpg')} />
        </View>
      }
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
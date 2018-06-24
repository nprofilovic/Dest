import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  {  createBottomTabNavigator, createStackNavigator, createDrawerNavigator }  from 'react-navigation';
import Home from './Home';
import Leto from './Leto';
import Onama from './Onama';
import Kontakt from './Kontakt';
import Budva from './Budva';
import Rafailovici from './Rafailovici';
import ProductItemCard from './ProductItemCard';

export const Navigation = createBottomTabNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'HOME',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../img/icon/020-landmark.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
          
        }
      },
      Leto: {
        screen: Leto,
        navigationOptions: {
          tabBarLabel: 'LETO',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../img/icon/007-sunset.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
        }
      },
      Onama: {
        screen: Onama,
        navigationOptions: {
          tabBarLabel: 'O NAMA',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../img/icon/021-resort.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
        }
      },
      Kontakt: {
        screen: Kontakt,
        navigationOptions: {
          tabBarLabel: 'KONTAKT',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../img/icon/016-navigation.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
        }
      }, 
       
},
{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })
  const ScreenNotOnTabbar = createStackNavigator ({
    Budva: {
      screen: Budva,
      navigationOptions: {
        header: null
    }
       
    },
    Rafailovici: {
      screen: Rafailovici,
      navigationOptions: {
        header: null
    }
       
    },

    ProductItemCard: {
      screen: ProductItemCard,
      navigationOptions: {
        header: null
    }
       
    },

  },
    
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      tabBarIcon:false,
      tabBarLabel:false,
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
)

  export const MainScreenNavigator = createStackNavigator({
    Tab: { 
      screen: Navigation,
      navigationOptions: {
        header: null
    }
    
    },
    ScreenNotOnTabbar: { 
      screen: ScreenNotOnTabbar,
      navigationOptions: {
        header: null
    }
     },
    
    
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
  });

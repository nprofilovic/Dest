import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  {  createBottomTabNavigator }  from 'react-navigation';
import Home from './Home';
import Leto from './Leto';
import Onama from './Onama';
import Kontakt from './Kontakt';

export const Navigation = createBottomTabNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'HOME',
          
        }
      },
      Leto: {
        screen: Leto,
        navigationOptions: {
          tabBarLabel: 'LETO',
          
        }
      },
      Onama: {
        screen: Onama,
        navigationOptions: {
          tabBarLabel: 'O NAMA',
          
        }
      },
      Kontakt: {
        screen: Kontakt,
        navigationOptions: {
          tabBarLabel: 'KONTAKT',
          
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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
  });

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  {  createBottomTabNavigator, createStackNavigator, createDrawerNavigator }  from 'react-navigation';
import Home from './Home';
import NewHome from './NewHome';
import DecijiTurizam from './DecijiTurizam';
import Onama from './Onama';
import Kontakt from './Kontakt';
import Budva from './Budva';
import Rafailovici from './Rafailovici';
import Canj from './Canj';
import HercegNovi from './HercegNovi';
import VrnjackaBanja from './VrnjackaBanja';
import SokoBanja from './SokoBanja';
import MataruskaBanja from './MataruskaBanja';
import Viminacijum from './Viminacijum';
import SportskePripreme from './SportskePripreme';
import ProductItemCard from './ProductItemCard';

export const Navigation = createBottomTabNavigator ({
    Home: {
        screen: NewHome,
        navigationOptions: {
          tabBarLabel: 'HOME',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../img/icon/007-sunset.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
          
        }
      },
      DecijiTurizam: {
        screen: DecijiTurizam,
        navigationOptions: {
          tabBarLabel: 'DEČIJI TURIZAM',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../img/icon/002-trekking.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
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
      activeTintColor: '#f27a24',
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
    Canj: {
      screen: Canj,
      navigationOptions: {
        header: null
      }
    },
    HercegNovi: {
      screen: HercegNovi,
      navigationOptions: {
        header: null
      }
    },
    VrnjackaBanja: {
      screen: VrnjackaBanja,
      navigationOptions: {
        header: null
      }
    },
    SokoBanja: {
      screen: SokoBanja,
      navigationOptions: {
        header: null
      }
    },
    MataruskaBanja: {
      screen: MataruskaBanja,
      navigationOptions: {
        header: null
      }
    },
    Viminacijum: {
      screen: Viminacijum,
      navigationOptions: {
        header: null
      }
    },
    SportskePripreme: {
      screen: SportskePripreme,
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

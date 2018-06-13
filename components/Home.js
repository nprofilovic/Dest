import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Image  } from 'react-native';


export default class Home extends React.Component {
  
  componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
  }

  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
            <Text>CRNA GORA</Text>
        </View>
        <View>
            <Image source={require('../img/dest-budva.jpg')} /> 
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safe: {
      flex: 1,
  },
  header: {
    height: this.startHeaderHeight, 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd',
    padding: 20,
  }
});

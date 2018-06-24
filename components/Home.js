import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, Dimensions, ImageBackground, ScrollView, StatusBar, TouchableOpacity  } from 'react-native';


const { height, width } = Dimensions.get('window')

export default class Home extends React.Component {
  
  componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../img/dest-logo.jpg')} style={styles.logo}/>
        </View>
        <ScrollView>
        <TouchableOpacity onPress={() =>
          navigate('Budva', { name: 'Budva' })}>
          <View style={styles.row1}>
            <ImageBackground source={require('../img/dest-budva.jpg')} style={styles.imageBackground} >
              <Text style={styles.budvaText}>
                Budva
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigate('Rafailovici', { name: 'Rafailovici' })}>
        <View style={styles.row1}> 
          <ImageBackground source={require('../img/dest-rafailovici.jpg')} style={styles.imageBackground} >
            <Text style={styles.budvaText}>
              Rafailovići
            </Text>
          </ImageBackground>
                       
        </View>
        </TouchableOpacity>
        <View style={styles.row1}> 
          <ImageBackground source={require('../img/dest-canj.jpg')} style={styles.imageBackground} >
            <Text style={styles.budvaText}>
              Čanj
            </Text>
          </ImageBackground>
                       
        </View>
        <View style={styles.row1}> 
          <ImageBackground source={require('../img/dest-herceg-novi.jpg')} style={styles.imageBackground} >
            <Text style={styles.budvaText}>
              Herceg Novi
            </Text>
          </ImageBackground>
                       
        </View>
        <View style={{ flex:1,  width: width, height: 50,marginBottom:5,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#f27a24' }}> 
          <Text style={styles.rowSrbija}>SRBIJA</Text>
        </View>
        <View style={styles.row1}> 
          <ImageBackground source={require('../img/dest-vrnjacka-banja.jpg')} style={styles.imageBackground} >
            <Text style={styles.budvaText}>
              Vrnjačka banja
            </Text>
          </ImageBackground>
                       
        </View>
        <View style={styles.row1}> 
          <ImageBackground source={require('../img/dest-soko-banja.jpg')} style={styles.imageBackground} >
            <Text style={styles.budvaText}>
              Soko banja
            </Text>
          </ImageBackground>
                       
        </View>
        <View style={styles.row1}> 
          <ImageBackground source={require('../img/dest-mataruska-banja.jpg')} style={styles.imageBackground} >
            <Text style={styles.budvaText}>
              Mataruška banja
            </Text>
          </ImageBackground>
                       
        </View>
      </ScrollView>
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
  
  logo: {
    width: 100,
    height: 100,
    
  },
  header: {
    height: '10%', 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd',
    marginTop:30,
    alignItems: 'center',
    justifyContent:'center'
    
  },
  row1: {
    flex:1,
    width: '100%', 
    height: '40%',
    paddingBottom: 5 
  },
  row2: {
    flex:1, 
    flexDirection: 'row', 
    width: '100%', 
    height: '50%', 
    flexWrap:'wrap',   
    justifyContent: 'space-around', 
  },
  image: {
    flex: 1, 
    height: null, 
    width: null, 
    resizeMode: 'cover', 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#dddddd',
    paddingBottom: 10,
  },
  imageBackground: {
    flex: 1, 
    height: null, 
    width: null,
    backgroundColor:'rgba(0,0,0,.9)', 
    paddingBottom: 10,
    
  },
  budvaText: {
    color: '#fff', 
    fontSize:24, 
    fontWeight:'500', 
    paddingTop:120, 
    paddingLeft:20
  },
  rowSrbija: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    
  }

});

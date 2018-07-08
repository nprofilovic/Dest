import React from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground, StatusBar, Image, ScrollView } from 'react-native';
import { Icon } from 'native-base';

import {RkModalImg, RkTheme} from 'react-native-ui-kitten';


export default class SportskePripreme extends React.Component {


render() {
    const { navigate } = this.props.navigation;
    let images = [
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-1.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-2.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-3.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-4.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-5.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-6.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-7.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-8.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-9.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-10.jpg'},
      


    ]
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-6.jpg'}} style={styles.headerImageBackground} >
          <Icon name='arrow-back' onPress={() => navigate('DecijiTurizam', { name: 'DecijiTurizam' })} style={styles.headerIcon} />
          <Text style={styles.headerText}>Sportske Pripreme i Festivali</Text>
        </ImageBackground>
      </View>
      <View style={styles.contain}>
        <ScrollView>
          <View style={styles.row1}>
            <Image source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-7.jpg'}} style={{height: 200, resizeMode:'cover' }} />
            <Text style={styles.viminacijumTitle}>Sportske Pripreme i Festivali</Text>
            
            <Text style={{textAlign: 'center', padding: 10}}>
            Ovaj program vam pruža mogućnost da organizujete boravak članova kluba u Mataruškoj Banji u Sportskom 
            centru „Okanik“. U ovom objetu su do sada realizovane brojne aktivnosti sportskih kampova, sportskih priprema 
            i sportskih takmičenja, turniri, fetivali KUD-ova iz zemlje i inostranstva, velike sportske manifestacije i 
            sl..Objekat ima izvanredne uslove, terene i sale za realizaciju brojnih sadržaja (fudbal, odbojka, košarka, 
            rukomet, borilački sportovi itd…) za sve uzraste, a fantastičana lokacija pruža mogućnost i za uživanje u 
            turističkom boravku.
            </Text>
            <Image source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-9.jpg'}} style={{height: 150, resizeMode:'cover' }} />
            <Text style={styles.viminacijumTitle}>SC Okanik - Mataruška Banja</Text>
            
            <Text style={{textAlign: 'center', padding: 10}}>
            Mataruška banja je jedna od najlepših i najlekovitijih banja naše zemlje. Prirodne lepote i kulturno – 
            istorijski spomenci čine je fantastičnom lokacijom za odmor i turističke obilaske. Sportski centar “Okanik” 
            poseduje oko 180 ležaja smeštajnih kapaciteta u više objekata, resotran kapaciteta 500 osoba,
            kafe bar-poslastičarnicu. Sobe su dvokrevetne, trokrevetne i četvorokrevetne sa kupatilom. Objekat 
            ima izuzetne sportske terene na otvorenom, (košarka, mali fudbal, odbojka, rukomet), travnati fudbalski 
            teren, profesionalnu balon salu, bazen na otvorenom i salu za različite aktivnosti (diskoteke, žurke, učionice..)
            </Text>
            <Image source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-cene-300x66.png'}} style={{height: 40, resizeMode:'contain' }} />
            <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
              <RkModalImg source={images} rkType='small' index={0} />
              <RkModalImg source={images} rkType='small' index={1} />
              <RkModalImg source={images} rkType='small' index={2} />
              <RkModalImg source={images} rkType='small' index={3} />
              <RkModalImg source={images} rkType='small' index={4} />
              <RkModalImg source={images} rkType='small' index={5} />
              <RkModalImg source={images} rkType='small' index={6} />
              <RkModalImg source={images} rkType='small' index={7} />
              <RkModalImg source={images} rkType='small' index={8} />
              <RkModalImg source={images} rkType='small' index={9} />
              <RkModalImg source={images} rkType='small' index={10} />
            </View>
            
          </View>
              
          <View >
            
          </View>
        </ScrollView>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#fff', 
		
},
logo: {
		width: 100,
		height: 100,

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
header:{
	flex: 1,
	flexDirection: 'row',
	backgroundColor:"#000",
},
contain:{
	...Platform.select({
		ios: {
			flex: 4,
		},
		android: {
			flex: 3,
		}
	}),
  flex:4,
  paddingTop: 5

},
headerText: {
	color:"#fff", 
	...Platform.select({
		ios: {
			paddingTop: '30%'
		},
		android: {
			paddingTop: '18%'
		}
	}),
	
	paddingLeft:20,
	fontSize: 24,
	fontWeight:"400",
},
headerIcon: {
	color: 'white', 
	...Platform.select({
		ios:{
			paddingTop: '31%',
		},
		android: {
			paddingTop: '20%',
		}
	}),
	
	paddingLeft: 10,
},
headerImageBackground: {
	width: '100%', 
	height: '100%', 
	flex:1, 
	flexDirection:'row',
	opacity: .7
},
row1: {
  flex:1,
  width: '100%', 
  height: '60%',
  paddingBottom: 5 
},
imageText: {
  color: '#fff', 
  fontSize:24, 
  fontWeight:'500', 
  ...Platform.select({
    ios: {
      paddingTop:120, 
      paddingLeft:20
    },
    android: {
      paddingTop:120, 
      paddingLeft:20
    }
  }),
  
},
imageBackground: {
  flex: 1, 
  height: null, 
  width: null,
  backgroundColor:'black', 
  paddingBottom: 10,
  
},
viminacijumTitle: {
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 'bold',
  padding: 10
},
viminacijumSubTitle: {
  textAlign: 'center',
  fontSize: 14,
}
});

RkTheme.setType('RkModalImg','small',{
  img:{
    width: 110,
    height: 110,
    
  }
});
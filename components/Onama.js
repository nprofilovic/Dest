import React from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground, StatusBar, Image, ScrollView  } from 'react-native';


export default class Onama extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      	<View style={styles.header}>
					<ImageBackground source={require('../img/onama.jpg')} style={styles.headerImageBackground} >
						<Text style={styles.headerText}>O Nama</Text>
					</ImageBackground>
				</View>
        
          <View style={styles.contain}>
            <ScrollView>
              <Text style={styles.textOnama}>
              Preduzeće za turizam, trgovinu i usluge “DEST” d.o.o. je počelo sa radom 1993. godine, a 1996. godine probija se na turističko tržište Srbije, organizacijom dečjeg i omladinskog turizma, najviše ekskurzija i rekreativnih nastava,  u regionu Novog Pazara. Preduzeće je 2011. godine dobilo licencu OTP licencu br. 56/2011.
              {'\n'}{'\n'}
              U želji da proširi svoj uticaj na turističkoj mapi Srbijie, preduzeće se proširilo i na teritoriju Vojvodine, a 2016. godine je otvorena i agencija u Beogradu. Do 2015. godine, “DEST” je svoju ponudu bazirao na dečjem i omladinskom turizmu u, a sada su u ponudi i aranžmani za drugačije ciljne grupe, sindikate i individualce, na destinacijama u Srbiji, Crnoj Gori, Grčkoj, preko evropskih metropola, pa sve do dalekih destinacija.
              {'\n'}{'\n'}
              Menadžment “DEST”-a čine mladi, energični ljudi, čiji je cilj da prepoznaju potrebe i želje svojih klijenata, kao i da im svojim savetima i iskustvom učine odmor najboljim za uloženi novac. Trudimo se da svakom klijentu priđemo maksimalno profesionalno, a opet  i ljudski i sa razumevanjem njegovih potreba. Zbog toga, budite uvereni da će Vaš odmor sa nama biti pravo zadovojlstvo, a mi garantujemo da ćemo opravdati Vaše poverenje.
              {'\n'}{'\n'}
              Vaš “DEST”
              </Text>
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
    
  },
  headerText: {
    color:"#000", 
    ...Platform.select({
      ios: {
        paddingTop: '27%'
      },
      android: {
        paddingTop: '18%'
      }
    }),
    
    paddingLeft:20,
    fontSize: 30,
    fontWeight:"300",
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
    opacity: .8
  },
  textOnama:{
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom: 30,
    
  }

});
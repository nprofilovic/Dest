import React from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground, StatusBar, Image, ScrollView,  } from 'react-native';
import { PricingCard } from 'react-native-elements'
import { Icon } from 'native-base';
import {RkModalImg, RkTheme} from 'react-native-ui-kitten';
export default class Viminacijum extends React.Component {


render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    let images = [
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura_poligon-legionara-1.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura_poligon-legionara-2.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura_poligon-legionara-3.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura_poligon-legionara-4.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura_Strelicarstvo.jpg'},
      {uri: 'http://dest.rs/wp-content/uploads/2018/05/viminacijum-02.jpg'}

    ]
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/viminacijum-04.jpg'}} style={styles.headerImageBackground} >
          <Icon name='arrow-back' onPress={() => navigate('DecijiTurizam', { name: 'DecijiTurizam' })} style={styles.headerIcon} />
          <Text style={styles.headerText}>Viminacijum</Text>
        </ImageBackground>
      </View>
      <View style={styles.contain}>
        <ScrollView>
          <View style={styles.row1}>
            <Image source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura.jpg'}} style={{height: 200, resizeMode:'cover' }} />
            <Text style={styles.viminacijumTitle}>Viminacijum Avantura</Text>
            <Text style={styles.viminacijumSubTitle}>Letnji zabavno - edukativni kamp</Text>
            <Text style={{textAlign: 'center', padding: 10}}>
              Viminacium Avantura je letnji zabavno-edukativni kamp, koji na kreativan i zabavan način oživljavljava prostor 
              grada Vrba, nekadašnjeg antičkog grada Viminaciuma, koji se nalazi na 95km od Beograda u neposrednoj blizini 
              grada Kostolca. Kroz mnoštvo atraktivnih sadržaja, deca i mladi od 10 do 17 godina, moći će da steknu nova znanja 
              i veštine, da razvijaju kreativnost, snalažljivost i timski duh, a da pri tom zadrže svoju individualnost, budu srećni 
              i zadovoljni. Ideja je da se deca i mladi, kroz interesantne i interaktivne edukativne radionice, 
              upoznaju sa naukama kao što su arheologija, antropologija, paleontologija, sa starim zanatima i mnogim drugim 
              izviđačkim veštinama i tehnikama samoodbrane. Replika legionarskog logora, specijalni legionarski poligon sa 
              preprekama i jedinstveni avantura park pružaju mogućnost neograničene zabave i nezaboravnog iskustva.
            </Text>
            <Image source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/viminacijum-0.jpg'}} style={{height: 150, resizeMode:'cover' }} />
            <View>
              <PricingCard
                color='#f27a24'
                title='CENA Na 6 Rata'
                price='299 €'
                info={[
                  '7 dana/6 punih pansiona (doručak, ručak, večera)', 
                  'Viminacium avantura park; smeštaj u posebnim jedinicama – barakama', 
                  'Prevoz na relaciji Beograd – Viminacium – Beograd',
                  'Učešće u aktivnostima “Viminacium avantura” letnjeg zabavno edukativnog kampa (legionarski poligon, avantura park, legionarske veštine, antičke igre, arheologija, bio – antropologija, mozaik, grnčarija, dramska radionica, komunikacijske veštine…)',
                  'Lica za brigu o deci, rekreatori i animatori',
                  'Lekarski nadzor 24h dnevno; osiguranje učesnika kampa',
                  'Boravišna taksa'
                ]}
                button={{ title: 'Kontakt'}}
              />
            </View>
            <Image source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/viminacijum.png'}} style={{height: 40, resizeMode:'contain' }} />
            <Text style={styles.viminacijumTitle}>POLIGON LEGIONARA</Text>
            <Text style={{textAlign: 'center', padding: 10}}>
              U izgradnji Poligona učestvovale su brojne iskusne glave, od inženjera i građevinaca, sportskih stručnjaka i vojnih specijalaca, a sve u cilju da zavrtimo vremeplov i svoje učesnike smestimo u autentično doba rimskih vojnika. Učesnici prepreke prelaze preskakanjem, penjanjem, puzanjem, provlačenjem – samostalno i/ili u timu, prolaskom kroz blato, vodu, zemlju, slamu. Poligon legionara izazov je za najspretnije i najčvršće.

              Pitate se kako je to biti legionar koji se podiže iz blata? Ne verujte nam na reč, nego se i sami okušajte na ovom poligonu, da vidite od čega ste sazdani!
              Tim na poligonu
              U zavisnosti da li ste legionar, centurion ili imperator, trke su na tri, pet i deset kilometara sa brojnim preprekama. Na ovom poligonu nemamo podijume za pobednike, niti štoperice protiv kojih ćete trčati. Poligon Legionara nije priča o tome kako ste brzo prošli kroz cilj, ovo je priča o spoznaji samog sebe i značaju timskog rada, bez kog je nemoguće savladati sve prepreke.

              Tim je snažan koliko je jaka njegova najslabija karika. Bilo da je u pitanju drugarski pružena ruka koja će pomoći u pravom času ili će još jedan glas biti ohrabrujuća podrška ka postizanju cilja, timski duh pratiće vas na putu ka legionarskoj pobedi.
            </Text>
            <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
              <RkModalImg source={images} rkType='small' index={0} />
              <RkModalImg source={images} rkType='small' index={1} />
              <RkModalImg source={images} rkType='small' index={2} />
              <RkModalImg source={images} rkType='small' index={3} />
              <RkModalImg source={images} rkType='small' index={4} />
              <RkModalImg source={images} rkType='small' index={5} />
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
import React from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground, StatusBar } from 'react-native';
import { Button } from 'native-base';

export default class DecijiTurizam extends React.Component {


render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground source={require('../img/viminacijum.jpg')} style={styles.headerImageBackground} >
          <Text style={styles.headerText}>Dečiji i omladinski turizam</Text>
        </ImageBackground>
      </View>
      <View style={styles.contain}>
        <View style={styles.row1}>
          <ImageBackground source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/Viminacium-Avantura.jpg'}} style={styles.imageBackground} >
            <Text style={styles.imageText}>
              Viminacijum
            </Text>
            <Button onPress={() => navigate('Viminacijum', { name: 'Viminacijum' })} style={{padding: 10, marginLeft: 20, marginTop: 5, backgroundColor: '#f27a24'}}><Text style={{color:'white'}}>Pogledaj</Text></Button>
          </ImageBackground>
        </View>
        <View style={styles.row1}>
          <ImageBackground source={{uri: 'http://dest.rs/wp-content/uploads/2018/05/okanik-6.jpg'}} style={styles.imageBackground} >
            <Text style={styles.imageText}>
              Sportske pripreme i festivali
            </Text>
            <Button onPress={() => navigate('SportskePripreme', { name: 'SportskePripreme' })} style={{padding: 10, marginLeft: 20, marginTop: 5,backgroundColor: '#f27a24'}}><Text style={{color:'white'}}>Pogledaj</Text></Button>
          </ImageBackground>
        </View>
        
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
});
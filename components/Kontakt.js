import React from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground, StatusBar, Image  } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';

export default class Kontakt extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
      	<View style={styles.header}>
					<ImageBackground source={require('../img/kontakt.png')} style={styles.headerImageBackground} >
						<Text style={styles.headerText}>Kontakt</Text>
					</ImageBackground>
				</View>
				<View style={styles.contain}>
				<Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={{textAlign: 'center', padding: 10}}>
								DEST Travel agency ima poslovnice u Beogradu i Novom Pazaru, kao i predstavnišvo za teritoriju Vojvodine{'\n'}{'\n'}
Poslovnice se nalaze na sledećim adresama:
                </Text>
              </Body>
            </CardItem>
        	</Card>
        
          <Card>
            <CardItem header>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Beograd</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.addressText}>
									<Image source={require('../img/icon/022-sign.png')} style={styles.icon} />
										Kneza Danila 12
								</Text>
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										011/40-44-911, 40-44-912
								</Text>	
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										011/40-44-913
								</Text>	
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										064/81-51-782
								</Text>	
								<Text style={{color:'#f27a24', paddingLeft: 10}}>
									<Image source={require('../img/icon/012-postcard.png')} style={styles.icon} />	
										office@dest.rs
								</Text>	
              </Body>
            </CardItem>
        	</Card>
        
				
          <Card>
            <CardItem header>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Novi Pazar</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.addressText}>
									<Image source={require('../img/icon/022-sign.png')} style={styles.icon} />
										Relje Krilatice R94
								</Text>
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										020/31-55-25
								</Text>	
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										065/41-00-671
								</Text>	
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										064/81-51-788
								</Text>	
								<Text style={{color:'#f27a24', paddingLeft: 20}}>
									<Image source={require('../img/icon/012-postcard.png')} style={styles.icon} />	
										office@dest.rs
								</Text>	
              </Body>
            </CardItem>
        	</Card>

					<Card>
            <CardItem header>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Vojvodina</Text>
            </CardItem>
            <CardItem>
              <Body>
                
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										064/81-51-790
								</Text>	
								<Text style={styles.addressText}>
									<Image source={require('../img/icon/016-navigation.png')} style={styles.icon} />	
										065/65-93-628
								</Text>	
								
								<Text style={{color:'#f27a24', paddingLeft: 10}}>
									<Image source={require('../img/icon/012-postcard.png')} style={styles.icon} />	
										ljiljana.micic7@gmail.com
								</Text>	
              </Body>
            </CardItem>
        	</Card>
        </Content>
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
icon:{
	...Platform.select({
		ios: {
			height: 24, 
			width: 24,
			paddingLeft:10
		},
		android: {
			height: 60, 
			width: 60,
			paddingLeft:10
		}
	})
},
addressText: {
	paddingLeft: 20
}
});
import React from 'react';
import { View, TouchableHighlight, Image, Platform, StyleSheet, Dimensions, ScrollView, StatusBar} from "react-native";
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right, Button, Title } from 'native-base';
import { Header } from 'react-native-elements';
import HTMLView from 'react-native-htmlview'; 
import HTML from 'react-native-render-html';
const win = Dimensions.get('window');
export default class ProductItemCard extends React.Component {
    
    backButton = () => {
        this.props.navigation.navigate('Home');
      }

    constructor(){
        super();
        this.state= {
          modalVisible: false,
          image: '',
        }
      }
      
    render() {
        const IMAGES_MAX_WIDTH = Dimensions.get('window').width - 50;

        const DEFAULT_PROPS = {
          
          imagesMaxWidth: IMAGES_MAX_WIDTH,
          onLinkPress: (evt, href) => { Linking.openURL(href); },
          debug: true
      };
        const { goBack } = this.props.navigation;

        const { ...params } = this.props.navigation.state;
        const image = this.props.navigation.state.params.image[0].src;
        const imgName = this.props.navigation.state.params.imageName;
        const name = this.props.navigation.state.params.name;
        const price = this.props.navigation.state.params.price;
        const id = this.props.navigation.state.params.id;
        const description = this.props.navigation.state.params.description;
        
        let images = this.props.navigation.state.params.image.map((image) =>{
          return image.src
          
        }

      )
        const cards = [
          {
            text: name,
            name: name,
            price: price,
            image: images[0]
          },
          {
            text: name,
            name: name,
            price: price,
            image: images[1]
          },
          {
            text: name,
            name: name,
            price: price,
            image: images[2]
          },
          
          
        ]  
        console.log('====================================');
        console.log(params);
        console.log('====================================');
            return (
              
              <ScrollView style={{paddingBottom: 250}}>
                <StatusBar barStyle="dark-content" />
                <Container style={styles.container}>
                  
                    <Header  outerContainerStyles={{ backgroundColor: '#fff',paddingTop: 30 }}>
                      <Left>
                        <Button transparent>
                          <Icon name='arrow-back' onPress={() => goBack()} style={{color:'black'}} />
                        </Button>
                      </Left>
                      <Body>
                        <Title style={{color:'black'}}>{name}</Title>
                      </Body>
                      <Right>
                        <Button transparent>
                          <Text></Text>
                        </Button>
                      </Right>
                    </Header>
                    
                    <Content>
                      <Card style={{flex: 0}}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={require('../img/dest-logo.jpg')} />
                            <Body>
                              <Text>{name}</Text>
                              <Text note>{price} din.</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Image source={{uri: image}} style={{height: 200, width: '100%', flex: 1, resizeMode: 'cover'}}/>
                            <HTML html={description} {...DEFAULT_PROPS} style={{marginTop: 20,}}/>
                          </Body>
                        </CardItem>
                        <CardItem>
                          <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                              
                            </Button>
                          </Left>
                        </CardItem>
                        </Card>
                      </Content>
                  
                    
                  </Container>
                </ScrollView>
            );
        }
    
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        
      },
      modalContainer: {
        flex: 1,
        
        backgroundColor: 'white',
      },
      innerContainer: {
        alignItems: 'center',
      },
      image: {
        flex: 1,
        
        width: win.width/2,
        height: win.height/2,
      },
      header: {
        ...Platform.select({
          ios: {
            backgroundColor: '#000'
          },
          android: {
            backgroundColor: 'red'
          }
        })
      },
      img:{
        width: '100%'
      }
    });
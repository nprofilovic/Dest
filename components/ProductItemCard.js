import React from 'react';
import { View, TouchableHighlight, Image, Modal, StyleSheet, Dimensions, ScrollView} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right, Button, Title } from 'native-base';
import HTMLView from 'react-native-htmlview'; 
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
                
                <Container style={styles.container}>
                    <Header styles={{ backgroundColor: '#fff',}}>
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
                              <Text note>{price}</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Image source={{uri: image}} style={{height: 200, width: '100%', flex: 1, resizeMode: 'cover'}}/>
                            <HTMLView value={description} style={{marginTop: 20,}}/>
                          </Body>
                        </CardItem>
                        <CardItem>
                          <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="logo-github" />
                              <Text>1,926 stars</Text>
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
      }
    });
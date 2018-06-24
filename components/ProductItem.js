import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image,  Dimensions, Text, ScrollView } from 'react-native';
import {
    RkText,
    RkCard, RkStyleSheet,Avatar
  } from 'react-native-ui-kitten';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
  import { Right, Header, Content, List, ListItem, Thumbnail,  Body, Button } from 'native-base';
  import HTMLView from 'react-native-htmlview'; 


const { height, width } = Dimensions.get('window');
export default class ProductItem extends Component {
    
 
    render() {
        const htmlContent =  this.props.product.short_description;
        const price = this.props.product.price_html;
        let product = this.props.product;
        console.log('====================================');
        console.log(product);
        console.log('====================================');
        
        return (
       
          
          <Content>
          <List>
          
            <ListItem onPress={this.props.onOpenProduct}>
              <Thumbnail square source={{ uri: this.props.product.images[0].src }} style={{width: 120, height: 100}}  />
              <Body>
                <Text style={{fontWeight: '600', color: 'red', marginLeft:20,paddingTop:10}}>{this.props.product.name}</Text>
                <HTMLView value={htmlContent} stylesheet={styles} style={{marginLeft: 20,}} />
            
              </Body>
              <Right>
                <Button style={{padding:5, width:60}} >
                  <HTMLView value={price} stylesheet={cena} />
                </Button>
              </Right>
            </ListItem>
            
          </List>
          </Content>
       
          
        )
        
    }

    
}



const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  p: {
    fontSize: 12,
    
    
  },
  
});
const cena = StyleSheet.create({
  span:{
    fontSize: 11,
    color:'#fff'
  }
})
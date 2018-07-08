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
          <TouchableHighlight onPress={this.props.onOpenProduct}>
            <Card style={{flex:1, flexDirection: 'row'}} >
              
              <View>
                <Image style={{ flex: 1, height: 110, width: 150, }} source={{ uri: this.props.product.images[0].src }}   />
              </View>
              <Right style={{ flex: 1, alignItems: 'flex-start', height: 120, paddingHorizontal: 10 }}>
                <Text style={{fontWeight: '600', color: 'red',paddingTop:10}}>{this.props.product.name}</Text>
                <HTMLView value={price} stylesheet={cena} />
                <HTMLView value={htmlContent} stylesheet={styles} />
                
              </Right>
            
            </Card>
          </TouchableHighlight>
          
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
    fontSize: 12,
    color:'#000',
    
  }
})
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image,  Dimensions, Text, ImageBackground } from 'react-native';
import {
    RkText,
    RkCard, RkStyleSheet,Avatar
} from 'react-native-ui-kitten';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { Right, Header, Content, List, ListItem, Thumbnail,  Body, Button } from 'native-base';
import HTMLView from 'react-native-htmlview'; 



const { height, width } = Dimensions.get('window');
export default class ProductItemGrid extends Component {
    

    render() {
        const htmlContent =  this.props.product.short_description;
        const price = this.props.product.price_html;
        let product = this.props.product;
        console.log('====================================');
        console.log(product);
        console.log('====================================');
        
        return (

            <View style={{ padding:10,borderRadius: 4,  }}>
                <TouchableHighlight onPress={this.props.onOpenProduct} >
                    <View style={{backgroundColor: '#000'}}>
                        <ImageBackground style={styles.image} source={{ uri: this.props.product.images[0].src }}>
                            <Text style={styles.title}>{this.props.product.name}</Text>
                            <Text style={styles.price}>{this.props.product.price} €</Text>
                        </ImageBackground>
                    </View>
                    
                </TouchableHighlight>
            </View>

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
    title:{
        fontWeight: '900', 
        color: 'white',
        paddingTop:'70%',
        fontSize:14,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        
        
        
    },
    price:{
        fontWeight: '900', 
        color: '#f27a24',
        paddingTop:10,
        fontSize: 20,
        textAlign: 'center',
        
    },
    image:{
        flex: 1,
        width: width * 0.4, 
        height: 200,
        opacity: .8
    }

});
const cena = StyleSheet.create({
span:{
    fontSize: 12,
    color:'#fff',
    
}
})
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

class Category extends Component {
    render() {
        
        let product = this.props.product;
        return (
            <TouchableOpacity onPress={this.props.onOpenProduct} >
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: this.props.product.images[0].src }}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, backgroundColor: '#fff'}}>
                    <Text numberOfLines={1}>{this.props.product.name}</Text>
                    <Text style={{color: "#f27a24", fontWeight: 'bold', textAlign: 'center'}}>{this.props.product.price} €</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
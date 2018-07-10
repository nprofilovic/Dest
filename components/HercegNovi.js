import React, {Component} from "react";
import {
	View,
	ListView,
	Animated,
	ImageBackground,
    ActivityIndicator,
	ScrollView,
	Platform,
	StyleSheet,
    StatusBar,
    TouchableOpacity
	
} from "react-native";
import { Font } from "expo";

import ProductItem from "./ProductItemGrid";
import Api from "../WooCommerce/Api";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
var offset = 0;
var offsetHeader = 100;
var beta = 50;

export default class HercegNovi extends Component {
		
	


	constructor(props) {
		super(props);
		this.data = [];
		this.state = {
			page: 1,
			limit: 100,
			status: "publish",
			category: 96,
			data:[],
			text: '',
			isOnline: true,
			isLoading: false,
			refreshing: false,
			finish: false,
			_animatedMenu: new Animated.Value(0),
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => true
			})
		}
	}

	hideMenu() {
		Animated.spring(this.state._animatedMenu, {
			toValue: -120
		}).start();
	}

	showMenu() {
		Animated.spring(this.state._animatedMenu, {
			toValue: 0
		}).start();
	}

	onScroll(event) {
		var currentOffset = event.nativeEvent.contentOffset.y;

		if (currentOffset < offsetHeader) {
			return;
		}

		if (Math.abs(offset - currentOffset) <= beta)
			return;


		if (currentOffset > offset) {
			this.hideMenu();
		} else if (currentOffset < offset) {
			this.showMenu()
		}
		offset = currentOffset;
	}

	componentWillMount() {
		this.startHeaderHeight = 100
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 120 + StatusBar.currentHeight
        }
		this.fetchData();
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
    }
	
	fetchData() {
		var self = this;
		if (this.state.finish || !this.state.isOnline) {
			return;
		}
		self.setState({isLoading: true});

		Api.get('products', {
			per_page: this.state.limit,
			page: this.state.page,
			status: this.state.status,
			category: this.state.category,
			order: 'asc'
			
		})
			.then(function (data) {
				console.log(data);

				self.data = self.data.concat(data);
				self.setState({
					page: self.state.page + 1,
					finish: data.length < self.state.limit,
					categories: self.state.categories,
					isLoading: false,
					dataSource: self.getDataSource(self.data)
				});
			});
			this.setState(state => ({
				data: [...state.data],
				loading: false
			}));
	}


	getDataSource(products) {
		return this.state.dataSource.cloneWithRows(products);
	}

	onEndReached() {
		this.fetchData();
	}
	
	
	onOpenProductCard = (product) => {
		this.props.navigation.navigate('ProductItemCard',{
			name: product.name,
			image: product.images,
			imageName: product.images.name,
			price: product.price,
			id: product.id,
			description: product.description
		});
		
    }
    onOpenHomePage = () => {
        this.props.navigation.navigate('Home');
    }
	renderRow(product) {
		return (
				<ProductItem product={product} onOpenProduct={() => this.onOpenProductCard(product)} />
		);
	}


	handleLoadMore = () => {
		this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
    };

    handleRefresh = () => {
        this.setState(
        {
            page: 1,
            refreshing: true
        },
        () => {
            this.fetchData();
        }
        );
    };
    renderFooter = () => {
        return (
        <View
            style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
            }}
        >
            <ActivityIndicator animating size="small" />
        </View>
        );
    };

	render() {
		if (this.state.isLoading) {
        return (
            <View style={{flex: 1, paddingTop: 320}}>
            <ActivityIndicator />
            </View>
        );
    }
		
		return (
			<View style={styles.container}>
			<StatusBar barStyle="light-content" />
				<View style={styles.header}>
					<ImageBackground source={require('../img/dest-herceg-novi.jpg')} style={styles.headerImageBackground} >
            <Icon name='arrow-back' onPress={this.onOpenHomePage} style={styles.headerIcon}/>
						<Text style={styles.headerText}>Herceg Novi</Text>
					</ImageBackground>
					
				</View>
        
				<View style={styles.contain}>
					<ScrollView
						style={{paddingTop: 5, }}
						onScroll={this.onScroll.bind(this)} scrollEventThrottle={30}
					>
						
						<ListView
						    style={{ flex: 1,  backgroundColor: '#fff', alignContent:'stretch'}}
                            contentContainerStyle={styles.list}	
							onEndReached={this.onEndReached.bind(this)}
							dataSource={this.state.dataSource}
							onRefresh={this.handleRefresh}
							
						
							renderRow={this.renderRow.bind(this)}>
							
						</ListView>
						<Text style={styles.hercegnoviTitle}>Herceg Novi</Text>
						<Text style={{textAlign: 'justify', padding: 10, marginBottom:20}}>
            Kada jednom provedete svoj odmor u Herceg Novom, to će za vas biti grad koji će vam uvek 
            nedostajati, grad u koji ćete želeti da se ponovo vratite.{'\n'}{'\n'} Smešten na ulazu u jedan od 
            najlepših zaliva sveta-Boki Kotorskoj, utonuo u raskošno zelenilo, opasan šestovekovnim
            tvrđavama i zidinama, ovaj grad je prava riznica multikulturnog nasleđa nastalog 
            susretanjem raznih naroda i civilizacija. {'\n'}{'\n'}Herceg Novi je grad sa najvišom prosečnom 
            temperaturom na Jadranskom moru i sa preko dvesta sunčanih dana tokom godine što ga 
            čini jednim od najprijatnijih mesta za odmor na Crnogorskom primorju. {'\n'}{'\n'}Svako ovde može naći 
            svoje mesto za odmor i zabavu, ako ovom dodamo i dobru saobraćajnu povezanost, onda je Herceg Novi, 
            pravi izbor za Vas…
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
	list:{
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		justifyContent: 'center',
	},
	hercegnoviTitle: {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		padding: 10
	}


});
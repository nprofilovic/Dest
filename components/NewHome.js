import React, {Component} from "react";
import {
	TextInput,
	Text,
	View,
	Image,
	ImageBackground,
	StatusBarIOS,
	ListView,
	FlatList,
  Animated,
  ActivityIndicator,
	TouchableOpacity,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	SafeAreaView,
	StatusBar
	
} from "react-native";
import { Font } from "expo";
import ProductItem from "./ProductItem";
import Category from './CategoryHome';
import Api from "../WooCommerce/Api";
import { Container, Header, Content, List, ListItem, Thumbnail,  Body } from 'native-base';
var offset = 0;
var offsetHeader = 100;
var beta = 50;
const { height, width } = Dimensions.get('window')

export default class Leto extends Component {
		
	


	constructor(props) {
		super(props);
		this.data = [];
		this.state = {
			page: 1,
			limit: 100,
			status: "publish",
			category: 101,
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
	renderRow(product) {
		return (
				<Category product={product} onOpenProduct={() => this.onOpenProductCard(product)} />
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
		const { navigate } = this.props.navigation;
		if (this.state.isLoading) {
        return (
            <View style={{flex: 1, paddingTop: 220}}>
            <ActivityIndicator />
            </View>
        );
  }
		
		return (
			<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />
				<View style={styles.header}>
            <Image source={require('../img/dest-logo.jpg')} style={styles.logo}/>
        </View>
				<View>
					<ScrollView
						style={{ marginBottom: 100, marginTop:10}}
						onScroll={this.onScroll.bind(this)} scrollEventThrottle={30}
					>
						<View style={{flex: 1, backgroundColor: '#f27a24', paddingTop: 10, paddingBottom: 10, flexDirection: 'column'}}>
              <View style={{ flex:1,  width: width, height: 50,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#f27a24' }}> 
                  <Text style={styles.rowSrbija}>AKCIJA LAST MINUTE CRNA GORA</Text>
              </View>
						<View style={{height: 130, marginTop: 5}}>
							<ScrollView 
								
								showsHorizontalScrollIndicator={false}>
								<ListView
									horizontal={true}
									style={{flex:1}}
									onEndReached={this.onEndReached.bind(this)}
									dataSource={this.state.dataSource}
									onRefresh={this.handleRefresh}
									renderRow={this.renderRow.bind(this)}>
									
								</ListView>
							</ScrollView>
						</View>
					
					</View>

					<TouchableOpacity onPress={() => navigate('Budva', { name: 'Budva' })}>
            <View style={styles.row1}>
              <ImageBackground source={require('../img/dest-budva.jpg')} style={styles.imageBackground} >
                <Text style={styles.budvaText}>
                  Budva
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Rafailovici', { name: 'Rafailovici' })}>
            <View style={styles.row1}> 
              <ImageBackground source={require('../img/dest-rafailovici.jpg')} style={styles.imageBackground} >
                  <Text style={styles.budvaText}>
                    Rafailovići
                  </Text>
              </ImageBackground>
            </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Canj', { name: 'Canj' })}>
                        <View style={styles.row1}> 
                            <ImageBackground source={require('../img/dest-canj.jpg')} style={styles.imageBackground} >
                                <Text style={styles.budvaText}>
                                    Čanj
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('HercegNovi', { name: 'HercegNovi' })}>
                        <View style={styles.row1}> 
                            <ImageBackground source={require('../img/dest-herceg-novi.jpg')} style={styles.imageBackground} >
                                <Text style={styles.budvaText}>
                                    Herceg Novi
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex:1,  width: width, height: 50,marginBottom:5,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#f27a24' }}> 
                        <Text style={styles.rowSrbija}>SRBIJA</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('VrnjackaBanja', { name: 'VrnjackaBanja' })}>
                        <View style={styles.row1}> 
                            <ImageBackground source={require('../img/dest-vrnjacka-banja.jpg')} style={styles.imageBackground} >
                                <Text style={styles.budvaText}>
                                Vrnjačka banja
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('SokoBanja', { name: 'SokoBanja' })}>
                        <View style={styles.row1}> 
                            <ImageBackground source={require('../img/dest-soko-banja.jpg')} style={styles.imageBackground} >
                                <Text style={styles.budvaText}>
                                Soko banja
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('MataruskaBanja', { name: 'MataruskaBanja' })}>
                        <View style={styles.row1}> 
                            <ImageBackground source={require('../img/dest-mataruska-banja.jpg')} style={styles.imageBackground} >
                                <Text style={styles.budvaText}>
                                Mataruška banja
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
				</ScrollView>

				</View>
				
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    logo: {
        width: 100,
        height: 100,
        
    },
    header: {
		
		...Platform.select({
			ios: {
				height: 200,
				paddingTop: 140,
			},
			android: {
				height: 220,
				paddingTop: 100,
			}
		}), 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dddddd',
		paddingTop: 150,
    alignItems: 'center',
    justifyContent:'center'
    
    },
    row1: {
        flex:1,
        width: '100%', 
        height: '40%',
        paddingBottom: 5 
    },
    row2: {
        flex:1, 
        flexDirection: 'row', 
        width: '100%', 
        height: '50%', 
        flexWrap:'wrap',   
        justifyContent: 'space-around', 
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
  imageBackground: {
    flex: 1, 
    height: null, 
    width: null,
    backgroundColor:'rgba(0,0,0,.9)', 
    paddingBottom: 10,
    
  },
  budvaText: {
    color: '#fff', 
    fontSize:24, 
    fontWeight:'500', 
    paddingTop:120, 
    paddingLeft:20
  },
  rowSrbija: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    
  }
  

});
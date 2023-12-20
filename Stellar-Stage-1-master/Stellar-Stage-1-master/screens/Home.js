import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView,TouchableOpacity, Platform,StatusBar, ImageBackground} from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style ={Styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground
            source={require('../assets/star.gif')}
            style={styles.background}>
            <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar</Text>
            <Text style={styles.titleText}>App</Text>
            </View>
            
            <TouchableOpacity
             style = {styles.routeCard}>
                onpress={()=> this.props.navigation.navigate('SpaceCraft')}
                <Text style={styles.c=routeText}>Spacecrafts</Text>
                <Image
                  source={require('../assets/space_craft.png')}
                    style={styles.routeImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Star Map</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Daily Pictures</Text>
                </TouchableOpacity>
                </ImageBackground>

                const styles = StyleSheet.create({
                    container: {
                        flex: 1,
                    },
                    doridSafeArea:{
                        marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
                    },
                    routeCard : {
                        flex: 0.12,
                        justifyContent: "center",
                        alignItems:"center",
                        margin: 10,
                        marginLeft: 30,
                        marginRight: 30,
                        borderRadius: 100,
                        backgroundColor: "white",
                    },

                    titleBar:{
                        flex: 0.5,
                        justifyContent: "center",
                        alignItems:"center",
                    },
                    titleText:{
                        fontSize: 40,
                        fontWeight: "bold",
                        color:"white",
                    },
                    background:{
                        flex:1,
                        resizedMode:'cover',
                    },
                    routeImage:{
                        position:'absolute',
                        top:-20,
                        right:-15,
                        height:80,
                        width:80,
                        resizedMode:'contain',
                    }
                    routeText:{
                        fontSize:25;
                        fontWeight:"bold",
                        color:'#D11583',
                        justifyContent: "center",
                        alignItems:"center",
                    }
                })
            </View>

        )
    }
}

        
    

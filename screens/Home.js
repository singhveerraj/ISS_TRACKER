import React from "react";
import { 
    StyleSheet, Text, View, SafeAreaView, 
    TouchableOpacity, StatusBar, Platform, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
    return(
 <View style={styles.container}>
 <SafeAreaView style={styles.droidArea} />
 <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
 <View style={styles.titlebar}>
 <Text style={styles.titleText}>ISS TRACKER APP</Text>
 </View>
 <TouchableOpacity style = {styles.routeCard} onPress = {() =>  
    this.props.navigation.navigate("IssLocation") }>
    <Text style = {styles.routeText}>ISS LOCATION</Text>
    <Text style = {styles.knowMore}>{"Know More --->"}</Text>
    <Text style = {styles.bgDigit}>1</Text>
    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage} />
    </TouchableOpacity>

    <TouchableOpacity style = {styles.routeCard} onPress = {() =>  
    this.props.navigation.navigate("Meteor") }>
    <Text style = {styles.routeText}>METEORS</Text>
    <Text style = {styles.knowMore}>{"Know More --->"}</Text>
    <Text style = {styles.bgDigit}>2</Text>
    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage} />
    </TouchableOpacity>
 </ImageBackground>
        </View>
        )
    
    }
}

const styles = StyleSheet.create({
container:{
flex:1,
},
droidArea:{
    marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white'
},
titlebar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
},
titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
},
routeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30
},
knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80
}
})
    
    

import React ,{Component}from 'react';
import { View, Text, Dimensions, TouchableOpacity,StyleSheet,Image } from 'react-native';



export default class LocationPin extends Component{
    constructor(props){  
        super(props);  
       
       
      }
    
    render(){
      
        return(
           <View >
               <Image source={require("../assets/images/locationpin.png")} style={{height:30,width:30}} resizeMode={"contain"}/>
<Text style={{color:'white'}}>{this.props.title}</Text>
           </View>
        )
    }
}
const styles=StyleSheet.create({
    div:{
        //justifyContent:'center',
        flex:0.25,
        //alignItems:'center'
    }
    

})
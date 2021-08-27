import React ,{Component}from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import TabComponent from '../components/TabComponent';
import MapView, { Marker } from 'react-native-maps';
const data=require("../data/fireData.json")

//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default class Home extends Component{
    render(){
      
        return(
            
            <View style={{flex:1}}>
                {/* <TouchableOpacity
          onPress={()=>this.props.navigation.navigate("Fire",{data:data})}
          style={{position:'absolute',top:'20%',backgroundColor:'red'}}>
             
              <View style={{height:40,width:40,backgroundColor:'gray',borderRadius:10}}>
                  <Image source={require("../assets/images/fire.png")} style={{height:20,width:20}}/>

              </View>
              
     
     </TouchableOpacity> */}
               
                 <MapView
                 zoomEnabled={true}
                 style={{height:'100%',width:'100%'}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    }}

  >
      <View style={{height:60,width:Dimensions.get("screen").width,flexDirection:'row'}}>
          <View style={{flex:0.8}}/>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate("Fire",{data:data})}
          style={{flex:0.2,alignItems:'center',justifyContent:'center'}}>
             
              {/* <View style={{height:40,width:40,backgroundColor:'gray',borderRadius:10,justifyContent:'center',alignItems:'center'}}> */}
                  <Image source={require("../assets/images/fire.png")} style={{height:25,width:25,tintColor:'orangered'}}/>

              {/* </View> */}
              
     
     </TouchableOpacity>
     </View>
       
      <Marker  coordinate={{ latitude : 37.78825  , longitude : -122.4324 }} />
  </MapView>
 
                <View style={{position:'absolute',bottom:0}}>
                <TabComponent navigation={this.props.navigation} from={"home"}/>


                </View>
               
            </View>
        )
    }
}
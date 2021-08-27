import React ,{Component}from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import TabComponent from '../components/TabComponent';
import MapView, { Marker } from 'react-native-maps';
const data=require("../data/fireData.json")

//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default class Property extends Component{
    render(){
      return(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Property</Text>

            <View style={{position:'absolute',bottom:0}}>
                <TabComponent navigation={this.props.navigation} from={"property"}/>


                </View>
              </View>


      )
    }
}
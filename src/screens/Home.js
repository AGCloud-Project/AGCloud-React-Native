import React ,{Component}from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import TabComponent from '../components/TabComponent';
import MapView, { Callout, Marker,Overlay } from 'react-native-maps';
const data=require("../data/fireData.json")
import LocationPin  from '../components/PlaceComponent';
import AsyncStorage from '@react-native-community/async-storage';
const locData=require("../data/locationData.json")


//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default class Home extends Component{
    constructor(props){
        super(props);
            this.state={
                latitude:38.1987,
                longitude:-121.3545,
                addedPlaces:[],
                initialRegion:{
                    latitude:  37.89,
                    longitude: -123.33,
                    latitudeDelta: 20,
                    longitudeDelta: 20,
                },
                region:{
                    latitude:  37.89,
                    longitude: -123.33,
                    latitudeDelta: 20,
                    longitudeDelta: 20,

                }
            }
        }
        async componentDidMount(){
            var initial={}
            var addPlaces=  await  AsyncStorage.getItem("location")
            console.log("Addedplacez-->",addPlaces)
            if(JSON.parse(addPlaces).length>0){
                const parsedData=JSON.parse(addPlaces)

               
                
                var sort=parsedData.sort(function(a,b){
                   
                    return new Date(b.created_at) - new Date(a.created_at);
                  });
                console.log("created-->",sort)
                 initial={
        
              latitude:  sort[0].lat,
              longitude: sort[0].lng,
              latitudeDelta: 40,
              longitudeDelta:40,
                }
                this.setState({initialRegion:initial})
                this.setState({addedPlaces:sort})
                this.setState({region:initial})
            }
               
            
            
    
           
            
         
         
         }
        
        // }
    render(){
        console.log("initials->",this.state.initialRegion)
 

        
        
        
        
      
        return(
            
            <View style={{flex:1}}>
                {/* <TouchableOpacity
          onPress={()=>this.props.navigation.navigate("Fire",{data:data})}
          style={{position:'absolute',top:'20%',backgroundColor:'red'}}>
             
             
                  <Image source={require("../assets/images/fire.png")} style={{height:20,width:20}}/>

             
              
     
     </TouchableOpacity> */}
               
                 <MapView
                 
                 zoomEnabled={true}
                 style={{height:'100%',width:'100%'}}
                 
    initialRegion={this.state.initialRegion}
    region={this.state.region}
    mapType={"satellite"}
    //showsUserLocation
    //showsBuildings
    ref={(ref) => { this.mapRef = ref }}
    //onLayout={()=>this.mapRef.fitToCoordinates(sort,{ edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: false })}

  >
      <View style={{height:120,justifyContent:'center',paddingRight:10}}>
          <View style={{alignItems:'flex-end',marginTop:'3%'}}>
            {/* <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Fire",{data:data})}
            
            style={{backgroundColor:'black',alignItems:'flex-end',borderRadius:8,opacity:0.7,padding:7}}>
                <Image source={require("../assets/images/fire.png")} style={{height:30,width:30,backgroundColor:'yellow'}} resizeMode={"contain"}/>
            </TouchableOpacity> */}
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("AddPlace")
        }
            
            style={{alignItems:'flex-end',marginTop:10,opacity:0.7,padding:7}}>
                <Image source={require("../assets/images/plus.png")} style={{height:30,width:30,alignSelf:'flex-end',tintColor:'white'}} resizeMode={"contain"}/>
            </TouchableOpacity>

          </View>

      </View>

     {this.state.addedPlaces.length>0 ? this.state.addedPlaces.map(ele=>{
         return(
            <Marker
            //draggable

            coordinate={{ latitude : ele.lat  , longitude : ele.lng }}>
                  <LocationPin title={ele.title}
                 

                  
                   />
                   <Callout>
                    <Text>{ele.desc}</Text>
                   </Callout>
            
            </Marker>

         )
     }):<Marker coordinate={{latitude : 37.85  , longitude : -121.89}}></Marker>}
     
     
       
      
  </MapView>
 
                <View style={{position:'absolute',bottom:0}}>
                <TabComponent navigation={this.props.navigation} from={"home"}/>


                </View>
               
            </View>
        )
    


}
}
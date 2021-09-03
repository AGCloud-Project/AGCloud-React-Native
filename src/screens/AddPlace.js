import React ,{Component}from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Alert, Button, TextInput,StyleSheet } from 'react-native';
import TabComponent from '../components/TabComponent';
import MapView, { Callout, Marker,Polygon } from 'react-native-maps';
import LocationPin from '../components/PlaceComponent';
const data=require("../data/fireData.json")
import Modal from "react-native-modal"
import AsyncStorage from '@react-native-community/async-storage'


//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default class AddPlace extends Component{
    constructor(props){
        super(props);
            this.state={
                latitude:38.1987,
                longitude:-121.3545,
                latitudeDelta:10,
                longitudeDelta:10,
                btnPress:false,
                asyncData:[],
                loc:"",
                description:'',
                cordinates:[{
                    latitude:37.78925,
                    longitude:-122.4330
                },
                    {
                        latitude:37.78825,
                        longitude:-122.4324,
                    },
                    {
                        latitude:37.98825,
                        longitude:-123.4324,
                    },
                    {
                        latitude:39.98825,
                        longitude:-122.4324,
                    }
                
                ]
            
        }
    }
   async componentDidMount(){
        var addPlaces=  await  AsyncStorage.getItem("location")
        if(addPlaces.length>0){
    
           this.setState({asyncData:JSON.parse(addPlaces)})
        }
        
        
        }
    
      _saveLoc= ()=>{
         var place=
             {
                //id:1,
                title:this.state.loc,
                lat:this.state.latitude,
                lng:this.state.longitude,
                userId:500,
                created_at:new Date(),
                desc:this.state.description
                
             }
             console.log("place-->",place)
         
      
         var final= this.state.asyncData;
         final.push(place)
         

       
        console.log("push=-->",final)

        AsyncStorage.setItem("location",JSON.stringify(final)).then(res=>{
            console.log("Res success",res)
            this.props.navigation.pop()
        }).catch(Err=>{
            console.log("Err",Err)
        })
     }
    render(){
        //console.log("initials-->",this.state.initialRegion)
       
      
      
        return(
            
            <View style={{height:'95%',width:'100%'}}>
               
                 <MapView
               
                //  onMarkerDragEnd={(e)=>{
                //     // const { latLng } = coord;
                //     // const lat = latLng.lat();
                //     // const lng = latLng.lng();
                //   const coord=  e.nativeEvent.coordinate;
                //   console.log("coord-->")
                //     this.setState({latitude:coord.latitude});
                //     this.setState({longitude:coord.longitude})
                //  }}
                 zoomEnabled={true}
                 
                 mapType="satellite"
                 
                 style={{height:'90%',width:'100%'}}
    initialRegion={{
        latitude:38.1987,
        longitude:-121.3545,
      latitudeDelta: 20,
      longitudeDelta: 20,
    }}
    region={{
        latitude:this.state.latitude,
        longitude:this.state.longitude,
        // latitudeDelta:this.state.latitudeDelta,
        // longitudeDelta:this.state.longitudeDelta
    }}
    //mapPadding={10}
   
    onRegionChange={(region)=>{
        console.log("region-->",region)
        this.setState({latitude:region.latitude});
        this.setState({longitude:region.longitude})
        this.setState({latitudeDelta:region.latitudeDelta})
        this.setState({longitudeDelta:region.longitudeDelta})
    }}

  >
      
<Marker
draggable
onDragEnd={(e)=>{
    const coord=  e.nativeEvent.coordinate;
    // console.log("coord-->",e.nativeEvent)
    //const lat=e.nativeEvent
      this.setState({latitude:coord.latitude});
      this.setState({longitude:coord.longitude})
}}
onPress={()=>{


}}

coordinate={{ latitude : this.state.latitude  , longitude : this.state.longitude }}>
      

</Marker>

     
       
    
      
     
  </MapView>
  <TouchableOpacity 
  onPress={()=>
this.setState({btnPress:true})}
  style={{height:50,borderRadius:8,backgroundColor:"#2196F3",width:"60%",alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:8}}>
      <Text style={{color:"white",fontSize:16}}>Next</Text>
  </TouchableOpacity>
  {this.state.btnPress?
<Modal
    isVisible={this.state.btnPress} style={{}}>
    <View style={{paddingVertical:10,paddingHorizontal:20, backgroundColor:'white',marginHorizontal:20,borderRadius:10}}>
        <Text>Please name your land</Text>
        <View style={{height:10}}/>
        <TextInput  style={{height:20,borderBottomWidth:1,borderColor:"#2196F3",}} onChangeText={(t)=> this.setState({loc:t})}
/>
<Text style={{marginTop:15}}>Please describe your land</Text>
        <View style={{height:10}}/>
        <TextInput  style={{height:20,borderBottomWidth:1,borderColor:"#2196F3",}} onChangeText={(t)=> this.setState({description:t})}
/>

<View style={{height:10}}/> 
<TouchableOpacity 
  onPress={()=>{
this.setState({btnPress:false})
this._saveLoc()


// setTimeout(function(){Alert.alert("Your location is added")}, 1000);
// this.props.navigation.pop()
  }

}
    

  style={{height:50,borderRadius:8,backgroundColor:"#2196F3",width:"30%",alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:8}}>
      <Text style={{color:"white",fontSize:16}}>Proceed</Text>
  </TouchableOpacity>

    </View>
</Modal>
:null
}
 
                
               
            </View>

        )
    }
}
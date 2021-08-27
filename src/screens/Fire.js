import React ,{Component}from 'react';
import { View, Text, TouchableOpacity,Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TabComponent from '../components/TabComponent';

export default class Fire extends Component{

    constructor(props){
        super(props);
        this.state={
            isExpand:false,
            selectedId:0
        }
    }
    _renderItem=({item})=>{
        console.log("item",item);
        var imagesArr=[]
       
        return(
            <View style={{marginHorizontal:20,marginVertical:10}}>

          
            <View style={{flexDirection:'row',alignItems:'center',paddingVertical:20}}>
                <View style={{flex:0.1,alignItems:'flex-start'}}>
                    <Image source={require("../assets/images/fire.png")} style={{height:20,width:20,tintColor:'orange'}}resizeMode={"contain"} />
                </View>
                <View style={{flex:0.8}}>
                <Text style={{color:"white"}}>{item.title}</Text>

                </View>
                <TouchableOpacity
                onPress={()=>{
                    this.setState({selectedId:item.id});
                    this.setState({isExpand:!this.state.isExpand})
                }}
                style={{flex:0.1,alignItems:'flex-end'}}>
                   {this.state.isExpand && this.state.selectedId==item.id?<Image source={require("../assets/images/arrowdown.png")} style={{height:16,width:16,tintColor:'white'}}resizeMode={"contain"}/>: <Image source={require("../assets/images/arrowright.png")} style={{height:16,width:16,tintColor:'white'}}resizeMode={"contain"} />
                
            }</TouchableOpacity>
      

           
           
            </View>
            {this.state.isExpand && this.state.selectedId==item.id?<View >
                <Image source={require('../assets/images/smoke_1.jpeg')} style={{height:150,width:Dimensions.get("screen").width*0.9,borderRadius:10}}resizeMode={"cover"} />
               
                

                
</View>:null}
            </View>
        )
    }



    
    render(){
        const data=this.props.route.params.data.FireData;
        console.log("params->",data)
      
        return(
            
            <View style={{flex:1,backgroundColor:"#323232"}}>
                <FlatList data={data} renderItem={this._renderItem}/>
               
                
 
                <View style={{position:'absolute',bottom:0}}>
                   
                <TabComponent/>


                </View>
               
            </View>
        )
    }
}
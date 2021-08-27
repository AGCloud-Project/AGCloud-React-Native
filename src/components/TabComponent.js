import React ,{Component}from 'react';
import { View, Text, Dimensions, TouchableOpacity,StyleSheet,Image } from 'react-native';



export default class TabComponent extends Component{
    constructor(props){  
        super(props);  
        this.state = {  
          isHome:false,
          isLiveStock:false,
          isProperty:false,
          isDrone:false  
          }  
       
      }
      componentDidMount(){
          if(this.props.from =="home"){
              this.setState({isHome:true})
          }
          else if(this.props.from=="livestock"){
              this.setState({isLiveStock:true})

          }
          else if(this.props.from=="property"){
              this.setState({isProperty:true})
          }
          else if(this.props.from=="drone"){
              this.setState({isDrone:true})
          }
      }  
    render(){
        const{isHome,isLiveStock,isProperty,isDrone}=this.state
        console.log("This.props",this.props)
        return(
            <View style={{height:90,width:Dimensions.get('screen').width,}}>
                <View style={{flex:1,flexDirection:'row',backgroundColor:"black",borderTopLeftRadius:15,borderTopRightRadius:15,opacity:0.85}}>
                <TouchableOpacity 
                 style={styles.div}
                onPress={()=>{
                    // this.setState({isHome:true})
                    // this.setState({isProperty:false})
                    // this.setState({isDrone:false})
                    // this.setState({isLiveStock:false})
                    this.props.navigation.navigate("Home")
                }}
                >
                   { isHome? 
                   <View style={{flex:0.1}}>
                   <View style={{height:2,backgroundColor:'white',width:'50%',alignSelf:'center'}}/>
                   </View>
                   :<View style={{flex:0.1}}></View>}
                    <View style={{
                        flex:0.9,
                        alignItems:'center',
                       
                        justifyContent:'center',
                        
                        }}>
                           
                            <Image source={require('../assets/images/home.png')} style={{tintColor:isHome?'white':'#ACAFA9',height:22,width:22}}/>

                    
                    <Text style={{color:"#ACAFA9",marginTop:5}}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.div}
                onPress={()=>{
                    // this.setState({isHome:false})
                    // this.setState({isProperty:false})
                    // this.setState({isDrone:false})
                    // this.setState({isLiveStock:true})
                    this.props.navigation.navigate("LiveStock")
                }}
                >
                    {isLiveStock?
                    <View style={{flex:0.1}}>

                    
                    
                    <View style={{height:2,backgroundColor:'white',width:'50%',alignSelf:'center'}}/>
                    </View>
                    :<View style={{flex:0.1}}></View>}
                <View style={{
                        flex:0.9,
                        alignItems:'center',
                       
                        justifyContent:'center',
                       
                        }}>
                                          <Image source={require('../assets/images/livestock.png')}  style={{height:25,width:25,tintColor:isLiveStock?'white':'#ACAFA9'}} resizeMode={'contain'}/>
                    <Text style={{color:'#ACAFA9',marginTop:5}}>LiveStock</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.div}
                onPress={()=>{
                    // this.setState({isHome:false})
                    // this.setState({isProperty:true})
                    // this.setState({isDrone:false})
                    // this.setState({isLiveStock:false})
                    this.props.navigation.navigate("Property")
                    
                }}
                >
                    {isProperty? 
                    <View style={{flex:0.1}}>
                    <View style={{height:2,backgroundColor:'white',width:'50%',alignSelf:'center'}}/>
                    </View>:<View style={{flex:0.1}}/>}
                <View style={{
                        flex:0.9,
                        //backgroundColor:'red',
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                            <Image source={require('../assets/images/property.png')}  style={{height:25,width:25,tintColor:isProperty?'white':'#ACAFA9'}} resizeMode={'contain'}/>
                    <Text style={{color:'#ACAFA9',marginTop:5}}>Property</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.div}
                onPress={()=>{
                    // this.setState({isHome:false})
                    // this.setState({isProperty:false})
                    // this.setState({isDrone:true})
                    // this.setState({isLiveStock:false})
                    this.props.navigation.navigate("Drone")
                }}
                >
                    {isDrone?
                    <View style={{flex:0.1}}>
                        <View style={{height:2,backgroundColor:'white',width:'50%',alignSelf:'center'}}/>

                    </View>
                    
                    
                    :<View style={{flex:0.1}}></View>}
                <View style={{
                        flex:0.9,
                        //backgroundColor:'red',
                        justifyContent:'center',
                       alignItems:'center'
                        }}>
                            <Image source={require('../assets/images/drone.png')}  style={{height:30,width:30,tintColor:isDrone?'white':'#ACAFA9'}} resizeMode={'contain'}/>
                    <Text style={{color:'#ACAFA9',marginTop:3}}>Drone</Text>
                    </View>
                </TouchableOpacity>
                </View>
            
                

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
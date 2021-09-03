import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Fire from '../screens/Fire';
import {Text,Image,View, Dimensions} from 'react-native'
import Property from '../screens/property';
import LiveStock from '../screens/livestock';
import Drone from '../screens/drone';
import AddPlace from '../screens/AddPlace';

const Stack = createStackNavigator();

export const Navigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={'screen'}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Fire" component={Fire}
                
                options={{ 
                    headerStyle:{
                        height:100,
                        backgroundColor:'black'

                    },
                    headerTitle:props=>
                    <View style={{width:Dimensions.get("screen").width,marginLeft:"20%"}}>
                    <Text style={{color:'white'}}>Fire Alert</Text>
                    </View>,
      
                    headerLeft: props =>
                     <Image source={require('../assets/images/arrowleft.png')} style={{height:15,width:15,tintColor:'white',marginLeft:7}}/> }}
                    
                    />
                    <Stack.Screen name="Property" component={Property}
                    options={{ 
                        headerStyle:{
                            height:100,
                            backgroundColor:'black'
    
                        },
                        headerTitle:props=>
                        <View style={{width:Dimensions.get("screen").width,marginLeft:"20%"}}>
                        <Text style={{color:'white'}}>Property</Text>
                        </View>,
          
                        headerLeft: props =>
                         <Image source={require('../assets/images/arrowleft.png')} style={{height:15,width:15,tintColor:'white',marginLeft:7}}/> }}
                    />
                    <Stack.Screen name="LiveStock" component={LiveStock}
                    
                    options={{ 
                        headerStyle:{
                            height:100,
                            backgroundColor:'black'
    
                        },
                        headerTitle:props=>
                        <View style={{width:Dimensions.get("screen").width,marginLeft:"20%"}}>
                        <Text style={{color:'white'}}>Livestock</Text>
                        </View>,
          
                        headerLeft: props =>
                         <Image source={require('../assets/images/arrowleft.png')} style={{height:15,width:15,tintColor:'white',marginLeft:7}}/> }}
                    />
                    <Stack.Screen name="Drone" component={Drone}
                    options={{ 
                        headerStyle:{
                            height:100,
                            backgroundColor:'black'
    
                        },
                        headerTitle:props=>
                        <View style={{width:Dimensions.get("screen").width,marginLeft:"20%"}}>
                        <Text style={{color:'white'}}></Text>
                        </View>,
          
                        headerLeft: props =>
                         <Image source={require('../assets/images/arrowleft.png')} style={{height:15,width:15,tintColor:'white',marginLeft:7}}/> }}
                    />
                        <Stack.Screen name="AddPlace" component={AddPlace}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

import React, { Component } from 'react'
import {  Text, View,TouchableOpacity, StyleSheet,AsyncStorage,ScrollView  } from 'react-native';


export default class History extends Component {

   constructor(props){

    super(props);

    this.state={

        names: [
           
         ]

    }

    this.setName();


   }


   setName=async ()=>{
       let data=await AsyncStorage.getItem("history");
       if(data && typeof data !='undefined'){
         data=JSON.parse(data);
         // console.log(typeof data,data);
          
          this.setState({names:data});
       }
       


   }

   alertItemName = (item) => {
   // alert(item)
 }


  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View>
        {
           this.state.names.map((item, index) => (
              <TouchableOpacity
                 key = {index}
                 style = {styles.container}
                 onPress = {() => this.alertItemName(item)}>
                 <Text style = {styles.text}>
                    {item}
                 </Text>
              </TouchableOpacity>
           ))
        }
     </View>
        </ScrollView>
     
    )
  }
}



const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c'
    },
    scrollView: {
      
      marginHorizontal: 20,
    },
 })
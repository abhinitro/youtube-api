import React, { Component } from 'react';
import { StyleSheet, TextInput, View ,Button,AsyncStorage,Text,TouchableOpacity } from 'react-native';

import YTSearch from './../api'
import MyCustomCaresol from './MyCustomCaresol';
import { Actions } from 'react-native-router-flux';
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    
   
  },
  c: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

const setInLocalStorage=async(searchTerm)=>{
  let obj=[];
  obj=await AsyncStorage.getItem('history');

  obj=JSON.parse(obj);

  if( obj && obj.length > 0){
    if(!obj.includes(searchTerm)){
      obj.push(searchTerm);
    }
   
  }else{
    obj=[];
    obj.push(searchTerm);

    
  }
  

  await AsyncStorage.setItem('history',JSON.stringify(obj));
  


  
}


export default class Home extends Component { 

  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null,
        value:""
    };


    this.videoSearch('React Tutorials');
}


onChangeText=(value)=>{

  this.setState({value})

}



videoSearch( searchTerm){

  setInLocalStorage(searchTerm);

  
  
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });


}


   render(){
    const {value}=this.state;

   

    
    return (
      <View style={styles.container}>
       <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.onChangeText(text)}
      value={value}
    />

        <Button
          title="Press me"
          onPress={() => this.videoSearch(value)}

        />






<MyCustomCaresol videos={this.state.videos}/>

<TouchableOpacity  onPress = {()=>{
    Actions.history()
}}>

<Text > Search history</Text>

</TouchableOpacity>




      </View>
 );
    
   }
   
  }
  
  
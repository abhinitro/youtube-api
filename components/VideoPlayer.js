import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions,Text,WebView } from 'react-native';

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
export default function VideoPlayer(props){

  console.log(props)

  const video = props.video;
    
  if(!video){
      return <div>Loading...</div>;
  }
  
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

 
    return (
      <View style={styles.container}>

<WebView
   source={{html: '<iframe width="100%" height="50%" src="'+url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
   
/>
      </View>
    )
  }


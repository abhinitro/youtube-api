import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions,Text,TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const styles = StyleSheet.create({
    scrollContainer: {
      height,
    },
    image: {
      width,
      height,
    },
  });
  

  class MyCustomCaresol extends Component {
    render() {
      const { videos } = this.props;
      console.log({videos})
      if (videos && videos.length) {
        return (
          <View
            style={styles.scrollContainer}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              {videos.map(video => (
                <TouchableOpacity  onPress = {()=>{
                  Actions.player({video})
              }}>
                <Image style={styles.image} source={{uri: video.snippet.thumbnails.default.url }} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );
      }
     
      return <Text>Loading...</Text>;    
    }
  }


export default MyCustomCaresol;

import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './components/Home'
import History from './components/History'
import VideoPlayer from './components/VideoPlayer'



const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "history" component = {History} title = "History" /> 
         <Scene key = "player" component = {VideoPlayer} title = "VideoPlayer" /> 

      </Scene>
   </Router>
)
export default Routes
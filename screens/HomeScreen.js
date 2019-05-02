import React from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import Task from '../components/Task';
import { MonoText } from '../components/StyledText';
import Canvas from '../Canvas'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Canvas Tasks',
  };

  //function to get an oauth token, broken code that isn't used
  async _authorize () {
    try {
      //this returns an object result that contains an access token
      const result = await authorize(config);
    } catch (error){
      console.log('error', error)
    }
  }
  
  constructor(props){
    super(props);
    this.callCanvas = this.callCanvas.bind(this);

    this.state = {
      data: null,
      error: null,
      loading: false
    }
  }

    //functions for calling the Canvas API 
    callCanvas(){

      this.setState({loading: true});
      this.setState({error: null});
      
      //currently just pulling dustins EDL assignments for testing
      //the course ID after ...courses/ can be modified to pull assignments from whatever course
      let url = 'https://canvas.colorado.edu/api/v1/courses/25348/assignments';
      let h = new Headers();

      //add our access token to the header as authorization, this is part of oauth2
      //h.append('Authorization', this.result.accessToken);

      //this is a manually generated token for testing (this can be downloaded from canvas profile -> settings)
      h.append('Authorization', 'Bearer 10772~lxqwLkPIT4rV8vd4RhvH9E1HBBpCXIpvSOfWMR7OxcKIVZQT4MCuzpO4apAkk77p');
      h.append('per_page', 5);
      
      let req = new Request(url, {
        headers: h,
        method: 'GET'
      });
      fetch(req)
      .then(response => response.json())
      .then(this.showData)
      .catch(this.errors);
    }

    showData = (data) => {
      this.setState({data: data});
      //console.log(data);
      
    }

    errors = (err) => {
      this.setState({error: err.message});
    }
  
  
  componentDidMount(){
    this.callCanvas();
  }

  render(){
    return(
      <ScrollView>
        { this.state.error && (
            <Text>
            {this.state.error}
            </Text>
        )}
        {(this.state.data || []).filter(assignment => !!assignment).map((assignment, index)=>{
            return <Task assignment = {assignment} key = {index}/>})}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollcontainer: {
    flex:1,
    marginBottom:100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  textInput:{
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
  addButton:{
    marginBottom:25,
    paddingTop:5,
    paddingBottom:15,
    marginLeft:15,
    marginRight:15,
    backgroundColor: '#ff7034',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  addButtonText: {
    color:'#fff',
    fontSize: 24,
  },
});

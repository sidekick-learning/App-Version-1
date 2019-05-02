import React from 'react';
import Task from './components/Task'
import { authorize } from 'react-native-app-auth'

//react-native-app-auth config object
const config = {
  issuer: 'https://fedauth.colorado.edu/idp/profile/SAML2/Redirect/SSO',
  clientID: 'id issued by james will go here',
  redirectUrl: 'back to sidekick app?'
}

//all broken code that is used by nobody, the basis for oauth2 is here but still needs deep
//linking to be setup up and tested

export default class Canvas extends React.Component {

  //function to get an oauth token
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
    
    this.state = {
      data: null,
      error: null,
      loading: false
        //     notes: [
        // {
        //   id: 1,
        //   title: 'homework',
        //   due_date: '4/22',
        //   class: 'calculus',
        // },
        // {
        //   id: 2,
        //   title: 'other homework',
        //   due_date: '4/21',
        //   class: 'physics',
        // },
        // {
        //   id: 3,
        //   title: 'project',
        //   due_date: '4/20',
        //   class: 'physics',
        // }
      //] 
    }

    //functions for calling the Canvas API 
    callCanvas = () => {

      console.log('here');

      this.setState({loading: true});
      this.setState({error: null});
      
      //currently just pulling dustins EDL assignments for testing, need to make this an for loop to pull everything for a particular user
      let url = 'https://canvas.colorado.edu/api/v1/courses/25348/assignments';
      let h = new Headers();

      //add our access token to the header as authorization
      //h.append('Authorization', this.result.accessToken);

      //this is a manually generated token for testing
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

    showData = (data)=>{
      this.setState({data: data});
      tasks = this.state.data.map((val, key)=>{
        return <Task key={key} keyval={key} val={val}/>});

      console.log(data);
      this.setState({loading: false});
    }

    errors = (err)  => {
      this.setState({error: err.message});
    }
  }
}
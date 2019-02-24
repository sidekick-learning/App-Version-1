import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Thing extends Component{
	constructor(){
		super();
		this.state = {
			name: 'go fuck urself',
			showName: false,
		}
	}

	changeState(){
		this.setState({showName: true})
	}

	render(){
		let name =  this.state.showName ? this.state.name : 'No Name';
		return(
		<View>
			<Text>{this.props.message}</Text>
			<Text>{name}</Text>
		</View>
		);
	}
}
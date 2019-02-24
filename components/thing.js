import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Thing extends Component{
	constructor(){
		super();
		this.state = {
			name: 'fuuuuuuuck',
			showName: false,
		}
	}

	changeState(){
		const newState = {
			showName: true,
			name: 'blaaaahhhhh',
		}
		this.setState(newState);
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
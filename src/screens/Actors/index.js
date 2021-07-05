import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Menu from '../Menu';

export class Actors extends Component {

    constructor(props){
        super(props);
     
    }

    render() {
        return (
            <View>
                <Menu/>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default Actors

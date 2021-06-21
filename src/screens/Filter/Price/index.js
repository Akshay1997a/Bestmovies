import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Price extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text> Price </Text>
            </View>
        )
    }
}

export default Price
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
});

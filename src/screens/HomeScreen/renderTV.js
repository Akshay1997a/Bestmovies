import React from 'react';
import {
    View,
    Pressable,
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Modal,
    TouchableHighlight,
    Image
 } from 'react-native'
 import colors from 'src/helper/colors';
 const {width} = Dimensions.get('window')


const RenderTV = ({posts, modalVisible, selectedImage, ...props})=>{
    return (
        
<>
    
    <View style={{flexDirection:'row', margin:20}}>
    
      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
          })
        }
    
        onPress={()=> props.navigation.navigate("MyListScreen")}>
        <Text style={{fontSize:24}}>My List </Text>    
      </Pressable>
    
      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
            overflow:'hidden'
          })
        }
    
        onPress={()=> props.reduxDecreaseCounter()}>
        <Text style={{fontSize:24}}> - </Text>    
      </Pressable>
    
      <Text style={{fontSize:24}}>{props.counter}</Text>
    
      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
          })
        }
    
        onPress={()=> props.reduxIncreaseCounter()}>
        <Text style={{fontSize:24}}> + </Text>    
      </Pressable>
    
      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
          })
        }
    
        onPress={()=> props.reduxSetCounter(0)}>
        <Text style={{fontSize:24}}> reset </Text>    
      </Pressable>
    
    
    
    
    </View>
    <ScrollView contentContainerStyle={styles.container}>
    {posts.map(post => (
    <View style={styles.tile} key={post.id}>
    <Pressable
        tvParallaxProperties={{ magnification: 1.001 }}
        style={({pressed, focused}) => focused ? styles.highlightFocused : styles.highlight}
        onPress={() => this.setState({ modalVisible: true, selectedImage: post.url })}
    >
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{ uri: post.thumbnail }}
      />
    </Pressable>
    <Text style={styles.title}>{post.title}</Text>
    </View>
    ))}
    <Modal
    animationType={'fade'}
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => this.setState({ modalVisible: false })}
    >
    <TouchableHighlight activeOpacity={1} onPress={() => this.setState({ modalVisible: false })}>
    <Image
      source={{ uri: selectedImage }}
      style={{ width: '100%', height: '100%' }}
    />
    </TouchableHighlight>
    </Modal>
    </ScrollView>
    </>
    
    )
}

export default RenderTV;


const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.black,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    tile: {
      flexBasis: width*0.2,
      height: width*0.15,
      marginTop: 10,
      marginBottom: 20,
      padding: 10,
    },
    highlight:{
      borderColor: '#1d3557',
      borderRadius: 20,
      borderColor: 'green',
    },
    highlightFocused:{
      borderWidth:5,
      borderColor: 'orange',
      borderRadius: 20,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
    },
    
    });
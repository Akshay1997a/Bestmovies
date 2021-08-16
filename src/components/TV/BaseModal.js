import React from 'react';
import { View, Modal} from 'react-native'

const TVSortByModal=(props)=>{
    return(
        <Modal
            visible={props.visible}
            transparent={true}
            onRequestClose={props.oncloseModal}
            onDismiss={props.oncloseModal}
        >
            <View style={{width: '100%', zIndex:99, height: '100%', justifyContent:'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
              {props.children}
            </View>
        </Modal>
    )
}

export default TVSortByModal
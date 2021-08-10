import React, {useEffect, useState} from 'react';
import {View, Text, Modal} from 'react-native';
import MenusList from '../screens/MenusList';

export default function ModalWrapper(props) {
  const [isMenusListModalVisible, setMenusListModalVisible] = useState(false);
  console.log('Props', props);
  return (
    <View style={{flex: 1}}>
      {props.children}
      <Modal visible={isMenusListModalVisible}>
        <MenusList {...props} />
      </Modal>
    </View>
  );
}

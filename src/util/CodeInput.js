import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export function CodeInput({cellCount}) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}></View>
      {Array(cellCount).map((i) => {
        return <TextInput />;
      })}
    </View>
  );
}

function InputCell(props) {
  return (
    <View>
      <TextInput />
    </View>
  );
}

import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';

const Box = (): JSX.Element => {
  const [text, setText] = useState<string>('');
  const onPressLearnMore = () => {
    console.log('클릭');
    Alert.alert('Simple Button pressed');
  };
  const onChangeText = (text: string) => {
    setText(text);
  };
  return (
    <View style={styles.box}>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 5,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
  },
});

export default Box;

import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// React Native 컴포넌트는 기본적으로 navigation props 가 있습니다.
const HomeScreen = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
        <Button
          title={'About 이동하기'}
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default HomeScreen;

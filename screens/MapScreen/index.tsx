import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MapScreenProps {}

const MapScreen = (props: MapScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {},
});

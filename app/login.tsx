import { View, Text, StyleSheet } from 'react-native';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text>LogIn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
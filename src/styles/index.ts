import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  Items: {
    position: 'absolute',
    bottom: 150,
    right: 20,
  },
  Item: {
    marginBottom: 10,
  },
  FABButton: {
    position: 'absolute',
    width: 58,
    height: 58,
    bottom: 60,
    right: 20,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

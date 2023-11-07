import {
  StyleSheet,
  Image,
} from 'react-native';

const Target = () => {
  return (
    <Image
      source={require('../assets/images/target.png')}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default Target;
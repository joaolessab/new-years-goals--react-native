import {
  StyleSheet,
  Image,
} from 'react-native';

const NewYearStars = () => {
  return (
    <Image
      source={require('../assets/images/new_year_stars.png')}
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

export default NewYearStars;
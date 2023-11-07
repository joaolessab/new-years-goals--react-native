import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import NewYearStars from './NewYearStars';

const MainHeader = ({ onOpenModal }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.plusIconContainer}
          onPress={onOpenModal}
        >
          <Image
            source={require('../assets/images/plus_icon.png')}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>

      <NewYearStars />

      <Text style={styles.headerTitle}>
        Your New Year's Goals
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 40,
  },
  headerTitle: {
    color: "#EAC07F",
    fontFamily: 'Merriweather-Black',
    fontSize: 40,
    textAlign: 'center',
  },
  actionContainer: {
    alignItems: "flex-end",
    width: "100%",
  },
  plusIcon: {
    height: 25,
    width: 25,
  },
  plusIconContainer: {
    backgroundColor: "#EAC07F",
    borderRadius: 100,
    padding: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainHeader;
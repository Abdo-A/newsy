import { StyleSheet } from "react-native";
import { dimensions } from "../../../assets/style/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  scrollView: {
    alignSelf: "center"
  },
  activityIndicatorWrapper: {
    marginTop: dimensions.fullHeight / 3
  }
});

export default styles;

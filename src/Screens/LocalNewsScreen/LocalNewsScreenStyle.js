import { StyleSheet } from "react-native";

import { dimensions } from "../../../assets/style/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  activityIndicatorWrapper: {
    marginTop: dimensions.fullHeight / 3
  }
});

export default styles;

import { StyleSheet } from "react-native";

import { dimensions, colors } from "../../../assets/style/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  activityIndicatorWrapper: {
    marginTop: dimensions.fullHeight / 3
  },
  errorText: {
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary
  }
});

export default styles;

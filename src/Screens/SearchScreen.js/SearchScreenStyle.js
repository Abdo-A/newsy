import { StyleSheet } from "react-native";

import {
  colors,
  dimensions,
  fontTypes,
  gaps
} from "../../../assets/style/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: "relative"
  },
  inputsContainer: {
    flexDirection: "row",
    padding: 10,
    position: "absolute",
    backgroundColor: "#FAFAFA",
    width: dimensions.fullWidth,
    top: 0,
    zIndex: 10
  },
  searchInput: {
    flex: 1,
    color: colors.primary,
    paddingLeft: 10,
    fontSize: 25,
    fontFamily: fontTypes.mainBold
  },
  searchButton: {
    backgroundColor: colors.secondary,
    minWidth: dimensions.fullWidth / 3,
    justifyContent: "center"
  },
  inputErrorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: gaps.xxl + 10
  },
  inputErrorText: {
    fontSize: 70
  }
});

export default styles;

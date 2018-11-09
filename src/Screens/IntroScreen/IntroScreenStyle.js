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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  enterButton: {
    alignSelf: "center",
    backgroundColor: colors.secondary,
    minWidth: dimensions.fullWidth / 2.5,
    justifyContent: "center"
  },
  header: {
    fontFamily: fontTypes.spicy,
    color: colors.white,
    fontSize: 70,
    marginBottom: gaps.filler - 20
  }
});

export default styles;

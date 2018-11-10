import { StyleSheet } from "react-native";
import {
  gaps,
  dimensions,
  colors,
  fontTypes
} from "../../../assets/style/base";

const styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth - gaps.xl
  },
  titleText: {
    color: colors.secondary,
    fontFamily: fontTypes.main
  },
  imageBody: {
    position: "relative"
  },
  imageLoadingIndicator: {
    position: "absolute",
    top: "45%",
    left: "45%"
  },
  mainImage: {
    width: "100%",
    height: 300,
    flex: 1,
    alignSelf: "center"
  },
  contentText: {
    color: colors.black,
    fontFamily: fontTypes.mainBold
  },
  dateText: {
    color: colors.tertiary
  }
});

export default styles;

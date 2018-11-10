import { StyleSheet } from "react-native";
import { gaps, dimensions, colors } from "../../../assets/style/base";

const styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth - gaps.xl
  },
  titleText: {
    color: colors.secondary
  },
  mainImage: {
    width: "100%",
    height: 300,
    flex: 1,
    alignSelf: "center"
  }
});

export default styles;

import { Dimensions } from "react-native";
import Color from "color";

//DIMENTIONS
export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

//FONT TYPES
export const fontTypes = {
  main: "montserratMedium",
  mainBold: "montserratBold",
  mainLight: "montserratLight",
  spicy: "spicyRice"
};

//GAPS
export const gaps = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  filler: 100
};

const primaryColor = Color("#c94b28");
const secondaryColor = Color("#4DAD4A");
const tertiaryColor = Color("#4444AA");
const black = Color("#222222");
const white = Color("#F4f4f4");

//COLORS
export const colors = {
  primary: primaryColor,
  primaryLight: primaryColor.lighten(0.2),
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  white: white,
  black: black
};

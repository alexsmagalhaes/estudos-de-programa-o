const colorsRgb = {
  red: "",
  green: "",
  blue: "",
};

type ColorsObj = typeof colorsRgb;
type ColorsKeys = keyof ColorsObj;

function translateColor(color: ColorsKeys, colors: ColorsObj) {
  return colors[color];
}

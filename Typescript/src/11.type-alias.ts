type ColorRGB = "red" | "blue" | "yellow";
type ColorCMYK = "cyan" | "magent" | "yellow" | "black";

type FavoriteColor = ColorRGB & ColorCMYK;

type RandomColor = (randomNumber: number) => FavoriteColor;

const body1 = document.querySelector("body");
if (body1) body1.style.background = "blue";

const body2 = document.querySelector("body") as HTMLBodyElement;
body2.style.background = "blue";

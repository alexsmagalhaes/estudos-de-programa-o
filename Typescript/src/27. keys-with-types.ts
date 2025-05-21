type TVehicle = {
  brand: string;
  year: number;
};

type TCar = {
  brand: TVehicle["brand"];
  year: TVehicle["year"];
  name: string;
};

const car1: TCar = {
  brand: "Jeep",
  name: "Compass",
  year: 2025,
};

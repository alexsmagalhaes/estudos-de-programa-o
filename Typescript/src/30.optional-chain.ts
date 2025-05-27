type Doc = {
  title: string;
  text: string;
  date?: Date;
};

const doc: Doc = {
  title: "",
  text: "",
};

console.log(doc.date?.toDateString() ?? "Undefined");

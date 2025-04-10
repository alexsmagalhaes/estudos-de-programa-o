let text = '"String" \\';

console.log(text);

console.log(text.charAt(0));

console.log(text.concat(" ", "Hi", " ", "Hello"));

console.log(text.indexOf("Hi"));

console.log(text.lastIndexOf("n"));

console.log(text.match(/[a-z]/g));

console.log(text.search(/t/));

console.log(text.replace(/String/, "Text here!"));

console.log(text.length);

console.log(text.slice(3, -3));

console.log(text.substring(1));

console.log(text.split("t", 1));

console.log(text.toUpperCase());

String("Alex").at(0);

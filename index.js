export function getAnimal(animal = "default") {
  if (animal === "cats") {
    return `I totally love ${animal}!`;
  } else if (animal === "default") {
    return `I do not like animals at all!`;
  } else {
    return `I like ${animal}!`;
  }
}

getAnimal("cats");

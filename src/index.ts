export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
const data = greet("world");
console.log(data);

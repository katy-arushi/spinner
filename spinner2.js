let myArray = ['|   ', '/   ', '-   ', '\\   ', '|   ']

for (let i = 0; i < myArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${myArray[i]}`);
  }, (175 * i))
}
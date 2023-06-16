const fs = require('fs');

const filePath = 'c:/Users/srira/Desktop/OPAssignments/Week-1-assignment/02-async-js/easy/testasync.txt';


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const cleanedContent = data.replace(/\s+/g, ' ');

  fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('File cleaned successfully!');
  });
});

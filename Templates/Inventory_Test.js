var fs = require('fs');

//append content at the end of the file:
fs.appendFile('Inventory.txt', 'This is your Starting inventory.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
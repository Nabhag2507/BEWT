const path = require('path')

console.log(path.dirname('/wefsd/eryg/wef.txt'))
console.log(path.extname('/asdf/wef.txt'))
console.log(path.basename('./osModule'))

path1 = path.join("users","arjun","documents","projects")
console.log(path1);

path2 = path.normalize("//folder//subfolder////file.txt")
console.log(path2);

console.log(path.isAbsolute("//folder//subfolder////file.txt"));

path3 = path.resolve("//folder//subfolder////file.txt")
console.log(path3);

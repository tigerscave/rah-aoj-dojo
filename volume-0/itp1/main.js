const fs = require('fs')
const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);
  
  const Arry = data.split(/\n/)
  console.log(Arry);
  
  
  for (let i = 0; i < Arry.length; i++) {
    const arry = Arry[i].split(' ').map(Number)
    console.log(arry);

    let h = arry[0]; 
    let w = arry[1]; 
    if (h === 0 && w === 0) break; 

    let result = ''; 
    for (let y = 1; y <= h; y++) {
      for (let x = 1; x <= w; x++) {
        //result += y % 2 && x % 2 || !(y % 2) && !(x % 2) ? '#' : '.'; 
        
        if (y % 2 == 0 && x % 2 == 0 || y % 2 == 1 && x % 2 == 1) 
          result += '#'
        else 
          result += '.'
      }
      result += '\n'
    }
    console.log(result);
  }  
}

const readFile = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    yourAnswerFunctionComesHere(data);
  });
}

try {
  readFile(process.argv[2]);
} catch(error){
  console.log(error.message);
}

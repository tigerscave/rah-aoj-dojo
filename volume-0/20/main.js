let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  const input = String(data.split(' ')); 
  const result = input.toUpperCase(); 
  console.log(result, typeof(result));
  
  //const result = input.toUpperCase(); 
  //console.log(result.join());
  
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

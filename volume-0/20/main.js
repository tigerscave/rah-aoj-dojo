let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);
  console.log(data.toUpperCase());
  
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

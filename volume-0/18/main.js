let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  
  var input = data.split(' ')
  var result = input.sort((a, b) => b - a);

  console.log(result.join(' '));
  var result2 = input.sort()
  console.log(result2.join(' '));
}

const readFile = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    yourAnswerFunctionComesHere(data);
  });
}

const readFileWithoutArg = () => {
  const data = require('fs').readFileSync('/dev/stdin', 'utf8');
  yourAnswerFunctionComesHere(data);
}

let sampleInputPath = "";

if(process.argv.length > 2) {
  sampleInputPath = process.argv[2];
  readFile(sampleInputPath);
} else {
  readFileWithoutArg();
}

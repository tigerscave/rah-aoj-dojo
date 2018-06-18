const fs = require('fs')
const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);
  
  //const input = data.trim().split(/\s/)
  const input = data.split('\n'); 
  //console.log(input);
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log("_____this is the answer______");

  for (let i = 0; i < input.length; i++) {
    
    const arry = input[i].split(' ')
    //console.log(number);
    
    const month = arry[0]; 
    if (month == 0) break; 
    const day = arry[1]; 
    let time = new Date(); 
    
    time.setFullYear(2004)
    time.setMonth(month - 1); 
    time.setDate(day); 
    
    let output = days[time.getDay()]
    
    console.log(output);
    //console.log(time);
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

let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);
  
  //const input = data.trim().split(/\s/)
  const input = data.split('\n'); 
  //console.log(input);
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log("_____this is the answer______");
  for (let i = 0; i < input.length; i++) {
    const number = input[i].split(' ')
    //console.log(number);
    
    let month = number[0]; 
    if (month == 0) break; 
    let day = number[1]; 
    let time = new Date(); 
    
    let setYear = time.setFullYear(2004)
    let setMonth = time.setMonth(month - 1); 
    let setDay = time.setDate(day); 
    
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

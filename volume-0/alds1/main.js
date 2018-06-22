let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);
  
  const arry = data.split(/\n/); 
  console.log(arry);

  for (let i = 0; i < arry.length; i++) {
    const arry2 = arry[i].split(''); 
    console.log(arry2);
  }

/*

  let p = arry[0].split(''); 
  let t = arry[1].split(''); 
  
  console.log(p, t);
  
  const findPlaces = (p, t) => {
    p === t ? console.log(p) : null
  }
    
/////////////////

  const arry2 = arry.map(elem = elem => {
    let arry3 = elem.split(' ')
    console.log('....arry3.....');
    console.log(arry3);
  }) 
*/
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

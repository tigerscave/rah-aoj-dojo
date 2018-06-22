let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);
  
  const Arry = data.split(/\n/); 
  let p = Arry[0];
  let t = Arry[1]
  console.log(Arry);

  for (let i = 0; i < p.length; i++) {
    let result = true;
    for (let j = 0; j < t.length; j++) {
      (p[i + j] != t[j]) ? result = false : null;
    }
    result ? console.log(i) : null;    
  }

  
  

/*

  if (p[i + j] != t[j]) {
    result = false;
    break;
  } 

if (Arry[0].arry[i] == Arry[1].arry[i]) {
      let p = arry2.indexOf(arry[i])
      console.log(p);
    } else {
      break;
    }




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

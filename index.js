function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

 var count = 0;
 
function takeANumber2() {
  
  count += 1;
  console.log(`Welcome, you are customer number ${count}!`)
  
}


takeANumber2();
takeANumber2();








function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  
  var line=[];
  for( var i=0; i<katzDeliLine.length; i++) {
    line.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently: ${line.join(`, `)}`
}
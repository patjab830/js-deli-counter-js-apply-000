var counter = 0
function takeANumber(katzDeliLine, name) {
  counter++
  katzDeliLine.push(counter);
  return `You are number ${counter}`;
}

function nowServing(katzDeliLine) {
  var serving = katzDeliLine.shift();
  if (serving)
    return `Currently serving ${serving}.`
  else
    return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var currently = "The line is currently";
  
  if (katzDeliLine.length === 0) {
    return `${currently} empty.`;
  } else {
    currently = `${currently}: `;
  }
  
  for ( var i = 0; i < katzDeliLine.length; i++ ) {
    currently = `${currently}${i+1}. ${katzDeliLine[i]}`;
    if ( i !== katzDeliLine.length-1 ) {
      currently = `${currently}, `;
    }
  }
  
  return currently;
}

let line = []

takeANumber(line)
takeANumber(line)
nowServing(line)
nowServing(line)
console.log(line) //=> []
takeANumber(line) 


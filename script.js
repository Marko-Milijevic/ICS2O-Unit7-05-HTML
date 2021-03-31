// Add event listener to the button
document.getElementById('button').addEventListener('click', comparison)
let userInput1 = 0
let userInput2 = 0

// Compare user's input and determines the result
function comparison () {
  userInput1 = document.getElementById('input1').value
  userInput1 = parseInt(userInput1)
  userInput2 = document.getElementById('input2').value
  if ((userInput1 < 18) && (userInput2 !== 'Saturday' && userInput2 !== 'Sunday')) {
      document.getElementById('answer').innerHTML = 'Time to go to school!'
  } else if ((userInput1 >= 18) && (userInput2 !== 'Saturday' && userInput2 !== 'Sunday')) {
      document.getElementById('answer').innerHTML = 'Time to go work!'
  } else {
     document.getElementById('answer').innerHTML = 'Time to relax!'
  }
}

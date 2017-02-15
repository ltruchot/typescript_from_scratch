console.log('my congiguration is working well...')
  /* STEP 1: IMPORT / EXPORT
   * - put some export instruction before completeGameData & GAME_NAME declaration in beginner.ts
   * - install your IDE pakage for typescript. If it don't exist, work with Sublime text
   * - install lodash:  npm install @types/lodash --save, put type on 'arr' and try a shuffle
   */
import { completeGameData } from "../beginner";
import * as _ from 'lodash';
import { shuffle } from 'lodash';
const arr = [1, 2, 3, 4]
console.log(arr.join(','))

/* STEP 2: ES6 ITERATIONS
 * - declare 2 times a var with the same name is forbidden: find an other solution
 * - what is the difference between forEach, for..in and for..of ?
 */
/*
completeGameData.forEach((item, index) => {
  for (var param in item) {
    console.log('param in for...in:', param)
    if (param === 'c') {
      var currentItem = item[param]
      for (var param of currentItem) {
        console.log('param in for...of:', param)
      }
    }
  }
})
*/

/* STEP 2: ES6 MULTILINE INTERPOLABLE STRINGS
 * - declare 2 times a var with the same name is forbidden: find an other solution
 * - what is the difference between for..in and for..of ?
 *
 */
/*
var lyrics = `Hey <strong>${player}</strong> ! Welcome in my very new quizz game: ${GAME_NAME}.
 Are you a clever player ? Can you be the win agains ${nbOfPlayer} of other players arround the worlds ?
 `;
document.getElementById('game').innerHTML = lyrics;
*/

/* STEP 2: ES6 SPREAD OPERATOR, INTERPOLATION & TYPESCRIPT LIB IMPORT
 * - put types everywhere
 * - propose a list of choice in prompt windows, using ... operator
 * - add the score with interpolable string
 * - import jquery and convert all of this with $
 */

/*
const otherNames: string[] = ['peach', 'luigi', 'toad']
const speadExample: string[] = ['mario', ...otherNames]

function gameFor4Players(...players: string[]): void {
  console.log('player 2 is', arguments[1])
}
gameFor4Players(...speadExample);

const gameElement = document.getElementById('game')
var playButton = document.createElement('button')
playButton.innerText = 'Play !'
gameElement.appendChild(playButton)
playButton.addEventListener('click', gameProcess)

function gameProcess() {
  let validAnswer = 0;
  completeGameData.forEach((item, index) => {
    if (window.prompt(item.q).toLowerCase() === item.a.toLowerCase()) {
      validAnswer++
    }
  })
  if (validAnswer === completeGameData.length) {
    gameElement.innerHTML = 'OMG, you win ! Your score is: ';
  } else {
    gameElement.innerHTML = 'OMG, what a loser... Your score is:';
  }
}
*/

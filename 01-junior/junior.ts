console.log('my congiguration is working well...')
  /* STEP 1: IMPORT / EXPORT
   * - put some export instruction before completeGameData const declaration in beginner.ts
   * - install your IDE pakage for typescript. If it don't exist, work with Sublime text
   */
import { completeGameData } from "../beginner";

/* STEP 2: ES6 ITERATIONS
 * - declare 2 times a var with the same name is forbidden: find an other solution
 * - what is the difference between for..in and for..of ?
 *
 */
/*
completeGameData.forEach(function(item, index) {
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

// destructuring, spreading

/* STEP 2: ES6 MULTILINE INTERPOLABLE STRINGS
 * - declare 2 times a var with the same name is forbidden: find an other solution
 * - what is the difference between for..in and for..of ?
 *
 */
var player = 'Loic3';
var nbOfPlayer = 2;
var lyrics = `Hey ${player} ! Welcome in my very new quizz game.
 Are you a clever player ? Can you be the win agains ${nbOfPlayer} of other players arround the worlds ?
 `;
document.getElementById('game').innerHTML = lyrics;

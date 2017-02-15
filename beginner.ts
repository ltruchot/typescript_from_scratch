console.log('my congiguration is working well...')
  /* STEP 1: install TypeScript
   * - with node, need last version of typescript globally and a linter
   * npm install -g typescript@next
   * - install your IDE pakage for typescript. If it don't exist, work with Sublime text
   */

/* STEP 2: configure compiler
 * - enhance tsconfig.json
 *   - ask to typescript to compile this file in ES6, then run "tsc"
 *   - ask to typescript to compile this file in ES5, then run "tsc"
 * - finally, run tsc -w
 */
const GAME_NAME = "quizz";
let maxPlayer = 2;
var playerReady = false;

/* STEP 3: first types
 * - add types to 3 previous variables
 * - uncomment following code
 * - try to add a question to gameData with a "push" - what about const ?
 * - try to reset gameData like this:
 * gameData = []; what append on compile ? why ?
 * - try to create a perfect interface for a gameData object
 * - put your perfect interface in beginner.d.ts file
 * - try to provoke error of type in your IDE
 */
/*
const completeGameData: any = [{
  q: "Quelle société développe TypeScript ?",
  a: 'Microsoft',
  c: ['Google', 'Amazon', 'Facebook'],
  l: 2,
  d: false
}, {
  q: "Quelle société développe Angular ?",
  a: 'Google',
  c: ['Microsoft', 'Amazon', 'Facebook'],
  l: 1,
  d: false
}]

interface GameData {
  q: any, // question
    a: any, // good answer
    c: any, // choices (bad answers)
    l: any, // level of difficulty,
    d: any // done already ?
}
*/

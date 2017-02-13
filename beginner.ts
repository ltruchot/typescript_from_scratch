/* STEP 1: install TypeScript
 * - with node, need last version of typescript globally
 * npm install -g typescript@next
 */

/* STEP 2: configure compiler
 * - enhance tsconfig.json
 * - ask to typescript to compile this file in ES6
 * - ask to typescript to compile this file in ES5
 */
let gameName = "quizz";
const gameData = [{
    q: "Quelle société développe typescript ?",
    a: 'microsoft',
    c: ['google', 'amazon', 'facebook']
}]
const choices = [gameData[0].a, ...gameData[0].c];
for (let choice of choices) {
    console.log(choice)
}
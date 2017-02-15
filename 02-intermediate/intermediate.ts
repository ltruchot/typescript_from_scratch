/* STEP 1: CREATE A CLASS
 * - load GameItem Class, GameData Interface, jquery as $ & lodash _
 * - go to classes/GameData to create the perfect class
 * - we need everything in GameData previous interface
 * - we want a constructor to give all datas
 * - we want a method to shuffle the answers
 * - we want to be sure that the question wasn't asked
 * - we want a static property with the number of instances created
 * - we want to create question
 */
$.getJSON('data/game.json').then((result: GameData[]) => {
  _.forEach(result, data => console.log(data));
})

/* STEP 2: EXTENDS & SUPER
 */

/* STEP 3: DECORATORS
 */

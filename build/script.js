/* STEP 1: install TypeScript
 * - with node, need last version of typescript globally and a linter
 * npm install -g typescript@next
 * - install your IDE pakage for typescript. If it don't exist, work with Sublime text
 */
define("beginner", ["require", "exports"], function (require, exports) {
    "use strict";
    /* STEP 2: configure compiler
     * - enhance tsconfig.json
     *   - ask to typescript to compile this file in ES6, then run "tsc"
     *   - ask to typescript to compile this file in ES5, then run "tsc"
     * - finally, run tsc -w
     */
    var gameName = "quizz";
    var GAME_MAX_PLAYER = 2;
    var playerReady = false;
    /* STEP 3: first types
     * - add types to 3 previous variables
     * - uncomment following code
     * - try to add a question to gameData - what about const ?
     * - try to reset gameData like this:
     * gameData = []; what append on compile ?
     * - try to create a perfect interface for a gameData object
     * - put your perfect interface in beginner.d.ts file
     * - try to provoke error of type in your IDE
     */
    exports.completeGameData = [{
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
        }];
});
define("01-junior/junior", ["require", "exports", "beginner"], function (require, exports, beginner_1) {
    "use strict";
    /* STEP 1: ES6 ITERATIONS
     * - declare 2 times a var with the same name is forbidden: find an other solution
     * - what is the difference between for..in and for..of ?
     *
     */
    beginner_1.completeGameData.forEach(function (item, index) {
        for (var param in item) {
            console.log('param in for...in', param);
        }
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var param_1 = item_1[_i];
            console.log('param in for...of', param_1);
        }
    });
});
//# sourceMappingURL=script.js.map
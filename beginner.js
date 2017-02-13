let gameName = "quizz";
const gameData = [{
        q: "Quelle société développe typescript ?",
        a: 'microsoft',
        c: ['google', 'amazon', 'facebook']
    }];
const choices = [gameData[0].a, ...gameData[0].c];
for (let choice of choices) {
    console.log(choice);
}

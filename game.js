const data = process.argv;
const fs = require("fs");
console.log(data);

const choice = process.argv[2]


console.log("player picks " + choice);

const comp = Math.floor(Math.random() * (4 - 1) + 1);

let fileString = '';

if (comp == 1) {
    const reply = "rock"
    console.log("computer picks " + reply);
    if (choice === "rock") {
        console.log("tie")
        fileString = 'tie'
    }
    if (choice === "paper") {
        console.log("You Win")
        fileString = 'win'
    }
    if (choice === "sissors") {
        console.log("You Lose")
        fileString = 'lose'
    }
}

if (comp == 2) {
    const reply = "paper"
    console.log("computer picks " + reply);
    if (choice === "rock") {
        console.log("You Lose")
        fileString = 'Lose'
    }
    if (choice === "paper") {
        console.log("Tie")
        fileString = 'tie'

    }
    if (choice === "sissors")
        console.log("You Win")
    fileString = 'Win'

}

if (comp == 3) {
    const reply = "sissors"
    console.log("computer picks " + reply);
    if (choice === "rock") {
        console.log("You Win")
        fileString = 'Win'

    }
    if (choice === "paper") {
        console.log("You Lose")
        fileString = 'Tie'

    }
    if (choice === "sissors") {
        console.log("Tie")
        fileString = 'Lose'
    }

}

fs.readFile("game-log.txt",'utf8',(err, data) => {
    if (err) {
        return err;
    }

    console.log("data", data);
    fs.writeFileSync("game-log.txt", data + '\n' + fileString, 'utf8');
});

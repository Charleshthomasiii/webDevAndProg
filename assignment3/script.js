var account = document.getElementById('account');
var money = 50;
account.innerHTML = money;
var dice = ['0', '1', '2', '3', '4', '5', '6'];
var even = document.getElementById('even');
var odd = document.getElementById('odd');
var again = document.getElementById('again');
var die = document.getElementById('die');
var resultText = document.getElementById('resultText');
var choiceHistory = [];
var past = document.getElementById('past');
var clear = document.getElementById('clear');
clear.onclick = function() {
    past.innerHTML = "History";
    choiceHistory = [];
}

again.style.display = "none";
odd.onclick = function() {
    odd.style.display = "none";
    even.style.display = "none";
    again.style.display = "block";
    var choice = Math.floor(Math.random() * 6 + 1)
    die.src = "images/dice-" + choice + ".png";
    if ((choice == 1) || (choice == 3) || (choice == 5)) {
        resultText.innerHTML = "You chose ODD - you WIN!";
        money += 10;
        account.innerHTML = money;
        if (money == 0) {
            again.style.display = "none";
            resultText.innerHTML = "You lost all your money, sorry";
        }
        choiceHistory.push("ODD: " + choice + " WON");

    } else {
        resultText.innerHTML = "You chose ODD - you LOSE!";
        money -= 10;
        account.innerHTML = money;
        if (money == 0) {
            again.style.display = "none";
            resultText.innerHTML = "You lost all your money, sorry";
        }
        choiceHistory.push("ODD: " + choice + " LOST");

    }
    //console.log(choice);

};
even.onclick = function() {
    odd.style.display = "none";
    even.style.display = "none";
    again.style.display = "block";
    var choice = Math.floor(Math.random() * 6 + 1)
    die.src = "images/dice-" + choice + ".png";
    if ((choice == 2) || (choice == 4) || (choice == 6)) {
        resultText.innerHTML = "You chose EVEN - you WIN!";
        money += 10;
        account.innerHTML = money;
        if (money == 0) {
            again.style.display = "none";
            resultText.innerHTML = "You lost all your money, sorry";
        }
        choiceHistory.push("EVEN: " + choice + " WON");


    } else {
        resultText.innerHTML = "You chose EVEN - you LOSE!";
        money -= 10;
        account.innerHTML = money;
        if (money == 0) {
            again.style.display = "none";
            resultText.innerHTML = "You lost all your money, sorry";
        }
        choiceHistory.push("EVEN: " + choice + " LOST");

    }
};
again.onclick = function() {
    odd.style.display = "block";
    even.style.display = "block";
    again.style.display = "none";
    past.innerHTML = "History";
    for (var i = choiceHistory.length - 1; i >= 0; i--) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = choiceHistory[i];
        past.appendChild(paragraph);

    }
};
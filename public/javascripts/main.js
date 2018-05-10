"use strict";

(function() {
    let d4 = document.getElementById('d4'), d6 = document.getElementById('d6'), d8 = document.getElementById('d8'), d10 = document.getElementById('d10'), d12 = document.getElementById('d12'), d20 = document.getElementById('d20'), d100=document.getElementById('d100');
    let type;
    d4.addEventListener('click', function() {
        type = 4;

        rollDice();

    });
    d6.addEventListener('click', function() {
        type = 6;
        rollDice();
    });
    d8.addEventListener('click', function() {
        type = 8;
        rollDice();
    });
    d10.addEventListener('click', function() {
        type = 10;
        rollDice();
    });
    d12.addEventListener('click', function() {
        type = 12;
        rollDice();
    });
    d20.addEventListener('click', function() {
        type = 20;
        rollDice();
    });
    d100.addEventListener('click', function() {type = 100;
        rollDice();
    });
    function rollDice() {
        type--;
        let amount = document.getElementById("textInput").value;
        let total = 0;
        let rolls = [];
        for (let i = 0; i < amount; i++) {
            let roll = Math.round(Math.rando() * type + 1);
            rolls[i] = roll;
            total += roll;
        }
        document.getElementById('total').innerHTML += ``;
        document.getElementById('individual').innerHTML += ``;
        document.getElementById('total').innerHTML += total;
        document.getElementById('individual').innerHTML += rolls;
    }



}());
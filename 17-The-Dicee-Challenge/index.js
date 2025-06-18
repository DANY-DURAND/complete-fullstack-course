const img1 = document.querySelector('.img1');
// img1.setAttribute('src','./images/dice1.png');

const img2 = document.querySelector('.img2');


const refresh = document.querySelector('h1');

console.log(refresh)

function rollDice() {
    var rand1 = Math.floor(Math.random() *6)+1;
    // console.log(rand1);
    img1.setAttribute('src',`./images/dice${rand1}.png`);


    var rand2 = Math.floor(Math.random() *6)+1;
    // console.log(rand2);
    img2.setAttribute('src',`./images/dice${rand2}.png`);

    if (rand1 > rand2) {
        refresh.textContent = '🚩Player 1 wins';
    } else if (rand1 < rand2) {
        refresh.textContent = 'Player 2 wins🚩';
    }else{
        refresh.textContent = `Draw`;
    }

}
rollDice();

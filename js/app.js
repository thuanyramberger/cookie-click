let count = 0;
let increment = 1;
let score = document.getElementById('score');
let cookie = document.getElementById("cookie");
let plus4Chocolate = document.getElementById("plus4Chocolate");
let plus10Swedish = document.getElementById("plus10Swedish");
let plus20Xmas = document.getElementById("plus20Xmas");
let milkLevel = document.getElementById("milkLevel");
let chocolateChip = document.getElementById("chocolateChip");
let milk = document.getElementById("milk");
let milkAmount = 0



cookie.addEventListener('click', function() {
  increaseScore();
  changeScore();
  checkButtons();
  checkWin();
});

plus4Chocolate.addEventListener('click', function() {
  if (count < 20){
    alert("Don't be so hungry, you don't have enough points!")
    return;
  }
  increment = 4;
  chocolateChip.src = "/img/chocolate.png";
  count -= 20;
  changeScore();
})

plus10Swedish.addEventListener('click', function() {
  if (count < 40){
    alert("Don't be so hungry, you don't have enough points!")
    return;
  }
  increment = 10;
  chocolateChip.src = "/img/swedish.png";
  count -= 40;
  changeScore();
})

plus20Xmas.addEventListener('click', function() {
  if (count < 80){
    alert("Don't be so hungry, you don't have enough points!")
    return;
  }
  increment = 20;
  chocolateChip.src = "/img/xmas.png";
  count -= 80;
  changeScore();
})

milkLevel.addEventListener('click', addMilk);




function addMilk () {
 if (count < 500) {
   alert("Don't be so thirsty, you don't have enough points!")
   return;
 }
  milkAmount++;
 if (milkAmount > 3) {
   return;
 }
 milk.src = "/img/milk" + milkAmount + ".png";
 count -=50;
 changeScore();
}

function checkButtons() {
  if (count > 790){
    milkLevel.style.display = "block";
  } else if (count > 490){
    plus20Xmas.style.display = "block";
  } else if (count > 109) {
    plus10Swedish.style.display = "block";
  } else if (count > 29) {
    plus4Chocolate.style.display = "block";
  }
}

function changeScore() {
  score.innerHTML = count;
}

function increaseScore() {
  count = count + increment;
}

function checkWin () {
  if (count >= 1000) {
    alert("1000 points - SWEET VICTORY! Your cookie stash is overflowing, your milk is perfectly poured - Your tummy (and heart) are full!")
  }
}

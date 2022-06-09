let gNumber, tries, lastSeenNumber;
alert("welcome");
player = prompt("Name of the player", "");
alert("Hii" + player + " Welcome to the game ");
secretNumber = 14;
n = 6;
for (tries = 1; tries <= n; tries++) {
  gNumber = prompt("Guess the secret number between 1 - 20 ", "");
  if (gNumber > 20 || gNumber < 1) {
    alert(" number is out of range");
    tries = tries - 1;
    continue;
  }

  if (lastSeenNumber == gNumber) {
    tries = tries - 1;
    alert("The number entered is same as previous number");
  } else if (gNumber < secretNumber) {
    alert("Entered number is smaller than the secret number");
  } else if (gNumber > secretNumber) {
    alert("Entered number is larger than the secret number");
  } else {
    alert(
      "congragulation on guessing the secret number,the number of tries used :" +
        tries
    );
    alert("tries remaining is :" + (n - tries));
    break;
  }
  
}
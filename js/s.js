const LOLSARCASM = [
  "im sure ur mom is happy for u!",
  "cool story bro lol",
  "your big ego gets me hot n bothered",
  "ur so cool!! haha",
  "haha nice!!!!!! lol",
  "u get a gold star my friend",
  "we get it, u lift",
  "that's chill dude haha",
  "that's great"
];

window.onload = function() {
  let rand = Math.floor(Math.random() * LOLSARCASM.length);
  document.getElementById("main-text-big").innerHTML = LOLSARCASM[rand];
};

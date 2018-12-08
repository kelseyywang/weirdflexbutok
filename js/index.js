const SOWHOLESOME = [
  "i know you’re capable of so many things and i’m so glad to be friends with such a talented person :)",
  "you’re incredible and i’m happy you’re pursuing everything you love <3",
  "i love that you’re so open about everything you’re passionate about :)",
  "you inspire me so much and all your different talents are so refreshing to see.",
  "your talents are so varied and i’m so grateful to be able to see you for the amazing person you are!",
  "you just made my day brighter, thanks for showing us everything that is you! <3",
  "i love that you show all sides of yourself, and i’d love to be able to do that more myself :)",
  "i appreciate that you’re so open about your talents, and your updates make me happy for you!",
  "your talents are awesome and never fail to inspire me :)",
  "that’s so awesome and i’m so grateful to know someone like you!",
  "i’m so happy to hear your update and hope everything else is going well for you!",
  "that’s great to hear and i’m happy to see you’re doing well :)",
  "i just want you to know that i really support you! keep doing you :)",
  "you're doing incredible things and i'm so happy for you!",
  "what you're doing is honestly inspiring and i hope it continues to go well!",
  "i love your updates on what you're up to and i admire everything you're doing <3"
];

const HAPPYTITLES = [
  "you're amazing",
  "you're awesome!",
  "keep it up!",
  "you inspire me every day!",
  "i support you!",
  "you're incredible",
  "yes!!",
  "that's really wonderful",
  "that's so awesome",
  "that's amazing!",
  "i'm so happy for you",
  "you're an inspiration",
  "you're a wonderful person",
  "you're so talented!",
  "i appreciate you!"
];

window.onload = function() {
  let rand = Math.floor(Math.random() * SOWHOLESOME.length);
  document.getElementById("main-text").innerHTML = SOWHOLESOME[rand];
  let rand2 = Math.floor(Math.random() * HAPPYTITLES.length);
  document.title = HAPPYTITLES[rand2];
};

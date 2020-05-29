// Epic misdirections
var mysteries = [];
grabTheMysteries(mysteryMachine);

function grabTheMysteries(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', '/src/mysteries.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      mysteries = JSON.parse(xhr.responseText)[0];
      callback();
    }
  };
  xhr.send(null);
}

function mysteryMachine() {
  var lilHandOfTime = new Date().getHours();
  var mysteryPool = lilHandOfTime >= 23 && lilHandOfTime <= 5 ? mysteries.questionable : mysteries.clean;
  var rnd = Math.floor(Math.random() * mysteryPool.length);
  document.getElementById('slogan').textContent = `the ${accentuate(mysteryPool[rnd])}`;
}

function accentuate(mystery) {
  return mystery.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}

// Epic sound FX
var lulululus = 0;
var vibes = new Howl({
  src: ['/src/lulululu.wav'],
  onplay: () => {
    document.body.className = 'focus'
    isLulululus = true;
  },
  onend: () => {
    document.body.className = '';
    mysteryMachine();
  }
});

function randlulululu() {
  return Math.floor(Math.random() * 3 + 3);
}

function lulululu() {
  if (vibes.playing())
    return;

  lulululus++;

  if (lulululus >= randlulululu()) {
    vibes.rate(0.5);
    lulululus = 0;
  } else
    vibes.rate(1);

  vibes.play();
}
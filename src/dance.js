loadJSON(mysterymachine);

function loadJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', '/src/mysteries.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200")
      callback(JSON.parse(xhr.responseText)[0]);
  };
  xhr.send(null);
}

function mysterymachine(mysteries) {
  const array = mysteries.clean;
  const rnd = Math.floor(Math.random() * array.length);
  document.getElementById('slogan').textContent = `the ${megalize(array[rnd])}`;
}

function megalize(mystery) {
  return mystery.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}
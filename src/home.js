function image() {
  var element = document.createElement('img');

  element.src = 'http://graduateinstitute.ch/files/live/sites/iheid/files/sites/public_relations/venues/venues_resto.jpg'
  return element;
}

function headline() {
  var element = document.createElement('div');

  element.innerHTML = "I'm not good at this creative stuff";
  return element;
}

function text() {
  var element = document.createElement('div');

  element.innerHTML = 'Come check out our amazing restaurant with this great view of trees!';
  return element;
}

const populateHome = (div) => {
  div.appendChild(image());
  div.appendChild(headline());
  div.appendChild(text());
}

export default populateHome;

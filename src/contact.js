function heading() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = "Contact Us";
  return element;
}

function address() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = 'This is the address';
  return element;
}

function map() {
  var element = document.createElement('img');

  // use your function!
  element.src = 'http://graduateinstitute.ch/files/live/sites/iheid/files/sites/public_relations/venues/venues_resto.jpg';
  return element;
}

const populateContact = (div) => {
  div.appendChild(heading());
  div.appendChild(address());
  div.appendChild(map());
}

export default populateContact;

function title() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = 'Our Menu';
  return element;
}

function items() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = "Food items";
  return element;
}

function descriptions() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = 'Here is what our food tastes like.';
  return element;
}

const populateMenu = (div) => {
  div.appendChild(title());
  div.appendChild(items());
  div.appendChild(descriptions());
}

export default populateMenu;

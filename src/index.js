import populateHome from './home';
import populateMenu from './menu'
import populateContact from './contact'

const tabsDiv = document.querySelector('#tabs');
const contentDiv = document.querySelector('#content');

function homeTab() {
  var element = document.createElement('div');

  element.innerHTML = "Home";
  element.classList += "tab left";
  return element;
}

function menuTab() {
  var element = document.createElement('div');

  element.innerHTML = "Menu";
  element.classList += "tab left";
  return element;
}

function contactTab() {
  var element = document.createElement('div');

  element.innerHTML = "Contact";
  element.classList += "tab";
  return element;
}

tabsDiv.appendChild(homeTab());
tabsDiv.appendChild(menuTab());
tabsDiv.appendChild(contactTab());

populateHome(contentDiv);

const tabs = document.querySelectorAll('.tab');

tabs.forEach(event => event.addEventListener('click', tabClick));

function tabClick() {
  contentDiv.innerHTML = '';
  if (this.innerHTML == 'Home') {
    populateHome(contentDiv);
  } else if (this.innerHTML == 'Menu') {
    populateMenu(contentDiv);
  } else if (this.innerHTML == 'Contact') {
    populateContact(contentDiv);
  }
}

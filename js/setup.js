'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');


// создание объекта со случайными данными
var generateWizard = function() {

  var wizard = {
    name: '',
    coatColor: '',
    eyesColor: ''
  }

  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var calcRandom = function(array) {
    var random = Math.floor(Math.random() * array.length);
    return random;
  };

  var randomInt = Math.floor(Math.random() * 2);
  var wizardName = names[calcRandom(names)];
  var wizardSurname = surnames[calcRandom(surnames)];

  var fullname = wizardName + ' ' + wizardSurname;
  if (randomInt) {
    fullname = wizardSurname + ' ' + wizardName;
  }

  wizard.name = fullname;
  wizard.coatColor = coatColors[calcRandom(coatColors)];
  wizard.eyesColor = eyesColors[calcRandom(eyesColors)];

  return wizard;
}

// создание массива объектов

var wizards = [];

for (var i = 0; i < 4; i++) {
  var wizard = generateWizard();
  wizards.push(wizard);
};

// создание DOM-элементов для объектов-волшебников

var createWizardCard = function(wizard) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var card = template.cloneNode(true);
  card.querySelector('.setup-similar-label').textContent = wizard.name;
  card.querySelector('.wizard-coat').setAttribute('fill', wizard.coatColor);
  card.querySelector('.wizard-eyes').setAttribute('fill', wizard.eyesColor);

  return card;
};

var renderSimilarCards = function(wizards) {
  var wizardsList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    var wizard = wizards[i];
    var wizardCard = createWizardCard(wizard);
    fragment.appendChild(wizardCard);
  }

  wizardsList.appendChild(fragment);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
}

renderSimilarCards(wizards);

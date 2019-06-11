var setup = document.querySelector('.setup');
setup.classList.remove('hidden');


// создание объекта
var generateWizard = function () {

  var wizard = {name: '',
    coatColor: '',
    eyesColor: ''
  }

  names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var calcRandom = function(array) {
    var random = Math.floor(Math.random() * array.length);
    return random;
  };

  var fullname = names[calcRandom(names)] + ' ' + surnames[calcRandom(surnames)];

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

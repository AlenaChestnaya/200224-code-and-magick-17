'use strict';

window.renderStatistics = function(ctx, names, times) {
  var startLeft = 130;
  var widthOfColumn = 40;
  var marginRightOfColumn = 50;
  var maxHeightOfColumn = 150;
  var marginTopOfHistogram = 95;

  var calculateStartX = function(numberOfColumn) {
    return startLeft + (widthOfColumn + marginRightOfColumn) * numberOfColumn;
  }
  var calculateStartY = function(heightOfColumn) {
    return marginTopOfHistogram + maxHeightOfColumn - heightOfColumn;
  }

  var maxTime = Math.round(Math.max.apply(null, times));
  var ratioHeightTime = maxHeightOfColumn / maxTime;

  // рисуем облако с заголовком
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.strokeStyle = 'grey';
  ctx.strokeRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);


  for (var i = 0; i < names.length; i++) {
    var time = Math.round(times[i]);
    var name = names[i];
    var heightOfColumn = time * ratioHeightTime;

    // рисуем текст с именами и временем
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(name, calculateStartX(i), 255);
    ctx.fillText(time, calculateStartX(i), calculateStartY(heightOfColumn) - 20);

    // задаем цвет колонкам
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var RandomSaturation = Math.round(Math.random() * 100);
      var saturateColor = 'hsl(255, ' + RandomSaturation + '%, 50%)';
      ctx.fillStyle = saturateColor;
    }

    // рисуем колонки
    ctx.fillRect(calculateStartX(i), calculateStartY(heightOfColumn), widthOfColumn, heightOfColumn);

  };
};

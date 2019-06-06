window.renderStatistics = function(ctx, names, times) {
  var startLeft = 130;
  var widthOfColumn = 40;
  var marginRightOfColumn = 50;
  var calculateStartX = function(numberOfColumn) {
    return startLeft + (widthOfColumn + marginRightOfColumn) * numberOfColumn ;
  }


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


  ctx.fillStyle = 'blue';
  ctx.fillRect(calculateStartX(0), 80, widthOfColumn, 150);

  ctx.fillStyle = 'pink';
  ctx.fillRect(calculateStartX(1), 80, widthOfColumn, 150);

  ctx.fillStyle = 'lightgreen';
  ctx.fillRect(calculateStartX(2), 80, widthOfColumn, 150);

  ctx.fillStyle = 'yellow';
  ctx.fillRect(calculateStartX(3), 80, widthOfColumn, 150);

};

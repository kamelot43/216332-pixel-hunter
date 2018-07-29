const BASE_VALUE = {
  correctAnswer: 100,
  quickCorrectAnswer: 50,
  slowCorrectAnswer: 50,
  timeForAnswer: 30,
  fastAnswer: 10,
  slowAnswer: 20,
  bonusForLife: 50,
  baseLifes: 3,
  fullGame: 10
};

const calcPoints = (array, lifes) => {
  let points = 0;

  const isTrue = array.filter((it) => {
    return it.answer === true;
  });


  if (lifes <= 0 || isTrue.length < BASE_VALUE.fullGame) {
    return -1;
  }

  array.forEach((it) => {
    if (it.answer === true && it.time <= BASE_VALUE.fastAnswer) {
      points += (BASE_VALUE.correctAnswer + BASE_VALUE.quickCorrectAnswer);
    } else if (it.answer === true && it.time >= BASE_VALUE.slowAnswer) {
      points += (BASE_VALUE.correctAnswer - BASE_VALUE.slowCorrectAnswer);
    } else if (it.answer === true && it.time > BASE_VALUE.fastAnswer && it.time < BASE_VALUE.slowAnswer) {
      points += BASE_VALUE.correctAnswer;
    }
  });

  return points + (lifes * BASE_VALUE.bonusForLife);
};

export default calcPoints;

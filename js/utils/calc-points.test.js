import {assert} from 'chai';
import calcPoints from './calc-points';

const allSuccessAnswers = [
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15}
];

const fastCorrectAnswers = [
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10}
];

const incorrectAnswers = [
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10},
  {answer: true, time: 10}
];

describe(`calculate points`, () => {

  it(`should return right points for all correct answers`, () => {
    assert.equal(calcPoints(allSuccessAnswers, 3), 1150);
  });

  it(`should return right points for all correct and quick answers`, () => {
    assert.equal(calcPoints(fastCorrectAnswers, 3), 1650);
  });

  it(`should return -1 at not finish game`, () => {
    assert.equal(calcPoints(incorrectAnswers, 3), -1);
    assert.equal(calcPoints(allSuccessAnswers, 0), -1);
  });


});

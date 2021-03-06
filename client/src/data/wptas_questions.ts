import { WPTASQuestion } from '../types/WPTAS';

const CORRECT_AGE = '22';
const CORRECT_DOB = new Date(1999, 0, 25);
const CORRECT_LOCATION = 'Epworth Hospital';
const CORRECT_NAME = 'Becky';

export const questions: Array<WPTASQuestion> = [
  {
    title: 'How old are you?',
    questionNum: 1,
    questionType: 'text',
    multichoiceGenerator: function (
      correctAnswer: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ): Array<string> {
      let correctAnswerNum = parseInt(correctAnswer);
      var myRandom =
        correctAnswerPositionOverride !== undefined
          ? correctAnswerPositionOverride
          : getRandom(3);
      switch (myRandom) {
        case 0:
          return [
            correctAnswerNum,
            correctAnswerNum + 1,
            correctAnswerNum + 2,
          ].map((n) => n.toString());
        case 1:
          return [
            correctAnswerNum - 1,
            correctAnswerNum,
            correctAnswerNum + 1,
          ].map((n) => n.toString());
        default:
          return [
            correctAnswerNum - 2,
            correctAnswerNum - 1,
            correctAnswerNum,
          ].map((n) => n.toString());
      }
    },
    correctAnswerGenerator: () => CORRECT_AGE,
  },
  {
    title: 'What is your date of birth?',
    questionNum: 2,
    questionType: 'date',
    multichoiceGenerator: function (
      correctAnswer: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ): Array<string> {
      var correctAnswerDate = new Date(correctAnswer);
      var myRandom =
        correctAnswerPositionOverride !== undefined
          ? correctAnswerPositionOverride
          : getRandom(3);
      switch (myRandom) {
        case 0:
          return [
            correctAnswerDate,
            addDays(correctAnswerDate, 1),
            addDays(correctAnswerDate, 2),
          ].map((d: Date) => d.toDateString());
        case 1:
          return [
            addDays(correctAnswerDate, -1),
            correctAnswerDate,
            addDays(correctAnswerDate, 1),
          ].map((d: Date) => d.toDateString());
        default:
          return [
            addDays(correctAnswerDate, -2),
            addDays(correctAnswerDate, -1),
            correctAnswerDate,
          ].map((d: Date) => d.toDateString());
      }
    },
    correctAnswerGenerator: () => CORRECT_DOB.toDateString(), //.toDateString(),
  },

  {
    title: 'What month are we in?',
    questionNum: 3,
    questionType: 'select',
    choices: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    multichoiceGenerator: function (
      correctAnswer: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ): Array<string> {
      var choices: Array<number> = [];
      var correctMonth: number;
      if (correctAnswer === 'January') {
        correctMonth = 0;
      } else if (correctAnswer === 'February') {
        correctMonth = 1;
      } else if (correctAnswer === 'March') {
        correctMonth = 2;
      } else if (correctAnswer === 'April') {
        correctMonth = 3;
      } else if (correctAnswer === 'May') {
        correctMonth = 4;
      } else if (correctAnswer === 'June') {
        correctMonth = 5;
      } else if (correctAnswer === 'July') {
        correctMonth = 6;
      } else if (correctAnswer === 'August') {
        correctMonth = 7;
      } else if (correctAnswer === 'September') {
        correctMonth = 8;
      } else if (correctAnswer === 'October') {
        correctMonth = 9;
      } else if (correctAnswer === 'November') {
        correctMonth = 10;
      } else if (correctAnswer === 'December') {
        correctMonth = 11;
      }

      var myRandom =
        correctAnswerPositionOverride !== undefined
          ? correctAnswerPositionOverride
          : getRandom(3);
      switch (myRandom) {
        case 0:
          choices.push(
            correctMonth,
            (correctMonth + 1) % 12,
            (correctMonth + 2) % 12
          );
          break;
        case 1:
          choices.push(
            (correctMonth - 1) % 12,
            correctMonth,
            (correctMonth + 1) % 12
          );
          break;
        default:
          choices.push(
            (correctMonth - 2) % 12,
            (correctMonth - 1) % 12,
            correctMonth
          );
          break;
      }

      let indexToMonth = (i) => {
        if (i === 0) {
          return 'January';
        } else if (i === 1) {
          return 'February';
        } else if (i === 2) {
          return 'March';
        } else if (i === 3) {
          return 'April';
        } else if (i === 4) {
          return 'May';
        } else if (i === 5) {
          return 'June';
        } else if (i === 6) {
          return 'July';
        } else if (i === 7) {
          return 'August';
        } else if (i === 8) {
          return 'September';
        } else if (i === 9) {
          return 'October';
        } else if (i === 10) {
          return 'November';
        } else if (i === 11) {
          return 'December';
        }
      };

      return choices.map(indexToMonth);
    },
    correctAnswerGenerator: function res(): string {
      var date = new Date();
      var month = date.getUTCMonth() + 1;
      if (month === 1) {
        return 'January';
      } else if (month === 2) {
        return 'February';
      } else if (month === 3) {
        return 'March';
      } else if (month === 4) {
        return 'April';
      } else if (month === 5) {
        return 'May';
      } else if (month === 6) {
        return 'June';
      } else if (month === 7) {
        return 'July';
      } else if (month === 8) {
        return 'August';
      } else if (month === 9) {
        return 'September';
      } else if (month === 10) {
        return 'October';
      } else if (month === 11) {
        return 'November';
      } else {
        return 'December';
      }
    },
  },

  {
    title: 'What time of day is it?',
    questionNum: 4,
    questionType: 'select',
    choices: ['Morning', 'Afternoon', 'Evening'],
    multichoiceGenerator: (): Array<string> => [
      'Morning',
      'Afternoon',
      'Evening',
    ],
    correctAnswerGenerator: function res(): string {
      var date: Date = new Date();
      var hour: number = date.getHours();
      if (hour >= 12 && hour < 17) {
        return 'Afternoon';
      } else if (hour >= 17) {
        return 'Evening';
      } else {
        return 'Morning';
      }
    },
  },
  {
    title: 'What day of the week is it?',
    questionNum: 5,
    questionType: 'select',
    choices: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    multichoiceGenerator: function (
      correctAnswer: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ): Array<string> {
      var choices: Array<number> = [];
      var correctDay: number;
      if (correctAnswer === 'Sunday') {
        correctDay = 0;
      } else if (correctAnswer === 'Monday') {
        correctDay = 1;
      } else if (correctAnswer === 'Tuesday') {
        correctDay = 2;
      } else if (correctAnswer === 'Wednesday') {
        correctDay = 3;
      } else if (correctAnswer === 'Thursday') {
        correctDay = 4;
      } else if (correctAnswer === 'Friday') {
        correctDay = 5;
      } else if (correctAnswer === 'Saturday') {
        correctDay = 6;
      }
      var myRandom =
        correctAnswerPositionOverride !== undefined
          ? correctAnswerPositionOverride
          : getRandom(3);
      switch (myRandom) {
        case 0:
          choices.push(correctDay, (correctDay + 1) % 7, (correctDay + 2) % 7);
          break;
        case 1:
          choices.push((correctDay - 1) % 7, correctDay, (correctDay + 1) % 7);
          break;
        default:
          choices.push((correctDay - 2) % 7, (correctDay - 1) % 7, correctDay);
          break;
      }

      let indexToDay = (i) => {
        if (i === 0) {
          return 'Sunday';
        } else if (i === 1) {
          return 'Monday';
        } else if (i === 2) {
          return 'Tuesday';
        } else if (i === 3) {
          return 'Wednesday';
        } else if (i === 4) {
          return 'Thursday';
        } else if (i === 5) {
          return 'Friday';
        } else {
          return 'Saturday';
        }
      };

      return choices.map(indexToDay);
    },
    correctAnswerGenerator: function res(): string {
      var date = new Date();
      var day = date.getDay();
      if (day === 0) {
        return 'Sunday';
      } else if (day === 1) {
        return 'Monday';
      } else if (day === 2) {
        return 'Tuesday';
      } else if (day === 3) {
        return 'Wednesday';
      } else if (day === 4) {
        return 'Thursday';
      } else if (day === 5) {
        return 'Friday';
      } else if (day === 6) {
        return 'Saturday';
      }
    },
  },

  {
    title: 'What year are we in?',
    questionNum: 6,
    questionType: 'text',
    multichoiceGenerator: function (
      correctAnswer: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ): Array<string> {
      let correctAnswerNum = parseInt(correctAnswer);
      var myRandom =
        correctAnswerPositionOverride !== undefined
          ? correctAnswerPositionOverride
          : getRandom(3);
      switch (myRandom) {
        case 0:
          return [
            correctAnswerNum,
            correctAnswerNum + 1,
            correctAnswerNum + 2,
          ].map((d) => d.toString());
        case 1:
          return [
            correctAnswerNum - 1,
            correctAnswerNum,
            correctAnswerNum + 1,
          ].map((d) => d.toString());
        default:
          return [
            correctAnswerNum - 2,
            correctAnswerNum - 1,
            correctAnswerNum,
          ].map((d) => d.toString());
      }
    },
    correctAnswerGenerator: function res(): string {
      var date = new Date();
      var year = date.getUTCFullYear();
      return year.toString();
    },
  },

  {
    title: 'What is the name of this place?',
    questionNum: 7,
    questionType: 'text',
    multichoiceGenerator: (
      correctAnswer: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ) =>
      [correctAnswer, 'Alfred Hospital', 'Wilamstown Hospital'].sort(
        Math.random
      ),
    correctAnswerGenerator: (): string => CORRECT_LOCATION,
  },

  // Or change question type to 'special'?
  {
    title: 'Face',
    questionNum: 8,
    questionType: 'face_question',
    image_names: ['becky', 'brian', 'brock'],
    correctAnswerGenerator: () => CORRECT_NAME.toLowerCase(),
  },
  {
    title: 'Name',
    questionNum: 9,
    questionType: 'text',
    multichoiceGenerator: (
      c: string,
      correctAnswerPositionOverride?: 0 | 1 | 2
    ): Array<string> => [c, 'Brian', 'Brock'],
    correctAnswerGenerator: (): string => CORRECT_NAME,
  },

  {
    title: 'Pictures',
    questionNum: [10, 11, 12],
    questionType: 'pictures_question',
    image_names: [
      'clock',
      'fork',
      'scissors',
      'teacup',
      'toothbrush',
      'sunflower',
      'pen',
      'keys',
      'bird',
    ],
    correctAnswerGenerator: () => ['fork', 'scissors', 'bird'],
    newPics: (_) => ['fork', 'scissors', 'bird'],
  },
];

export const questionTitles = [
  'How old are you?',
  'What is your date of birth?',
  'What month are we in?',
  'What time of day is it?',
  'What day of the week is it?',
  'What year are we in?',
  'What is the name of this place?',
  'Face',
  'Name',
  'Picutre I',
  'Picutre II',
  'Picutre III',
];

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

export const question_count = 12;

// first content
const mockScreenTitle = 'Нажми Ок и передай телефон следующему игроку';
const firstScreenText = 'Передай телефон первому игроку';
const mockScreenText =
  'Нажми ок когда будешь готов и передай следующему игроку';

// question content
const questionTitle = 'Посмотри свою карточку';
const questionText = 'Посмотри свою карточку';

// spy content
const spyTitle = 'Постарайся понять, о какой локации говорят местные';
const spyText = 'Постарайся понять, о какой локации говорят местные';
const spyLocation = 'Ты шпион';

// player content
const playerTitle =
  'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них шпион';
const playerText =
  'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них шпион';
const additionalPlayerText = 'Нажми и следуй правилам';

const generateNewGame = (playersCount, pack) => {
  const spyNumber = Math.ceil(Math.random() * playersCount) * 3;
  const spy = spyNumber % 3 === 0 ? spyNumber - 1 : spyNumber;

  const location = pack.places[Math.round(Math.random() * pack.places.length)];
  const screensCount = playersCount * 3;
  const arr = Array(screensCount)
    .fill()
    .map((_, i) => {
      if (i === 0) {
        return {
          id: i,
          title: mockScreenTitle,
          text: firstScreenText,
          image: require('../assets/rolesScreen/ok-screen.svg'),
          buttonText: 'Ок',
        };
      }
      if (i === spy) {
        return {
          id: i,
          title: spyTitle,
          text: spyText,
          location: spyLocation,
          image: require('../assets/rolesScreen/spy.svg'),
          buttonText: 'Понял',
          isSpy: true,
        };
      }
      if (i % 3 === 0) {
        return {
          id: i,
          title: mockScreenTitle,
          text: mockScreenText,
          image: require('../assets/rolesScreen/ok-screen.svg'),
          buttonText: 'Ок',
        };
      }
      if (i % 3 === 1) {
        return {
          id: i,
          title: questionTitle,
          text: questionText,
          image: require('../assets/rolesScreen/questions.svg'),
          buttonText: 'Смотреть',
        };
      }
      if (i % 3 === 2) {
        return {
          id: i,
          title: playerTitle,
          text: 'место',
          location: location,
          additionalText: additionalPlayerText,
          buttonText: 'Понял',
        };
      }
      return;
    });

  return arr;
};

export default generateNewGame;

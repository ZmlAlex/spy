const firstScreenTitle = 'Передай телефон первому игроку';
const mockScreenTitle = 'Передай телефон следующему игроку';
const mockScreenText = 'Нажми ок когда будешь готов';

const spyTitle = 'Ты шпион';
const spyText = 'Постарайся понять, о какой локации говорят местные';

const playerText =
  'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них Шпион';

const generateNewGame = (playersCount, pack) => {
  const spyNumber = Math.ceil(Math.random() * playersCount) * 2;
  const spy = spyNumber % 2 === 0 ? spyNumber - 1 : spyNumber;

  const location = pack.places[Math.round(Math.random() * pack.places.length)];
  const screensCount = playersCount * 2;
  const arr = Array(screensCount)
    .fill()
    .map((_, i) => {
      if (i === 0) return {title: firstScreenTitle, text: mockScreenText};
      if (i === spy) return {title: spyTitle, text: spyText};
      if (i % 2 === 1) return {title: location, text: playerText};
      if (i % 2 === 0) return {title: mockScreenTitle, text: mockScreenText};
      return;
    });

  return arr;
};

export default generateNewGame;

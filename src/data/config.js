export const players = Array(15)
  .fill()
  .map((_, index) => ({number: index + 3}));

export const minutes = Array(30)
  .fill()
  .map((_, index) => ({number: index + 1}));

export const packs = [
  {
    name: 'Базовый',
    places: [
      'Аэропорт',
      'Бар',
      'Пляж',
      'Кафе',
      'Кинотеатр',
      'Цирк',
      'Концертный зал',
    ],
  },
  {
    name: 'Страны',
    places: [
      'Россия',
      'США',
      'Англия',
      'Франция',
      'Китай',
      'Португалия',
      'Япония',
    ],
  },
];

export const optionsList = [
  {
    title: 'Игроки',
    icon: 'rowing',
    config: 'Игроки',
  },
  {
    title: 'Таймер',
    icon: 'av-timer',
    config: 'Таймер',
  },
  {
    title: 'Набор',
    icon: 'package',
    config: 'Набор',
  },
];

export const tutorialSlides = [
  {
    key: 1,
    title: 'Cыграем в Шпиона ?',
    text: 'Листай дальше и узнай, что нужно делать.',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    text:
      'В игре участвуют местные и Шпион. Передеавайте друг другу телефон, чтобы узнать свои роли. Всем...',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    text:
      'Задавайте друг другу вопросы связнные с данной локацией. Например: Когда ты по...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    text:
      'Прислушивайтесь к ответам других игроков: Шпион не знает локацию, из-за чего может отвеча...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 5,
    text:
      'Если подозреваешь кого-то в шпионаже, скажи : <Я знаю, кто Шпион>. На счет <три> все вместе',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 6,
    text:
      'Выбрали одного и того же человека? Он должен раскрыть свою роль. Если это действительно Шпион...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 7,
    text:
      'Если шпион догадался, о каком месте говорят местные, он может его назвать. Если он угадывает',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 8,
    text:
      'Не забывайте про таймер! Время игры ограничего стоит поторопиться...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

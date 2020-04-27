export const players = Array(10)
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

export const languagesList = [
  {
    title: 'English',
    avatarUrl: require('../assets/languageScreen/rus.png'),
    value: 'en',
  },
  {
    title: 'Русский',
    avatarUrl: require('../assets/languageScreen/rus.png'),
    value: 'ru',
  },
];

export const translationsObject = {
  en: {
    application: {
      title: 'Awesome app with i18n!',
      hello: 'Hello, %{name}!',
    },
    languageScreen: {
      title: 'Choose language',
      buttonText: 'Next',
    },
    tutorialScreen: {
      slides: [
        {
          title: 'Cыграем в Шпиона ?',
          text: 'Листай дальше и узнай, что нужно делать.',
          // image: require('./assets/1.jpg'),
          backgroundColor: '#59b2ab',
        },
        {
          text:
            'В игре участвуют местные и Шпион. Передеавайте друг другу телефон, чтобы узнать свои роли. Всем...',
          // image: require('./assets/2.jpg'),
          backgroundColor: '#febe29',
        },
        {
          text:
            'Задавайте друг другу вопросы связнные с данной локацией. Например: Когда ты по...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Прислушивайтесь к ответам других игроков: Шпион не знает локацию, из-за чего может отвеча...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Если подозреваешь кого-то в шпионаже, скажи : <Я знаю, кто Шпион>. На счет <три> все вместе',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Выбрали одного и того же человека? Он должен раскрыть свою роль. Если это действительно Шпион...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Если шпион догадался, о каком месте говорят местные, он может его назвать. Если он угадывает',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Не забывайте про таймер! Время игры ограничего стоит поторопиться...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
      ],
    },
    date: {
      long: 'MMMM Do, YYYY',
    },
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: 'Line 1<br />Line 2',
    literal_two_lines: 'Line 1\
  Line 2',
  },
  ru: {
    application: {
      title: 'Выбери язык',
      buttonText: 'Дальше',
    },
    languageScreen: {
      title: 'Выбери язык',
      buttonText: 'Дальше',
    },
    tutorialScreen: {
      slides: [
        {
          title: 'Cыграем в Шпиона ?',
          text: 'Листай дальше и узнай, что нужно делать.',
          // image: require('./assets/1.jpg'),
          backgroundColor: '#59b2ab',
        },
        {
          text:
            'В игре участвуют местные и Шпион. Передеавайте друг другу телефон, чтобы узнать свои роли. Всем...',
          // image: require('./assets/2.jpg'),
          backgroundColor: '#febe29',
        },
        {
          text:
            'Задавайте друг другу вопросы связнные с данной локацией. Например: Когда ты по...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Прислушивайтесь к ответам других игроков: Шпион не знает локацию, из-за чего может отвеча...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Если подозреваешь кого-то в шпионаже, скажи : <Я знаю, кто Шпион>. На счет <три> все вместе',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Выбрали одного и того же человека? Он должен раскрыть свою роль. Если это действительно Шпион...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Если шпион догадался, о каком месте говорят местные, он может его назвать. Если он угадывает',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
          text:
            'Не забывайте про таймер! Время игры ограничего стоит поторопиться...',
          // image: require('./assets/3.jpg'),
          backgroundColor: '#22bcb5',
        },
      ],
    },
    date: {
      long: 'D MMMM YYYY',
    },
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2',
    literal_two_lines: 'Regel 1\
  Regel 2',
  },
};

function questions() {

  const optionStyle = {
    style1: [
      'Never or rarely',
      'One or more time daily',
      '15 or more times daily'
    ],
    style2: [
      'Never or rarely',
      'Mild or occasional',
      'Marked or notable',
    ],
    style3: [
      'Never or rarely',
      'Mild or occasional (does not affect others)',
      'Marked or notable (occasionally affects others)'
    ],
    style4: [
      'Never or rarely',
      'Mild or occasional (not entirely resistant to change or new things)',
      'Marked or notable (will tolerate changes when necessary)'
    ],
    style5: [
      'A range of different and flexible self-chosen activities',
      'Some varied and flexible interests but commonly choose the same activities',
      'Almost always choose from a restricted range of repetitive activities'
    ]
  }

  const questions = [
    {
      id: 1,
      title: 'Do you like to arrange items in rows or patterns?',
      options: optionStyle.style1
    },
    {
      id: 2,
      title: 'Do you repetitively fiddle with items?',
      eg: '(e.g. spin, twiddle, bang, tap, twist, or flick anything repeatedly?)',
      options: optionStyle.style1
    },
    {
      id: 3,
      title: 'Do you like to spin yourself around and around?',
      options: optionStyle.style1
    },
    {
      id: 4,
      title: 'Do you rock backwards and forwards, or side to side, either when sitting or when standing?',
      options: optionStyle.style1
    },
    {
      id: 5,
      title: 'Do you pace or move around repetitively',
      eg: '(e.g. walk to and fro across a room, or around the same path in the garden?)',
      options: optionStyle.style1
    },
    {
      id: 6,
      title: 'Do you make repetitive hand and/or finger movements?',
      eg: '(e.g. flap, wave, or flick your hands or fingers repetitively?)',
      options: optionStyle.style2
    },
    {
      id: 7,
      title: 'Do you have a fascination with specific objects',
      eg: '(e.g. trains, road signs, or other things?)',
      options: optionStyle.style2
    },
    {
      id: 8,
      title: 'Do you like to look at objects from particular or unusual angles?',
      options: optionStyle.style2
    },
    {
      id: 9,
      title: 'Do you have a special interest in the smell of people or objects?',
      options: optionStyle.style2
    },
    {
      id: 10,
      title: 'Do you have a special interest in the feel of different surfaces?',
      options: optionStyle.style2
    },
    {
      id: 11,
      title: 'Do you have any special objects you like to carry around?',
      options: optionStyle.style2
    },
    {
      id: 12,
      title: 'Do you collect or hoard items of any sort?',
      options: optionStyle.style2
    },
    {
      id: 13,
      title: 'Do you insist on things at home remaining the same?',
      eg: '(e.g. furniture staying in the same place, things being kept in certain places, or arranged in certain ways?)',
      options: optionStyle.style3
    },
    {
      id: 14,
      title: 'Do you get upset about minor changes to objects',
      eg: '(e.g. flecks of dirt on your clothes, minor scratches on objects?)',
      options: optionStyle.style3
    },
    {
      id: 15,
      title: 'Do you insist that aspects of daily routine must remain the same?',
      options: optionStyle.style3
    },
    {
      id: 16,
      title: 'Do you insist on doing things in a certain way or re-doing things until they "just right"?',
      options: optionStyle.style3
    },
    {
      id: 17,
      title: 'Do you play the same music, game or video, or read the same book repeatedly?',
      options: optionStyle.style3
    },
    {
      id: 18,
      title: 'Do you insist on wearing the same clothes or refuse to wear new clothes?',
      options: optionStyle.style4
    },
    {
      id: 19,
      title: 'Do you insist on eating the same foods, or a very small range of foods, at every meal?',
      options: optionStyle.style4
    },
    {
      id: 20,
      title: 'What sort of activity will you choose if you are left to occupy yourself?',
      options: optionStyle.style5
    },
  ]

  return {
      scores: [],
      score: 0,
      questions: [],
      answers: [],
      init () {
        this.getData()
      },
      calculateScore(e) {
        this.scores[e.target.name] = parseInt(e.target.value);
        this.score = this.scores.reduce(function(a, b) {
          return a + b;
        }, 0);
      },
      getData () {
        this.questions = questions;
      },
    }
  }


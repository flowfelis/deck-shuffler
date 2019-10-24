var app = new Vue({
  el: '#app',
  data: {
    randomCards: [],
    cards: {
      types: ['spade', 'heart', 'diamond', 'club'],
      numbers: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    },
  },
  methods: {
    init: function () {
      this.shuffleCards();
    },
    getRandomValue: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getRandomCard: function () {
      var randomCard = {};

      var randomType = this.getRandomValue(this.cards.types);
      var randomNumber = this.getRandomValue(this.cards.numbers);

      randomCard.type = randomType;
      randomCard.number = randomNumber;

      return randomCard

    },
    cardExistsIn: function (randomCard, cards) {
      for (var i = 0; i < cards.length; i++) {
        var item = cards[i];
        if (JSON.stringify(item) === JSON.stringify(randomCard)) {
          return true
        }

      }
      return false
    },
    shuffleCards: function () {
      this.randomCards = [];
      while (this.randomCards.length < 5) {
        var randomCard = this.getRandomCard();
        if (!this.cardExistsIn(randomCard, this.randomCards)) {
          this.randomCards.push(randomCard);
        }
      }
    },
    getImgFile: function (card) {
      return 'img/' + card + '.png';
    }
  }

});

app.init();
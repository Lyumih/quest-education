let createWord = (id, word, opred, note, books, question, ex) => {
  return { id, word, opred, note, books, question, ex };
};

const words = [
  createWord(1, "Java"),
  createWord(2, "Синтаксис"),
  createWord(3, "ООП"),
  createWord(4, "Лучшие практики")
];

const graphs = [
  [1, 2, 3, 4],
  [2, 7, 8],
  [3, 9, 10, 11, 12],
  [4, 13, 14],
  [5, 15],
  [6, 16]
];

let app = new Vue({
  el: "#app",
  data: {
    words: words,
    graphs: graphs
  },
  computed: {
    graphTable() {
      let table = [];
      this.words.forEach(word => {
        let position = { tr: "2", td: "3" };
        let line = table[2];
        line.push(word.id);
        table[2] = line;
      });

      return table;
    }
  },
  methods: {
    findInGraph(word) {
      return { tr: 1, td: 1 };
    }
  }
});

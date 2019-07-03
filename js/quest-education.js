Vue.component("word-item", {
  props: ["word", "start"],
  template: `
  <div>
  <template v-if="!done">
    <span>{{ word.id }} </span><input v-model="search" :title="word.name" :id="'word-' + word.id">
  </template>
  <template v-if="done">
  <div>
    <p>Слово: {{word.name}}</p>
    <p>Определение: {{ word.defenition }}</p>
    <p>Описание: {{ word.note }}</p>
  </div>
  </template>
  </div>`,
  data() {
    return {
      search: "",
    };
  },
  computed: {
    done() {
      if (
        this.search.toLowerCase().trim() ==
        this.word.name.toLowerCase().substr(0, this.word.name.length - 1)
      ) {
        return true;
      }
      if (this.start.toLowerCase() == this.word.name.toLowerCase())
        return true;
      return false
    }
  },
});

let app = new Vue({
  el: "#app",
  data: {
    words: words,
    graphs: graphs,
    table: tableExample,
    start: ''
  },
  computed: {
    graphTable() {
      return this.table;
    },
    findStartWord() {
      if (this.start == '') return false
      if (this.words.filter(word => word.name === this.start).length === 0) {
        console.log('Word not found', this.start)
        return false
      } else {
        return true
      }
    }
  },
  watch: {},
  methods: {
    findInGraph(word) {
      return {
        tr: 1,
        td: 1
      };
    },
    getWord(id) {
      return this.words.filter(word => word.id == id)[0];
    },
  },

});
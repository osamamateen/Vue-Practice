var one = new Vue({
  el: "#root-1",
  data: {
    title: "View App One",
  },
  methods: {},
  computed: {
    greet: function () {
      return "Hello from One";
    },
  },
});

var two = new Vue({
  el: "#root-2",
  data: {
    title: "View App Two",
  },
  methods: {
    changeTitle: function () {
      this.title = "Changed";
    },
  },
  computed: {
    greet: function () {
      return "Hello from Two";
    },
  },
});

two.title = "Changed from outside";

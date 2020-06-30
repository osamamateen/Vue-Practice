Vue.component("greeting", {
  template:
    "<p>Hey there {{name}}. <button @click='changeName'>Change Name</button></p>",
  data: function () {
    return {
      name: "Osama",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Mateen";
    },
  },
});

var one = new Vue({
  el: "#root-1",
  data: {
    title: "View App One",
  },
  methods: {},
});

var two = new Vue({
  el: "#root-2",
  data: {
    title: "View App Two",
  },
  methods: {},
});

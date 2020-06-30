new Vue({
  el: "#root",
  data: {
    output: "",
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs);
      this.output = this.$refs.text.value;
      this.$refs.test.innerHTML = "<h4>" + this.output + "</h4>";
    },
  },
});

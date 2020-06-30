new Vue({
  el: "#root",
  data: {
    newTodo: "",
    todos: [],
    done: false,
    error: false,
  },
  methods: {
    addnew: function () {
      this.todos.push({ title: this.newTodo, done: false });
      this.newTodo = "";
    },
    remove: function (todo) {
      this.todos.splice(todo, 1);
    },
  },
});

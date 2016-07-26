var pageVm = new Vue({
	el: '#app',
	data: {
		newTodo: '',
		todos: [{
			text: 't01'
		}]
	},
	methods: {
		addTodo: function() {
			var text = this.newTodo.trim();
			if (text) {
				this.todos.push({
					text: text
				});
				this.newTodo = '';
			}
		},
		removeTodo: function(index) {
			this.todos.splice(index, 1)
		},
		showResult: function() {
			alert(JSON.stringify(this.todos));
		}
	}

});
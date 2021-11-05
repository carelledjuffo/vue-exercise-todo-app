import axios from "axios"

export default {
    async getTodos() {
        try {
            let res = await axios.get("http://localhost:8080/todolist");
            return  res.data.todoList;
        }catch (error) {
            console.log(error);
        }

    },
    async postNewTodo(todoTitle) {
        axios.post('http://localhost:8080/entry',
            { title: todoTitle },{
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    },
    async deleteTodo(toId) {
        try {
            await axios.delete('http://localhost:8080/entry/' + toId)
            console.log(toId);
        } catch (error) {
            console.log(error);

        }

    },
    async markAsDone(toId) {
        try {
            await axios.put('http://localhost:8080/done/' + toId)
            console.log(toId);
        } catch (error) {
            console.log(error);

        }
    },
    async markAsUndone(toId) {
        try {
            await axios.put('http://localhost:8080/undone/' + toId)
            console.log(toId);
        } catch (error) {
            console.log(error);

        }
    }


}
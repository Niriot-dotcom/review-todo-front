import axios from "axios";

const URL = "https://review-todo-back.herokuapp.com/todos";

export const getTodos = () => {
  return axios.get(URL);
};

export const createTodo = (newTodo) => {
  axios.post(URL, newTodo);
};

export const deleteTodo = (idTodo) => {
  axios.post(URL + "/del", idTodo);
};

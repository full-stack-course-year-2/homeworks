const baseUrl = "https://jsonplaceholder.typicode.com/";
const select = document.querySelector("#users");
const tableElement = document.querySelector("#tbody");
const search = document.querySelector("#search");

let userTodos = [];
let str = "";

const getUsers = () => {
  return axios.get(`${baseUrl}users`);
};

const getTodos = async (userId) => {
  const todos = await axios.get(`${baseUrl}todos?userId=${userId}`);
  userTodos = todos.data;
  return todos;
};

const searchTodos = (str) => {
  const temp = userTodos.filter((item) => item.title.includes(str));

  makeList(temp);
};

const changeStatus = (id) => {
  const index = userTodos.findIndex((item) => item.id == id);

  //   if (userTodos[index].completed == true) {
  //     userTodos[index].completed = false;
  //   } else {
  //     userTodos[index].completed = true;
  //   }

  userTodos[index].completed = !userTodos[index].completed;

  if (str == "") {
    makeList(userTodos);
  } else {
    searchTodos(str);
  }
};

const makeList = (data) => {
  tableElement.innerHTML = "";

  data.forEach((todo) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td_2 = document.createElement("td");
    const button = document.createElement("button");

    td.innerHTML = todo.completed ? `<del>${todo.title}</del>` : todo.title;
    button.innerHTML = todo.completed ? "done" : "un-done";
    button.className = todo.completed ? "btn btn-success" : "btn btn-warning";
    button.id = todo.id;
    button.addEventListener("click", (e) => {
      changeStatus(e.target.id);
    });

    tr.appendChild(td);
    tr.appendChild(td_2);
    td_2.appendChild(button);

    tableElement.appendChild(tr);
  });
};

window.addEventListener("load", async () => {
  const { data } = await getUsers();
  data.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;
    select.appendChild(option);
  });
});

select.addEventListener("change", async (e) => {
  const { data } = await getTodos(e.target.value);

  makeList(data);
});

search.addEventListener("input", (e) => {
  str = e.target.value;

  searchTodos(e.target.value);
});
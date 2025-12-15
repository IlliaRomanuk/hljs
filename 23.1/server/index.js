const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./mongo/todo.model");
const connect = mongoose.connect(
  "mongodb+srv://iluhaodessit_db_user:4LwsU6rDca6lV8oN@cluster0.jkzyidw.mongodb.net/?appName=Cluster0"
);
connect.then(() => console.log("DB connected!"));
app.use(cors());
app.use(express.json());
app.listen(8080, () => {
  console.log("server is runing on localhost 8080...");
});
app.get("/", (req, res) => {
  //   res.send("hello");
  TodoModel.find().then((data) => res.send(data));
});
let todo = [
  {
    id: "42342354235",
    text: "gfegdfeg",
    checked: false,
  },
];
app.post("/todos", (req, res) => {
  //   todo.push({
  //     ...req.body,
  //     id: +new Date(),
  //   });
  //   res.send(todo);

  const todo = new TodoModel(req.body);
  todo.save().then((data) => response.send(data));
});
// app.delete('/todos/:id', (req, res) =>{
//     const id = request.params.id;
//     todo = todo.filter(tod => tod.id != +id )
//     res.send(todo);
// })

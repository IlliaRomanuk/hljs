const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./mongo/todo.model");
// const todoModel = require("./mongo/todo.model");
const connect = mongoose.connect(
  "mongodb+srv://iluhaodessit_db_user:4LwsU6rDca6lV8oN@cluster0.jkzyidw.mongodb.net/?appName=Cluster0"
);
connect.then(() => console.log("DB connected!"));
app.use(cors());
app.use(express.json());
app.listen(8080, () => {
  console.log("server is runing on localhost 8080...");
});
app.get("/todos", (req, res) => {
 
  TodoModel.find().then((data) => res.send(data));
});
app.post("/todos", (req, res) => {
  const todo = new TodoModel(req.body);
  todo.save().then((data) => res.send(data));
});
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.deleteOne({ _id: id }).then((data) => {
    if (!data.deletedCount) {
      res.status(404).send({ mesage: "todo were not found" });
    } else {
      res.send(data);
    }
  });
});
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.updateOne({ _id: id }, req.body).then((data) => res.send(data));
});
//--//

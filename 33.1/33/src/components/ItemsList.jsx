import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  deleteTodo,
  checkTodoRequest,
  editTodoStart,
  editTodoCancel,
  editTodoOpen,
} from "../redux/slices/todoSlice";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
const ItemsList = () => {
  const editingId = useSelector((state) => state.todos.editingId);
  const [editValue, setEditValue] = useState("");

  const items = useSelector((state) => state.todos.items);
  const isLoading = useSelector((state) => state.todos.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  const handleDeleteItem = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box sx={{ width: "100%", mt: 10, bgcolor: "background.paper" }}>
      <List>
        {items.map((item) => (
          <div key={item.id}>
            <Divider />
            <ListItem>
              <Checkbox
                checked={item.checked}
                {...label}
                onChange={() =>
                  dispatch(
                    checkTodoRequest({
                      id: item.id,
                      name: item.name,
                      checked: item.checked,
                    })
                  )
                }
              />
              {editingId === item.id ? (
                <TextField
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <ListItemText primary={item.name} />
              )}
              {editingId === item.id ? (
                <>
                  <Button
                    onClick={() =>
                      dispatch(
                        editTodoStart({
                          id: item.id,
                          name: editValue,
                          checked: item.checked,
                        })
                      )
                    }
                    disabled={!editValue.trim() || isLoading}
                  >
                    Save
                  </Button>

                  <Button onClick={() => dispatch(editTodoCancel())}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(editTodoOpen(item.id));
                    setEditValue(item.name);
                  }}
                >
                  Edit
                </Button>
              )}
              <Button
                color="error"
                onClick={() => dispatch(deleteTodo(item.id))}
                disabled={isLoading}
              >
                Delete
              </Button>
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;

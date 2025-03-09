import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the Todo List component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  
  fireEvent.click(todoItem);
  
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});

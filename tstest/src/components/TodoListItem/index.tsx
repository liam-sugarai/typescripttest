import React from "react";
import styled from "styled-components";

const CompletedLabel = styled.label`
  text-decoration: line-through;
`;

const Label = styled.label``

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <li>
      {todo.complete ? (
        <CompletedLabel>
          <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
          {todo.text}{" "}
        </CompletedLabel>
      ) : (
        <Label>
          <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
          {todo.text}{" "}
        </Label>
      )}
    </li>
  );
};

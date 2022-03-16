import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const AddTask = ({ todos, setTodos }) => {
  const [form, setForm] = useState({ task: "", date: "" });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, form]);
    setForm({ task: "", date: "" });
  };
  useEffect(() => {}, [todos]); //todo eklendigi zaman render edilsin bi defa componentDidmount
  return (
    <div>
      <h1>Add Task</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="ADD TASK"
            name="task"
            onChange={handleForm}
            value={form.task}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date & Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="ADD DAY & TIME"
            name="date"
            onChange={handleForm}
            value={form.date}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={addTodo}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;

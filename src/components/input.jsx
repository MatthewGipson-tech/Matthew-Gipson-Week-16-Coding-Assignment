import "./App.css";

import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";
import { useState } from "react";
import {React } from 'react';

function MyInput() {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    );
  }


export default MyInput;






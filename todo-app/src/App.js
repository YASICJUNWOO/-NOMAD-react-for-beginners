import {useState, useEffect} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
    
  };
  return (
    <div>
      <h1>My To Dos({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
      <input
      placeholder="Write"
      onChange={onChange}
      value={toDo}
      type="text"
      />  
      <button>Add To Do</button>
      </form>
      <hr></hr>
      {toDos.map(
        (item, index) => (<li key={index}>{item}</li>)
        )}
    </div>
  );
}

export default App;
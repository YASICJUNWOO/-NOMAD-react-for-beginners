import Button from "./Button";
import {useState} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] =useState("");
  const onClick = () => setValue((prev) => prev + 1 );

  return (
   <div>
    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
      />
    <h1>{counter}</h1>
    <Button onClick={onClick}></Button>
   </div>
  );
}

export default App;

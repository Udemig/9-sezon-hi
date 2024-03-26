import { useEffect, useState } from "react";
import Sayac from "./components/classComp";
import FilterUser from "./components/FilterUser";
import Paper from "./components/functionComp";
import Person from "./components/Person";
import RefTest from "./components/refTest";
function App() {
  const [todo, setTodos] = useState({
    id: "1",
    title: "react işlenilecek",
    date: "26 mart 2024",
    isDone: true,
  });
  useEffect(() => {
    fetch("http://localhost:3060/todos", {
      method: "POST", // istek türü
      headers: {
        "Content-Type": "application/json", // veri tipi tanımlama
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      {/* <Sayac /> */}
      {/* <Paper /> */}
      {/* <Person /> */}
      {/* <RefTest /> */}
      <FilterUser />
    </div>
  );
}

export default App;

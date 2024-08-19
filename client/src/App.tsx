import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/item").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;

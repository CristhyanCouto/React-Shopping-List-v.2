import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./itemCard";

function App() {

  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:3001/item").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleGroup = (e: any) => {
    const group = e.target.value;
    if (group === "all") {
      axios.get("http://localhost:3001/item").then((res) => {
        setData(res.data);
      });
      
    } else {
      axios.get(`http://localhost:3001/item/group/${group}`).then((res) => {
        setData(res.data);
      }
      );
    }
  };

  return (
    <div>
        <div
        className="w-full flex justify-center my-5">
            <input
            className="w-[75%] p-2 border-2 border-gray-300 rounded-lg 
            focus:outline-none focus:border-blue-500
            "
            type="text"
            placeholder="Pesquisa..."
            onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={handleGroup}
            className="w-[50%] md:w-[20%] p-2 border-2 border-gray-300 rounded-lg 
            focus:outline-none focus:border-blue-500
            ">
                <option value="all">All</option>
                <option value="Pets">Animais de Estimação</option>
                <option value="Toys">Brinquedos</option>
                <option value="Shoes">Calçados</option>
                <option value="Home-Appliance">Eletrodomésticos</option>
                <option value="Electronic">Eletrônicos</option>
                <option value="Games">Jogos</option>
                <option value="Forniture">Móveis</option>
                <option value="Clothes">Roupas</option>
                <option value="Video-Games">Video-Games</option>
            </select>
        </div>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {data.filter((item) => {
                return search.toLocaleLowerCase() === "" 
                ? item 
                : item.name.toLowerCase().includes(search) 
                || item.description.toLowerCase().includes(search);
            }).map((item) => (
                <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                link={item.link}
                group={item.group}
                />
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;

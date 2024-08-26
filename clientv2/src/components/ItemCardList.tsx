"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { GlobalContext } from '../contexts/Home/CHome';
import React from "react";
import CreateItem from "./CreateItem";

function App() {

  {/*useState to store data from database */}
  const [data, setData] = useState<any[]>([]);

  {/*useState to store search input */}
  const [search, setSearch] = useState<string>("");

  {/*Instance of useContext to refresh page.tsx component */}
  const refreshContext = React.useContext(GlobalContext);

  {/*useEffect to get data from database / PS: It depends on the useContext to refresh em adding a new item */}
  useEffect(() => {
    axios.get("http://localhost:3001/item").then((res) => {
      setData(res.data);
    });
  }, [refreshContext.context.refreshCounter]);

  {/*Function to filter items by group */}
  const handleGroup = (e: any) => {
    const group = e.target.value;
    if (group === "all") {
      axios.get("http://localhost:3001/item").then((res) => {
        setData(res.data);
      });
    } else {
      axios.get(`http://localhost:3001/item/group/${group}`).then((res) => {
        setData(res.data);
      });}
  };

  return (
    <div>
        <div
        className="w-full flex justify-center items-center align-center my-5">
            {/*Search input */}
            <input
            className="w-[75%] h-10 p-2 border-2 border-gray-300 rounded-lg 
            focus:outline-none focus:border-blue-500 mx-2
            "
            type="text"
            placeholder="Pesquisa..."
            onChange={(e) => setSearch(e.target.value)}
            />

            {/*Select input to filter by group */}
            <select onChange={handleGroup}
            className="w-[50%] h-10 md:w-[20%] p-2 border-2 border-gray-300 rounded-lg 
            focus:outline-none focus:border-blue-500 mx-2
            ">
                <option value="all">Todos</option>
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
              {/*CreateItem Component that opens a Dialog (Modal) */}
              <CreateItem />
        </div>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {/*Map to show all cards stored in the useState, the same uses filter from values stored in the input search */}
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
                    image2={item.image2}
                    image3={item.image3} 
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

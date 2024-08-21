import React from 'react'
import axios from 'axios';
import { GlobalContext } from '../contexts/Home/CHome';

type propType = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    id : number;
}

const DeleteItem: React.FC<propType> = ({ open, onClose, children, id }) => {

    const refreshContext = React.useContext(GlobalContext);
    
    const deleteItem = (id: number) => {
        axios.delete(`http://localhost:3001/item/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            alert('Item deleted')
            refreshContext.setContext((prevContext: { refreshCounter: number; }) => ({
                ...prevContext,
                refreshCounter: prevContext.refreshCounter + 1,
              }));            
            onClose()
        })
    }

  return (
    <div className={
    `fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
    onClick={onClose}
    >
        <div className={`flex justify-center align-center
        border-2 border-black
        bg-white rounded-lg shadow p-6 transition-all max-w-md
        ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}
        `}
        onClick={(e) => e.stopPropagation()}>
        <button
            className={`absolute top-2 right-2 py-1 px-2
            border border-neutral-200 rounded-md text-gray-400
            bg-white hover:bg-gray-50 hover:text-gray-600`}
            onClick={onClose}
        >
            x
        </button>

        <div className='grid grid-colums-1'>

            {/*Div for delete item message*/}
            <div className='m-5'>
                <h1>Tem certeza que deseja excluir esse item?
                </h1>
            </div>

            {/*Div buttons for delete and cancel flex*/}
            <div className='flex justify-center gap-2'>
            <button
                className='bg-green-500 w-14 h-8 rounded-full hover:bg-green-600'
                onClick={() => deleteItem(id)}
                >Sim
            </button>
            <button
                className='bg-red-500 w-14 h-8 rounded-full hover:bg-red-600'
                onClick={onClose}>Não
            </button>
            </div>
        </div>
        {children}
        </div>

    </div>
  )
}

export default DeleteItem;
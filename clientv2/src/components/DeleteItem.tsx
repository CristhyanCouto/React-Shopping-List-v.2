import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { GlobalContext } from '../contexts/Home/CHome';

{/*This prop will be used to target de item id to be deleted */}
type propType = {
    id : number;
}

export const DeleteItem: React.FC<propType> = ({ id }) => {
    {/*Instance of useContext to refresh page.tsx component */}
    const refreshContext = React.useContext(GlobalContext);
    
    {/*Function to delete item by id */}
    const deleteItem = (id: number) => {
        axios.delete(`http://localhost:3001/item/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            alert('Item Deletado com Sucesso!')
            {/*Refresh Page.tsx Component */}
            refreshContext.setContext((prevContext: { refreshCounter: number; }) => ({
                ...prevContext,
                refreshCounter: prevContext.refreshCounter + 1,
              }));            
        })
    }
  return (
    /*Dialog Component to confirm delete */
    <div>
        <Dialog>
            <DialogTrigger> <MdDeleteForever className='size-8' /> </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Você tem certeza que quer deletar esse item?</DialogTitle>
                <DialogDescription>
                    {/*Div buttons for delete and cancel flex*/}
                    <div className='flex justify-center gap-2'>
                    <button
                        className='bg-green-500 w-14 h-8 rounded-full hover:bg-green-600 text-white
                        m-5'
                        onClick={() => deleteItem(id)}
                        >Deletar
                    </button>
                    </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
    
  )
}

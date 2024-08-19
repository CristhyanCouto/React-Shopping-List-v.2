import { useState } from 'react';
import DeleteItem from './deleteItem'


export default function DeleteItemButton(props: {id: number, refreshCounter: number}) {
    const [showDeleteItem, setShowDeleteItem] = useState<boolean>(false);
  return (
    <div className='"p-10 flex justify-center w-full'>
        <button
        className='bg-red-500 rounded-lg w-20 h-10'
        onClick={() => setShowDeleteItem(true)}
        >Excluir</button>
        <DeleteItem refreshCounter={0} id={props.id} open={showDeleteItem} onClose={() => setShowDeleteItem(false)}>
            <h1 className=''> </h1>
        </DeleteItem>
    </div>
  )
}

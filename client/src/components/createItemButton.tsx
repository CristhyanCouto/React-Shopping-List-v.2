import { useState } from 'react';
import CreateItem from './createItem'

export default function CreateItemButton() {
    const [showCreateItem, setShowCreateItem] = useState<boolean>(false);
  return (
    <div className='"p-10 flex justify-center w-full'>
        <button
        className='bg-gray-300 w-14 h-8 rounded-full hover:bg-gray-400'
        onClick={() => setShowCreateItem(true)}
        >+</button>
        <CreateItem open={showCreateItem} onClose={() => setShowCreateItem(false)}>
            <h1 className=''> </h1>
        </CreateItem>
        
    </div>
  )
}

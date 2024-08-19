import DeleteItemButton from "./deleteItemButton";

type ItemCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    link: string;
    group: string;
};

function ItemCard (itemCardProps: ItemCardProps) {
    return (
        <div>
            <div 
            className="bg-white shadow p-5 m-5
            min-h-lg max-h-lg max-w-md w-full h-full
            w-96
            grid grid-cols-1 gap-4
            transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 
            hover:scale-105 hover:bg-gray-400 duration-300 ...">
                <div
                className="grid gap-5">
                    <img 
                    className="size-96 bg-contain"
                    src={itemCardProps.image} alt={itemCardProps.name} />
                    <h2
                    className="text-5xl font-semibold text-gray-800
                    items-center justify-center flex
                    "
                    >{itemCardProps.name}</h2>
                    <textarea
                    className="w-full h-24 p-2 bg-transparent resize-none border-0 focus:outline-none"
                    rows={4} value={itemCardProps.description} readOnly></textarea>
                </div>
                <div className="flex items-end">
                    <p className="text-2xl font-semibold text-gray-800">R${itemCardProps.price.toFixed(2)}</p>
                </div>
                <div className="flex items-end gap-5 ">
                    <a target="_blank" rel="noreferrer" href={itemCardProps.link}>
                    <button className="bg-green-500 rounded-lg w-20 h-10">Link</button>
                    </a>
                    <DeleteItemButton id={itemCardProps.id} />
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
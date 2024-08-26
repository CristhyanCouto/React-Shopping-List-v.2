import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
import { DeleteItem } from "./DeleteItem";


// ItemCardProps is a type that defines the props based on the database schema
type ItemCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    image2: string;
    image3: string;
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
                    {/*Carousel Component to show images */}
                    <Carousel className="ml-3">
                        <CarouselContent>
                            <CarouselItem>
                            <Image className="size-96 bg-contain" width={400} height={40} src={itemCardProps.image} alt={itemCardProps.name} />
                            </CarouselItem>
                            <CarouselItem>
                            <Image className="size-96 bg-contain" width={400} height={40} src={itemCardProps.image2 || itemCardProps.image} alt={itemCardProps.name} />
                            </CarouselItem>
                            <CarouselItem>
                            <Image className="size-96 bg-contain" width={400} height={40} src={itemCardProps.image3 || itemCardProps.image} alt={itemCardProps.name} />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="ml-5" />
                        <CarouselNext className="mr-8"/>
                    </Carousel>

                    {/*Item Name used as title */}
                    <h2
                    className="text-5xl font-semibold text-gray-800
                    items-center justify-center flex
                    ">
                    {itemCardProps.name}</h2>

                    {/*Item Description */}
                    <textarea
                    className="w-full h-24 p-2 bg-transparent resize-none border-0 focus:outline-none"
                    rows={4} value={itemCardProps.description} readOnly></textarea>
                </div>
                {/*Item Price */}
                <div className="flex items-end">
                    <p className="text-2xl font-semibold text-gray-800">R${itemCardProps.price.toFixed(2)}</p>
                </div>
                {/*Item Link and Delete Button */}
                <div className="flex items-end gap-5 ">
                    <a target="_blank" rel="noreferrer" href={itemCardProps.link}>
                    <button className="bg-green-500 rounded-lg w-20 h-10">Link</button>
                    </a>
                    <DeleteItem id={itemCardProps.id}/>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
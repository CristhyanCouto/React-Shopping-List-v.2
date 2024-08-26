import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { TfiMenuAlt } from "react-icons/tfi";
import { About } from './About';

export default function Menu() {
  return (
    <div>
       <Sheet>
            <SheetTrigger> <TfiMenuAlt className='size-8' /> </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Sobre o Projeto</SheetTitle>
                <SheetDescription>
                    <About />
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet> 
    </div>
  )
}

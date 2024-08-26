import { Separator } from "@/components/ui/separator"
import { 
    SiNextdotjs,
    SiTailwindcss,
    SiAxios,
    SiFormik,
    SiSequelize,
    SiExpress,
    SiNodemon,
    SiShadcnui
 } from "react-icons/si";
 import { FaWpforms } from "react-icons/fa";
 import { PiPlugsConnectedBold } from "react-icons/pi";
 import { GrMysql } from "react-icons/gr";



export function About() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Shopping List</h4>
        <p className="text-sm text-muted-foreground">
          Um projeto de lista de compras com Next-js e Tailwindcss.
        </p>
      </div>
      <Separator className="my-4" />
      <div>
        <h4 className="text-lg font-medium leading-none">
            Dependências - Frontend
        </h4>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiNextdotjs className="size-8 text-black" />
        <div>Next-JS</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiTailwindcss className="size-8 text-black" />
        <div>Tailwind CSS</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiShadcnui className="size-8 text-black" />
        <div>Shadcn</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiAxios className="size-8 text-black" />
        <div>Axios</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiFormik className="size-8 text-black" />
        <div>Formik</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <FaWpforms className="size-8 text-black" />
        <div>Yup</div>
      </div>
      <Separator className="my-4" />
      <div>
        <h4 className="text-lg font-medium leading-none">
            Dependências - Backend
        </h4>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <GrMysql className="size-8 text-black" />
        <div>MySQL</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <GrMysql className="size-8 text-black" />
        <div>MySQL2 - Plugin</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiSequelize className="size-8 text-black" />
        <div>Sequelize</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiExpress className="size-8 text-black" />
        <div>Express JS</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <PiPlugsConnectedBold className="size-8 text-black" />
        <div>Cors</div>
      </div>
      <Separator className="my-4" />

      <div className="flex h-5 justify-center items-center space-x-4 text-lg">
        <SiNodemon className="size-8 text-black" />
        <div>Nodemon -- Dev</div>
      </div>
      <Separator className="my-4" />

    </div>
  )
}

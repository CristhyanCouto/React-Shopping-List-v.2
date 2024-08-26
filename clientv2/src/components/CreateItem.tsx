import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { GlobalContext } from '../contexts/Home/CHome';
import { FaPlusSquare } from "react-icons/fa";



export default function CreateItem() {

    {/*Instance of useContext to refresh page.tsx component */}
    const refreshContext = React.useContext(GlobalContext);

    {/*Form Fields Initial Values */}
    const initialValues = {
        name: '',
        price: '',
        image: '',
        image2: '',
        image3: '',
        description: '',
        link: '',
        group: ''
    }

    {/*Form Fields Validation Using Yup*/}
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        image: Yup.string().required('Required'),
        image2: Yup.string(),
        image3: Yup.string(),
        description: Yup.string(),
        link: Yup.string(),
        group: Yup.string()
    })

    {/*On Submit Function to Post Data to API */}
    const onSubmit = (values: typeof initialValues, {resetForm}: {resetForm: () => void}) => {
        axios.post('http://localhost:3001/item', values).then(() => {
            alert('Item Criado com Sucesso!')
            resetForm()
            {/*Refresh Page.tsx Component */}
            refreshContext.setContext((prevContext: { refreshCounter: number; }) => ({
                ...prevContext,
                refreshCounter: prevContext.refreshCounter + 1,
              }));            
        })
    }

  return (
    <div>
        <Dialog>
            <DialogTrigger> <FaPlusSquare className='size-8 mt-2 mr-2'/> </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar Novo Item:</DialogTitle>
                    <DialogDescription>
                        {/*Formik Form to Create New Item */}
                        <div>
                            <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                                <Form className='
                                m-5 p-5 gap-5
                                flex flex-col text-center align-center justify-center
                                '>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="name">Nome</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="name" name="name"
                                        placeholder="Nome do item..." />
                                        <ErrorMessage name="name" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="price">Preço</label>
                                        <Field className='border-2 border-black'
                                        type="number" id="price" name="price"
                                        placeholder="00.00" />
                                        <ErrorMessage name="price" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="image">Imagem URL</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="image" name="image"
                                        placeholder="https://linkdaimagem.com" />
                                        <ErrorMessage name="image" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="image2">Imagem 2</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="image2" name="image2" 
                                        placeholder="https://linkdaimagem2.com"/>
                                        <ErrorMessage name="image2" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="image3">Imagem 3</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="image3" name="image3"
                                        placeholder="https://linkdaimagem3.com" />
                                        <ErrorMessage name="image3" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="description">Descrição</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="description" name="description"
                                        placeholder="Insira a descrição do item aqui" />
                                        <ErrorMessage name="description" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="link">Link</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="link" name="link" 
                                        placeholder="https://linkdoitemaqui.com" />
                                        <ErrorMessage name="link" />
                                    </div>
                                    <div className='
                                    flex flex-col
                                    '>
                                        <label htmlFor="group">Grupo</label>
                                        <Field className='border-2 border-black'
                                        type="text" id="group" name="group" 
                                        placeholder="Nome do Grupo" />
                                        <ErrorMessage name="group" />
                                    </div>
                                    <div className='flex justify-center'>
                                        <button
                                        className='bg-green-500 w-14 h-8 rounded-full hover:bg-green-600 text-white'
                                        type="submit"
                                        >Criar
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </DialogDescription>
                    </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

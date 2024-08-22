import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { GlobalContext } from '../contexts/Home/CHome';

type propType = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const CreateItem: React.FC<propType> = ({ open, onClose, children }) => {

    const refreshContext = React.useContext(GlobalContext);

    const initialValues = {
        name: '',
        price: '',
        image: '',
        description: '',
        link: '',
        group: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        image: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        link: Yup.string().required('Required'),
        group: Yup.string().required('Required')
    })

    const onSubmit = (values: typeof initialValues, {resetForm}: {resetForm: () => void}) => {
        axios.post('http://localhost:3001/item', values).then(() => {
            alert('Item created')
            resetForm()
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
        {children}
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
                        <label htmlFor="name">Name</label>
                        <Field className='border-2 border-black'
                        type="text" id="name" name="name" />
                        <ErrorMessage name="name" />
                    </div>
                    <div className='
                    flex flex-col
                    '>
                        <label htmlFor="price">Price</label>
                        <Field className='border-2 border-black'
                        type="number" id="price" name="price" />
                        <ErrorMessage name="price" />
                    </div>
                    <div className='
                    flex flex-col
                    '>
                        <label htmlFor="image">Image</label>
                        <Field className='border-2 border-black'
                        type="text" id="image" name="image" />
                        <ErrorMessage name="image" />
                    </div>
                    <div className='
                    flex flex-col
                    '>
                        <label htmlFor="description">Description</label>
                        <Field className='border-2 border-black'
                        type="text" id="description" name="description" />
                        <ErrorMessage name="description" />
                    </div>
                    <div className='
                    flex flex-col
                    '>
                        <label htmlFor="link">Link</label>
                        <Field className='border-2 border-black'
                        type="text" id="link" name="link" />
                        <ErrorMessage name="link" />
                    </div>
                    <div className='
                    flex flex-col
                    '>
                        <label htmlFor="group">Group</label>
                        <Field className='border-2 border-black'
                        type="text" id="group" name="group" />
                        <ErrorMessage name="group" />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-500 rounded-lg w-20 h-10'
                        type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default CreateItem;
import React, {useState} from "react";
import {IProduct} from "../model";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}
interface CreateProductProps {
    onCreate: (product: IProduct) => void;
}


export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error,setError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        setError('');
        event.preventDefault();
        if(value.trim().length === 0) {
            setError('Please enter valid title');
            return;
        }
        productData.title = value;
        const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData);

        onCreate(response.data);
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value);
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Enter product title..."
                style={{width:'300px'}}
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}
            <button type='submit'>Create</button>
        </form>
    );
}
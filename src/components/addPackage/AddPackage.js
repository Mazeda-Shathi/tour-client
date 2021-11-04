import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://peaceful-coast-40911.herokuapp.com/package', data)
            .then(res => console.log(res))
    };
    return (
        <div className="mt-5 pt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-1">
                <input className="mt-3" placeholder="Name" {...register("firstName")} /><br />
                <textarea className="mt-3" placeholder="Description" {...register("email")} /><br />
                <input className="my-3" type="number" placeholder="Days" {...register("Days")} /><br />
                <input className="my-3" type="number" placeholder="price" {...register("price")} /><br />
                <input className="my-3" placeholder="image url" {...register("img")} /><br />
                <input className="mt-3" type="submit" placeholder="Order Now" />

            </form>
        </div>
    );
};

export default AddPackage;
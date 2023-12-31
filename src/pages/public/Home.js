import React from 'react'
import { useForm } from "react-hook-form";
const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data.age)
    }; // your form submit function which will invoke after successful validation
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input
                {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })}
            />
            {errors?.firstName?.type === "required" && <p>This field is required</p>}
            {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            {/*  */}
            <label>Last Name</label>
            <input
                {...register("lastName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })}
            />
            {errors?.lastName?.type === "required" && <p>This field is required</p>}
            {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            {/*  */}
            <label>Age</label>
            <input
                {...register("age", { min: 18, max: 99 })}
            />
            {errors?.age?.type === "required" && <p>This field is required</p>}
            {errors?.age?.type === "pattern" && (
                <p>You Must be older then 18 and younger then 99 years old</p>
            )}

            <input type="submit" />
        </form>
    )
}

export default Home
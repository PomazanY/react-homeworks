import { useId, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";


import styles from './UserForm.module.css'


const UserForm = ({submitForm}) => {
    const usernameId= useId();
    const statusId= useId();

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    const onSubmit = values =>{
        submitForm(values);
        reset();
       
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <h2>Edit User Information</h2>
            </div>
            <div>
                <label ref={inputRef} htmlFor={usernameId}>Name</label>
                <input {...register('username',{ required: 'required name'})} type="text" placeholder="User name" id={usernameId} />
                {errors.username && <p className={styles.error}>{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor={statusId}>Status</label>
                <input {...register('status',{ required: 'required status'})} type="text" placeholder="status" id={statusId} />
                {errors.status && <p className={styles.error}>{errors.status.message}</p>}
            </div>
            <button type="submit">Save</button>
            
        </form>

    )
}
export default UserForm;
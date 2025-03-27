import styles from './DynamicForm.module.css';

import { useForm } from 'react-hook-form';

const DynamicForm = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            firstField: '',
            secondField: ''
        }
    });

    const OnSubmit = values => {
        console.log(values);
        reset();
    }

    const isNameFill = watch('firstField')

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className={styles.form}>
            <div className={styles.container}>
                <label htmlFor="first_title">First Field</label>
                <input {...register('firstField', {
                    required: 'First Field is reduired',
                    minLength: {
                        value: 8,
                        message: 'Enter at least 8 characters'
                    }
                })}
                    id='first_title'
                    type="text"
                    placeholder='first field' />
                {errors.firstField && <p className={styles.error}>{errors.firstField.message}</p>}
            </div>
            {isNameFill && <div className={styles.container}>
                <label htmlFor="second_title">Second Field</label>
                <input {...register('secondField', {
                    required: 'First Field is reduired',
                    minLength: {
                        value: 10,
                        message: 'Enter at least 10 characters'
                    }
                })}
                    id="second_title"
                    type="text"
                    placeholder='second field' />
                {errors.secondField && <p className={styles.error}>{errors.secondField.message}</p>}
            </div>}
            <button>Submit</button>
        </form>
    )
}
export default DynamicForm;
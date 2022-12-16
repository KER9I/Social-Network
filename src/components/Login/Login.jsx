import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import style from './Login.module.css'
import * as yup from 'yup';



const LoginForm = () => {

    const loginValidateSchema = yup.object().shape({
        login: yup.string().email('Enter correct email').required('Necessarily'),
        password: yup.string().typeError('Must be string').required('Necessarily')
    })

    return (
        <Formik initialValues={{ login: '', password: '', rememberMe: false }}
            validationSchema={loginValidateSchema}
            onSubmit={(values) => { console.log(values) }}>
            {() => (
                <Form>
                    <div className={style.field}>
                        <Field type='email'  className={style.fieldInput} name='login' placeholder='Login' />
                        <ErrorMessage className={style.error} name='login' component='div' />
                    </div>
                    <div className={style.field}>
                        <Field type='password' className={style.fieldInput} name='password' placeholder='Password' />
                        <ErrorMessage className={style.error} name='password' component='div' />
                    </div>
                    <div >
                        <Field type='checkbox' name='rememberMe' /> remember me
                    </div>
                    <div>
                        <button className={style.fieldButton} type='submit'>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const Login = () => (
    <div className={style.content}>
        <h1>Login</h1>
        <LoginForm />
    </div>
);

export default Login


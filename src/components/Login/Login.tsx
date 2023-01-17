import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import style from './Login.module.css'
import * as yup from 'yup';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

type ValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: any) => void
    isAuth: boolean
}


const Login: React.FC<PropsType> = ({login, isAuth}) => {
    const onSubmit = (values: ValuesType, setStatus: any) => {
        login(values.email, values.password, values.rememberMe, setStatus)
    }
    const loginValidateSchema = yup.object().shape({
        email: yup.string().email('Enter correct email').required('Necessarily'),
        password: yup.string().typeError('Must be string').required('Necessarily')
    })

    if (isAuth) {
        return (
            <Navigate to={'/profile'} />
        )
    }
    return (
        <div className={style.content}>
        <h1>Login</h1>
            <Formik initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={loginValidateSchema}
            onSubmit={onSubmit}>
            {({touched, errors, status}) => (
                <Form >
                    <div className={style.field}>
                        <Field type='email'  className={touched.email && errors.email ? style.errorField : style.fieldInput} name='email' placeholder='Email' />
                        <ErrorMessage className={style.error} name='email' component='div' />
                    </div>
                    <div className={style.field}>
                        <Field type='password' className={touched.password && errors.password ? style.errorField : style.fieldInput} name='password' placeholder='Password' />
                        <ErrorMessage className={style.error} name='password' component='div' />
                    </div>
                    <div >
                        <Field type='checkbox' name='rememberMe' /> remember me
                    </div>
                    <div className={style.error}>{status}</div>
                    <div>
                        <button className={style.fieldButton} type='submit'>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
    isAuth: state.auth.isAuth
}
}

export default connect(mapStateToProps, {login})(Login);


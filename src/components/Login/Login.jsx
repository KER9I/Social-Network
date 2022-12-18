import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import style from './Login.module.css'
import * as yup from 'yup';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';



const LoginForm = (props) => {
    const loginValidateSchema = yup.object().shape({
        email: yup.string().email('Enter correct email').required('Necessarily'),
        password: yup.string().typeError('Must be string').required('Necessarily')
    })
    return (
        <Formik initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={loginValidateSchema}
            onSubmit={(values) => { props.login(values) }}>
            {({touched, errors}) => (
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
                    <div>
                        <button className={style.fieldButton} type='submit'>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


const Login = (props) => {
    let onLogin = (values) => {
        props.login(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) {
        return (
            <Navigate to={'/profile'} />
        )
    }
    return (
        <div className={style.content}>
        <h1>Login</h1>
        <LoginForm login={onLogin} />
    </div>
    )
}

let mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth
}
}

export default connect(mapStateToProps, {login})(Login);


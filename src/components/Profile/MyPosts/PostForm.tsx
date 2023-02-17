import { Field, Form, Formik } from 'formik';
import React from 'react';
import style from './MyPosts.module.css';


type AddPostFormPropsType = {
    addPost: (newPostText: string) => void
}


const AddPostForm: React.FC<AddPostFormPropsType> = ({ addPost }) => {

    let onAddPost = (values: string) => {
        addPost(values)
    }

    return (
        <Formik initialValues={{ newPostText: '' }}
            onSubmit={(values, { resetForm }) => {
                onAddPost(values.newPostText)
                resetForm()
            }}>
            {() => (
                <Form >
                    <div className={style.field}>
                        <Field className={style.text} type='text' name='newPostText' placeholder='New post' />
                    </div>
                    <div>
                        <button type='submit'>Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AddPostForm;
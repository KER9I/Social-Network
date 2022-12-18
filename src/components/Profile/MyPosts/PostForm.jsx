import { Field, Form, Formik } from 'formik';
import style from './MyPosts.module.css';


const AddPostForm = (props) => {
    return (
        <Formik initialValues={{newPostText: ''}}
        onSubmit={(values) => { props.addPost(values) }}>
            {() => (
                <Form >
                    <div className={style.field}>
                        <Field className={style.text} type='text' name='newPostText' placeholder='New post'/>
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
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../redux/users-reducer';


export type UserSearchFormType = {
    term: string
    friend: 'true' | 'false' | 'null' 
}

type PropsType = {
    onFilterChanched: (filter: FilterType) => void
}
export const UserSearchForm: React.FC<PropsType> = React.memo((props) => {
    const submit = (values: UserSearchFormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanched(filter)
        setSubmitting(false);
    };
    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: 'null'}}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
})

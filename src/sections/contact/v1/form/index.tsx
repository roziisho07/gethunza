'use client';

import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';
import { Formik } from 'formik';
import { FaUser, FaSpeakap } from 'react-icons/fa6';

import * as Yup from 'yup';

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});
// import { contactUsFormSubmit } from './server/contact-us-form-submit';
import { toast } from 'sonner';


import { useForm, ValidationError } from '@formspree/react';
import { SendIcon, MessageCircle } from 'lucide-react';
// ... your existing imports

const fieldCommonClasses = 'your-default-styles'; // Define your common field styles here
const errorClasses = 'border-red-600 text-red-600'; // Define your error styles here

export function Form() {
  const [state, handleSubmit] = useForm('xovdqrky'); // your Formspree ID

  if (state.succeeded) {
    return <p className="text-green-600 text-center">Thanks for reaching out!</p>;
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={ContactUsSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-30px gap-y-5 lg:grid-cols-2"
        >
          {/* Name Input */}
          <div>
            <TextInput
              placeholder="Your Name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn('your-default-styles', fieldCommonClasses, errors.name && touched.name && errorClasses)}
              icon={<FaUser />}
            />
            {errors.name && touched.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <TextInput
              placeholder="Your Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={state.submitting}
              icon={<SendIcon />}
              className={cn(fieldCommonClasses, errors.email && touched.email && errorClasses)}
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Subject Input */}
          <div className="lg:col-span-2">
            <TextInput
              placeholder="Subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={state.submitting}
              icon={<FaSpeakap />}
              className={cn(fieldCommonClasses, errors.subject && touched.subject && errorClasses)}
            />
            {errors.subject && touched.subject && (
              <p className="text-sm text-red-600 mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message TextArea */}
          <div className="lg:col-span-2">
            <TextAreaInput
              placeholder="Write Message..."
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={state.submitting}
              icon={<MessageCircle />}
              className={cn(fieldCommonClasses, errors.message && touched.message && errorClasses)}
            />
            {errors.message && touched.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="lg:col-span-2">
            <Button type="submit" className="w-full" disabled={state.submitting}>
              <span>{state.submitting ? 'Sending...' : 'SEND NOW'}</span>
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

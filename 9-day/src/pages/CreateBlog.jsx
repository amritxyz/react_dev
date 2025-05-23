import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const CreateBlog = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext); // add this at top

  // Initial blog details
  const initialValues = {
    blogtitle: '',
    yourContent: '',
    featureImage: null,
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    blogtitle: Yup.string().required('Blog Title is required'),
    yourContent: Yup.string()
      .required('Content is required')
      .min(6, 'Must be at least 6 characters'),
    featureImage: Yup.mixed()
      .required('Feature Image is required')
      .test('fileSize', 'Image must be less than 10MB', (value) => {
        return value && value.size <= 10 * 1024 * 1024; // 10MB in bytes
      }),
  });


  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    formData.append('title', values.blogtitle); // match backend field names
    formData.append('content', values.yourContent);
    formData.append('image', values.featureImage);

    try {
      const response = await fetch('https://blog-hqx2.onrender.com/blog', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Blog created:', result);

      resetForm();
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to create blog. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };


  const formitems = [
    {
      type: 'text',
      name: 'blogtitle',
      label: 'Blog Title',
    },
    {
      type: 'text',
      name: 'yourContent',
      label: 'Your Content',
    },
    {
      type: 'file',
      name: 'featureImage',
      label: 'Feature Image',
    },
  ];

  return (
    <section className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white shadow-lg border border-gray-200 rounded-xl p-8 max-w-md w-full'>
        <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Craft Your New Blog</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className='space-y-6'>
              {formitems.map((item, index) => (
                <div key={index} className='flex flex-col'>
                  <label className='text-gray-700 font-medium mb-2' htmlFor={item.name}>
                    {item.label}
                  </label>
                  {item.type === 'file' ? (
                    <input
                      id={item.name}
                      name={item.name}
                      type='file'
                      accept='image/*'
                      onChange={(event) => {
                        setFieldValue(item.name, event.currentTarget.files[0]);
                      }}
                      className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  ) : (
                    <Field
                      id={item.name}
                      name={item.name}
                      type={item.type}
                      as={item.name === 'yourContent' ? 'textarea' : 'input'}
                      className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder={item.label}
                      rows={item.name === 'yourContent' ? 5 : undefined}
                    />
                  )}
                  <ErrorMessage
                    name={item.name}
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
              ))}
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200'
              >
                Publish Blog
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default CreateBlog;

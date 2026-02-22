// src/components/AddRecipeForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RecipeSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Too short!').required('Recipe title is required'),
  ingredients: Yup.string().required('Please list your ingredients'),
  instructions: Yup.string().min(10, 'Provide more detail!').required('Instructions are required'),
});

const AddRecipeForm = () => (
  <Formik
    initialValues={{ title: '', ingredients: '', instructions: '' }}
    validationSchema={RecipeSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field name="title" placeholder="Recipe Name" />
        <ErrorMessage name="title" component="div" className="error" />
        
        <Field as="textarea" name="ingredients" placeholder="Ingredients..." />
        <Field as="textarea" name="instructions" placeholder="Steps..." />
        
        <button type="submit" disabled={isSubmitting}>Save Recipe</button>
      </Form>
    )}
  </Formik>
);
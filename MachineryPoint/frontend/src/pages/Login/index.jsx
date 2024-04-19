// LoginPage.js
import  { useState, useContext } from 'react';
import { handleLogin } from '../../services/authService'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
 import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContextProvider';

const LoginPage = () => {
  const [error, setError] = useState('');
  const {setUserData} = useContext(UserContext);
   const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const userData = await handleLogin(values); 
        console.log(userData.user.fullName);
        setUserData(userData);

        //console.log(userData,"frontend");
        // Redirect to dashboard 
          navigate('/dashboard');

      } catch (error) {
        setError('Authentication failed');
        console.error('Authentication error:', error);
      }
    },
  });

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-4 mt-5 mt-lg-0">

              <form name="login" onSubmit={handleSubmit} className="php-email-form">
                <div className="row">

                  <div className="col-md-12 form-group">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-control"
                      id="email"
                      placeholder="Your email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger">{errors.email && touched.email ? errors.email : null}</p>
                  </div>

                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <input
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      required="required"
                      data-validation-required-message="Please enter a password"
                    />
                    <p className="help-block text-danger">{errors.password && touched.password ? errors.password : null}</p>
                  </div>

                </div>

                {error && <p className="text-danger">{error}</p>}
               
                <div className="text-center"><button type="submit">Login</button></div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage;

import React from 'react'
import { Field, Form, Formik } from 'formik'
import { format } from 'prettier';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import * as Yup from 'yup';
import { StaticImage } from 'gatsby-plugin-image';

const phoneRegExp = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
const roles = ['Backend Engineer', 'Customer Support Specialist', 'Data Analyst/Engineer', 'Frontend Engineer', 'ML Engineer', 'Network and Systems Admin', 'Product Manager', 'Project MAnager', 'UI/UX Designer', 'VR Engineer', 'Others'];


const CommunityFormSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
    role: Yup.string().required('Required'),
    experience: Yup.number().min(1, 'Should be minimum of 1').required('Required'),
});



const CommunityForm = () => {

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');

    const handleSubmit = (values) => {
        setErrorMsg('');
        setLoading(true)

        const requestOptions = {
            method: 'POST',
            headers: { Authorization: `Token ${process.env.GATSBY_BIT_TOKEN}`, "Content-Type": "application/json" },
            mode: 'cors',
            body: JSON.stringify(values)
        };

        fetch(process.env.GATSBY_BIT_FORM_SERVICE_URL + `/api/v1/community/new-member`, requestOptions).then(response => response.json())
            .then((result) => {
                if (result.code === 201) {
                    setLoading(false)
                    console.log(result);
                    setSuccess(true)
                } else {
                    console.log(result, result.code)
                    setLoading(false);
                    setErrorMsg(result.message || 'An Error Occured. Please try again later');
                }
            })
            .catch(error => { setLoading(false); console.log('error', error); setErrorMsg(error.message || error.error.message) });

    }



    return (
        <section className="bg-dark text-white py-16 min-h-[20vh]">
           {!success ?  <div className="max-w-3xl mx-auto container px-4">
                <h2>Identify with Us</h2>
                <div className='mt-16'>
                    <h5 className="text-red-500 mb-2">{errorMsg}</h5>
                    <Formik
                        initialValues={{
                            firstname: '',
                            lastname: '',
                            email: '',
                            phoneNumber: '',
                            experience: '',
                            role: ''
                        }}
                        onSubmit={async (values) => {
                            handleSubmit(values)
                        }}
                        validationSchema={CommunityFormSchema}
                    >
                        {({ errors, touched, validateField, validateForm }) => (
                            <Form className='grid sm:grid-cols-2 gap-4'>

                                <div className="w-auto">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-pastel mb-2">First Name</label>
                                    <Field id="firstname" name="firstname" className="custom-input" placeholder="First Name" />
                                    {errors.firstname && touched.firstname && <small className="text-red-500">{errors.firstname}</small>}
                                </div>
                                <div className="w-auto">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-pastel mb-2">Last Name</label>
                                    <Field id="lastname" name="lastname" className="custom-input" placeholder="Last Name" />
                                    {errors.lastname && touched.lastname && <small className="text-red-500">{errors.lastname}</small>}
                                </div>
                                <div className="w-auto col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-pastel mb-2">Email Address</label>
                                    <Field id="email" name="email" type="email" className="custom-input" placeholder="Email Address" />
                                    {errors.email && touched.email && <small className="text-red-500">{errors.email}</small>}
                                </div>
                                <div className="w-auto col-span-2">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-pastel mb-2">Phone Number <small>(With Country Code eg. +234)</small></label>
                                    <Field id="phoneNumber" name="phoneNumber" className="custom-input" placeholder="Phone Number" />
                                    {errors.phoneNumber && touched.phoneNumber && <small className="text-red-500">{errors.phoneNumber}</small>}
                                </div>
                                <div className="w-auto col-span-2">
                                    <label htmlFor="role" className="block text-sm font-medium text-pastel mb-2">Role</label>
                                    <Field component="select" id="role" name="role" className="custom-input">
                                        <option selected disabled value={''}>Select a Role</option>
                                        {roles.map((role, i) => (<option key={i} value={role}>{role}</option>))}
                                    </Field>
                                    {errors.role && touched.role && <small className="text-red-500">{errors.role}</small>}
                                </div>

                                <div className="w-auto col-span-2">
                                    <label htmlFor="experience" className="block text-sm font-medium text-pastel mb-2">Experience</label>
                                    <small className='text-pastel/50 max-w-xs'>How long(years) have you been doing this?</small>
                                    <Field id="experience" name="experience" type="number" step="1" min="1" className="custom-input" placeholder="Experience" />
                                    {errors.experience && touched.experience && <small className="text-red-500">{errors.experience}</small>}
                                </div>
                                <div className="col-span-2 flex">
                                    <button type="submit" disabled={loading} className="btn h-[48px] btn-lg bg-pastel text-dark mx-auto">
                                        {loading && <AiOutlineLoading3Quarters className='animate-spin font-bold' size={20} />}
                                        <span>{loading ? 'Submitting' : 'Submit'}</span>
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div> :

            <div className="max-w-3xl mx-auto container px-4 bg-six">
                <div className="flex">
                    <div className='mt-16'>
                        <h3>Yayyyy! You're in.</h3>
                        <h5>Welcome to the Believer's in Tech Community. We'd send you an email shortly with more information.</h5>
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default CommunityForm
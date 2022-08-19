import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { joinCommunity } from '../utils/functions'


const Hero = () => {
    return (
        <section className="max-h-[100vh] overflow-clip bg-seven bg-no-repeat bg-cover bg-center">
            <div className="px-4 md:py-32 py-40">
                <div className="flex">
                    <div className="text-left sm:text-center max-w-2xl mx-auto sm:mb-16">
                        <h1 className="text-6xl sm:text-6xl mb-4 font-semibold overflow-visible pb-6 bg-eight bg-no-repeat bg-contain bg-bottom">
                            Community
                        </h1>
                        <h4>Welcome to our community of believers!</h4>
                        <p className="mb-8 text-justify sm:text-center text-dark/80 text-lg">Here, every member is inspired, our careers benefit from each other’s experiences, and most importantly, we become effective ambassadors for Christ, using our expertise in tech.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const JoinUsForm = () => {
    const [inputs, setInputs] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');
    const [successMsg, setSuccessMsg] = React.useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMsg('');
        setLoading(true)
        console.log(inputs)
        joinCommunity(inputs).then((res) => {
            setLoading(false)
            console.log(res);
            if (res.success) return setSuccessMsg(res.message)
            setErrorMsg(res.message)
        }).catch((err) => {
            console.log(err)
            setLoading(false);
            setErrorMsg(err?.error?.message || 'An Error Occured. Please try again later');
        })
    }

    const roles = ['Backend Engineer', 'Customer Support Specialist', 'Data Analyst/Engineer', 'Frontend Engineer', 'ML Engineer', 'Network and Systems Admin', 'Product Manager', 'Project MAnager', 'UI/UX Designer', 'VR Engineer'];

    return (
        <section className="bg-dark text-white py-16">
            <div className="max-w-3xl mx-auto container px-4">
                <div className="">
                    {!successMsg && <div>
                        <h2>Identify with Us</h2>
                    </div>}
                    {
                        successMsg ?
                            <div className="mt-16">
                                <h2 className="test-pastel">
                                    Welcome to BiT!!!.
                                </h2>
                                <h5>You should receive a welcome email from us shortly.</h5>
                            </div>
                            :
                            <div className='mt-16'>
                                {errorMsg && <h5 className='text-red-500 mb-8'>{errorMsg}</h5>}
                                <form className='grid sm:grid-cols-2 gap-4' onSubmit={handleSubmit}>
                                    <div className="w-auto">
                                        <span className="block text-sm font-medium text-pastel mb-2">First Name</span>
                                        <input type="name" name="firstname" className="custom-input" placeholder="First Name" value={inputs.firstname || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="w-auto">
                                        <span className="block text-sm font-medium text-pastel mb-2">Last Name</span>
                                        <input type="name" name="lastname" className="custom-input" placeholder="Last Name" value={inputs.lastname || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="w-auto col-span-2">
                                        <span className="block text-sm font-medium text-pastel mb-2">Email Address</span>
                                        <input type="email" name="email" className="custom-input" placeholder="Email Address" value={inputs.email || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="w-auto col-span-2">
                                        <span className="block text-sm font-medium text-pastel mb-2">Phone Number</span>
                                        <input type="tel" name="phoneNumber" className="custom-input" placeholder="Phone Number" value={inputs.phoneNumber || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="w-auto col-span-2">
                                        <span className="block text-sm font-medium text-pastel">Role</span>
                                        <small className='text-pastel/50 max-w-xs'>What do you do in Tech?</small>
                                        <select type="text" name="role" className="custom-input mt-2" placeholder="Role" value={inputs.role || ""}
                                            onChange={handleChange}>
                                            {
                                                roles.map((role, i) => (<option key={i} value={role}>{role}</option>))
                                            }
                                        </select>
                                    </div>
                                    <div className="w-auto col-span-2">
                                        <span className="block text-sm font-medium text-pastel">Experience</span>
                                        <small className='text-pastel/50 max-w-xs'>How long(years) have you been doing this?</small>
                                        <input type="number" min={0} step={1} name="experience" className="custom-input mt-2" placeholder="Experience" value={inputs.experience || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="col-span-2 flex">
                                        <button aria-label="Subscribe" onClick={handleSubmit} type='submit' disabled={loading} className="btn h-[48px] btn-lg bg-pastel text-dark mx-auto">
                                            {loading && <AiOutlineLoading3Quarters className='animate-spin font-bold' size={20} />}
                                            <span>{loading ? 'Submitting' : 'Submit'}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                    }
                </div>
            </div>
        </section>
    )
}

const CommunityPage = () => (
    <Layout>
        <Seo title="Community" />
        <Hero />
        <JoinUsForm />
    </Layout>
)

export const Head = () => <Seo title="Community" />


export default CommunityPage
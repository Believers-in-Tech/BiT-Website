import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Hero = () => {
    return (
        <section className="max-h-[100vh] overflow-clip bg-seven bg-no-repeat bg-cover bg-center">
            <div className="px-4 md:py-32 py-40">
                <div className="flex">
                    <div className="text-left sm:text-center max-w-2xl mx-auto sm:mb-16">
                        <h1 className="text-6xl sm:text-6xl mb-4 font-semibold overflow-visible">
                            Community Goals
                        </h1>
                        <p className="mb-8 tracking-wide text-justify sm:text-center text-gray-600 text-lg">
                            As a community of believers, we desire to accomplish our primary purpose on Earth using all that God has deposited in us.
                            The Goal here is to find fellow believers within defined areas of specialisation so that we can strengthen, grow, innovate and explore ways to fulfil the Great Commission given to us through our gifts and knowledge in tech.
                        </p>
                    </div>
                </div>
            </div>``
        </section>
    )
}

const JoinUsForm = () => {
    const [inputs, setInputs] = React.useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        alert(inputs);
    }

    const roles = ['Backend Engineer', 'Customer Support Specialist', 'Data Analyst/Engineer', 'Frontend Engineer', 'ML Engineer', 'Network and Systems Admin', 'Product Manager', 'Project MAnager', 'UI/UX Designer', 'VR Engineer'];

    return (
        <section className="bg-dark text-white py-16">
            <div className="max-w-3xl mx-auto container px-4">
                <div className="">
                    <div>
                        <h2>Identify with Us</h2>
                    </div>
                    <div className='mt-16'>
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
                                <input type="tel" name="phonenumber" className="custom-input" placeholder="Phone Number" value={inputs.phonenumber || ""}
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
                                <small className='text-pastel/50 max-w-xs'>How long have you been doing this (years)?</small>
                                <input type="number" min={0} step={1} name="experience" className="custom-input mt-2" placeholder="Experience" value={inputs.experience || ""}
                                    onChange={handleChange} />
                            </div>
                            <div className="col-span-2 flex">
                                <button aria-label="Subscribe" type='submit' className="btn h-[48px] btn-lg bg-pastel text-dark mx-auto">
                                    <span>Subscribe</span>
                                </button>
                            </div>
                        </form>
                    </div>
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
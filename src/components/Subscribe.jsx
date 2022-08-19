import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AppService } from '../utils/services';

const Subscribe = () => {
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
        AppService.subscribe(inputs).then((res) => {
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

    return (
        <section className="bg-dark text-white py-16">
            <div className="max-w-7xl mx-auto container px-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                    <div className='max-w-sm'>
                        <h3>Subscribe to our newsletter</h3>
                        <p>Sign up to receive updates about our events and new bytes.</p>
                    </div>

                    <div id="revue-embed">
                        <form method="post" id="revue-form" name="revue-form" target="_blank" className='flex gap-4 flex-row items-start'>
                            <div className="w-auto max-w-md">
                                <input type="email" name="email" id="member_email" className=" px-3 py-2 h-[48px] bg-pastel/10 border shadow-sm border-pastel/20 placeholder-pastel/50 focus:bg-transparent focus:outline-none focus:border-pastel block w-full rounded-md sm:text-sm" placeholder="Email Address" value={inputs.email || ""}
                                    onChange={handleChange} />
                                <small className='text-pastel/50 max-w-xs flex-wrap'>Pure information and no spam. Unsubscribe any time. We respect your privacy.
                                    <span className="revue-form-footer"> By subscribing, you agree with Revue’s <a target="_blank" rel="noreferrer" className='text-pastel/80 hover:text-pastel transition ease-in-out duration-700' href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" rel="noreferrer" className='text-pastel/80 hover:text-pastel transition ease-in-out duration-700' href="https://www.getrevue.co/privacy">Privacy Policy</a>.</span>
                                </small>
                            </div>
                            <button aria-label="Subscribe" onClick={handleSubmit} type='submit' disabled={loading} name="member[subscribe]" id="member_submit" className="btn h-[48px] btn-lg bg-pastel text-dark">
                                {loading && <AiOutlineLoading3Quarters className='animate-spin font-bold' size={20} />}
                                <span>{loading ? 'Submitting' : 'Subscribe'}</span>
                            </button>
                        </form>

                    </div>
                </div>
                {/* <div>
                    <div id="revue-embed">
                        <form action="https://www.getrevue.co/profile/believersintech/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                            <div className="revue-form-group">
                                <label for="member_email">Email address</label>
                                <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
                            </div>
                            <div className="revue-form-group">
                                <label for="member_first_name">First name <span className="optional">(Optional)</span></label>
                                <input className="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name" />
                            </div>
                            <div className="revue-form-group">
                                <label for="member_last_name">Last name <span className="optional">(Optional)</span></label>
                                <input className="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name" />
                            </div>
                            <div className="revue-form-actions">
                                <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
                            </div>
                           
                        </form>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Subscribe
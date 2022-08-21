import React from 'react'
const SubscribeStatic = () => {
    return (
        <section className="bg-dark text-white py-16">
            <div className="max-w-7xl mx-auto container px-4">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className='max-w-sm'>
                        <h3>Subscribe to our newsletter</h3>
                        <p>Sign up to receive updates about our events and new bytes.</p>
                    </div>

                    <div id="revue-embed">
                           <form className='flex gap-4 flex-row items-start' action="https://www.getrevue.co/profile/believersintech/add_subscriber"method="post"id="revue-form"name="revue-form"target="_blank">
                            <div className="w-auto max-w-md">
                                <input className=" px-3 py-2 h-[48px] bg-pastel/10 border shadow-sm border-pastel/20 placeholder-pastel/50 focus:bg-transparent focus:outline-none focus:border-pastel block w-full rounded-md sm:text-sm" placeholder="Email Address" type="email" name="member[email]" id="member_email" />
                                <small className='text-pastel/50 max-w-xs flex-wrap'>Pure information and no spam. Unsubscribe any time. We respect your privacy.
                                    <span className="revue-form-footer"> By subscribing, you agree with Revue’s <a target="_blank" rel="noreferrer" className='text-pastel/80 hover:text-pastel transition ease-in-out duration-700' href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" rel="noreferrer" className='text-pastel/80 hover:text-pastel transition ease-in-out duration-700' href="https://www.getrevue.co/privacy">Privacy Policy</a>.</span>
                                </small>
                            </div>
                            <button aria-label="Subscribe" className="btn h-[48px] btn-lg bg-pastel text-dark" type="submit" name="member[subscribe]" id="member_submit">
                                <span>Subscribe</span>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeStatic
import React from 'react'

const Subscribe = () => {
    return (
        <section className="bg-dark text-white py-16">
            <div className="max-w-7xl mx-auto container px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h4>Subscribe to our newsletter</h4>
                        <p>Sign up to receive updates about our events and new bytes.</p>
                    </div>

                    <div>
                        <form action="" className='flex gap-4 flex-row items-start'>
                            <div className="w-auto">
                            <input type="email" name="email" className=" px-3 py-2 h-[48px] bg-pastel/10 border shadow-sm border-pastel/20 placeholder-pastel/50 focus:bg-transparent focus:outline-none focus:border-pastel block w-full rounded-md sm:text-sm" placeholder="Email Address" />
                                <small className='text-pastel/50 max-w-xs'>Pure information and no spam. Unsubscribe any time. <br /> We respect your privacy.</small>
                            </div>
                            <button aria-label="Subscribe" className="btn h-[48px] btn-lg bg-pastel text-dark">
                                    <span>Subscribe</span>
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
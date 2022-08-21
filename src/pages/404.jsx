import { Link } from 'gatsby'
import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Hero = () => {
    return (
        <section className="max-h-[100vh] h-[80vh] overflow-clip bg-seven bg-no-repeat bg-cover bg-center">
            <div className="px-4 md:py-32 py-40">
                <div className="flex">
                    <div className="text-center max-w-2xl mx-auto sm:mb-16">
                        <h1 className="text-8xl sm:text-[100px] mb-4 font-semibold overflow-visible pb-6 bg-eight bg-no-repeat bg-contain bg-bottom">
                            404
                        </h1>
                        <h4 className='mb-16'>The page you're looking for doesn't exist!</h4>
                        <Link to="/" aria-label="Back to Homepage" >
                            <button aria-label="Back to Homepage" className="btn bg-black py-4 text-pastel mx-auto">
                                <span>Back to Homepage</span> <HiOutlineChevronRight size="20" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const NotFoundPage = () => (
    <Layout>
        <Seo title="Page Not Found" />
        <Hero />
    </Layout>
)

export const Head = () => <Seo title="Page Not Found" />

export default NotFoundPage
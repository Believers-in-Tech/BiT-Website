import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi'
import ContactCard from '../components/ContactCard'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Subscribe from '../components/Subscribe'

const Hero = () => {
    return (
        <section className="max-h-[100vh] overflow-clip">
            <div className="px-4 md:py-32 py-40">
                <div className="flex">
                    <div className="text-left sm:text-center max-w-3xl mx-auto">
                        <div className="text-6xl sm:text-6xl mb-4 font-semibold overflow-visible">
                            <span>Taking the</span>
                            <span className='relative h-auto gospel'>
                                <span className='px-2'>Gospel</span>
                                 </span> 
                                
                                <span>to the ends of the Earth</span>
                        </div>
                        <p className="mb-8 tracking-wide text-justify sm:text-center text-gray-600 text-lg">
                            We are on a mission to help Believers in tech thrive and make impact for the Gospel by providing a platform for new and old to get inspired by the stories and journey of others, learn and take action while at it.
                        </p>
                        <div className="flex sm:justify-center justify-start gap-2 sm:gap-6">
                            <Link to="/about-us" aria-label="Join the Community" >
                                <button aria-label="Join the Community" className="btn bg-black btn-lg text-white mx-auto lg:mx-0">
                                    <span>Join the Community</span> <HiOutlineChevronRight size="20" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:-mt-64 -mt-28">
                <div className="flex justify-between">
                    <div className="">
                        <StaticImage src="../images/bg/1.png" height="300" />
                    </div>
                    <div className="">
                        <StaticImage src="../images/bg/2.png" height="300" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const SectionOne = () => {
    return (
        <section className="py-64 bg-dark relative">
            <div className="mask bg-five opacity-10"></div>
            <div className="flex">
                <div className="max-w-7xl mx-auto container px-4">
                    <p className="leading-1 tracking-wide  text-4xl sm:text-7xl font-bold text-pastel/80">Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.</p>
                    <p className="text-end text-xl text-pastel">- 1 Peter 4:10</p>
                </div></div>

        </section>
    )
}

const SectionTwo = () => {

    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto container px-4">
                <h3 className="text-dark font-bold font-sans mb-16">What We do</h3>
                <div className="md:grid flex flex-col grid-cols-3 gap-8">
                    <div className="card md:row-span-5 col-span-1 relative bg-cover bg-center bg-inspire flex items-end">
                        <div className='z-10 text-pastel'>
                            <h2 className='mb-2'>Inspire</h2>
                            <p className="mb-8 text-xl">Document the journey of Christian techies making a difference in their positions.</p>
                            <Link to="/about-us" aria-label="Get Inspired" >
                                <button aria-label="Get Inspired" className="btn bg-secondary text-white">
                                    <span>Get Inspired</span>
                                </button>
                            </Link>
                        </div>
                        <div className="mask bg-gradient-to-r from-black to-dark card opacity-70"></div>
                    </div>
                    <div className="card col-span-2 row-span-2  bg-[url(../images/bg/2.png)] bg-contain bg-no-repeat bg-right-bottom flex relative">
                        <div className='text-dark '>
                            <h3>Community</h3>
                            <p className="mb-8 max-w-[12rem] sm:max-w-xs md:max-w-md">Building a community of Christian techies, dedicated to excellence and consistency.</p>
                            <Link to="/about-us" aria-label="Find a unit" >
                                <button aria-label="Find a unit" className="btn bg-black text-white">
                                    <span>Find a unit</span>
                                </button>
                            </Link>
                        </div>
                        <div className="mask bg-gradient-to-r from-black to-dark card opacity-5"></div>
                    </div>


                    <div className="card col-span-2 row-span-3 h-full relative bg-cover  bg-evangelism bg-center flex">
                        <div className='z-10 text-pastel'>
                            <h3 className='mb-2'>Evangelism</h3>
                            <p className="mb-8 text-white/75">Propagating the gospel through tech</p>
                            <Link to="/about-us" aria-label="Join Us" >
                                <button aria-label="Join Us" className="btn bg-primary text-white">
                                    <span>Join Us</span>
                                </button>
                            </Link>
                        </div>
                        <div className="mask bg-gradient-to-r from-dark to-primary card mix-blend-multiply"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <ContactCard />
        <Subscribe />
    </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
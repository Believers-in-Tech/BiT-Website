import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import CommunityForm from '../components/CommunityForm'


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


const CommunityPage = () => (
    <Layout>
        <Seo title="Community" />
        <Hero />
        <CommunityForm/>
    </Layout>
)

export const Head = () => <Seo title="Community" />


export default CommunityPage
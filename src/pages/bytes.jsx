import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SubscribeStatic from '../components/SubscribeStatic'


const Hero = () => {
    return (
        <section className="max-h-[100vh] overflow-clip bg-inspire bg-no-repeat bg-cover bg-center relative">

            <div className="px-4 md:py-32 py-40">
                <div className="flex relative text-pastel">
                    <div className="text-left sm:text-center max-w-2xl mx-auto sm:mb-16 z-10">
                        <h3>Bytes</h3>
                        <div className="h-1 w-8 bg-pastel mt-4 mb-8 sm:mx-auto"></div>
                        <h1 className="text-5xl sm:text-6xl mb-4 font-semibold overflow-visible pb-6">
                            Documenting the journey of Christian techies that are making a difference in their positions.
                        </h1>

                        <h5 className="uppercase mt-16">Coming Soon</h5>
                    </div>
                </div>
                <div className="mask bg-gradient-to-r from-black to-dark opacity-70"></div>
            </div>
        </section>
    )
}

const Issues = () => {
    return <div></div>
}


const BytesPage = () => (
    <Layout>
        <Seo title="Bytes" />
        <Hero />
        <Issues />
        <SubscribeStatic />
    </Layout>
)

export const Head = () => <Seo title="Bytes" />

export default BytesPage
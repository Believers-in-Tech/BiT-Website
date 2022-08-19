import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Subscribe from '../components/Subscribe'
import { AppService } from '../utils/services';


const Hero = () => {
    return (
        <section className="max-h-[100vh] overflow-clip bg-inspire bg-no-repeat bg-cover bg-center relative">
   
            <div className="px-4 md:py-32 py-40 z-20">
                <div className="flex">
                    <div className="text-left sm:text-center max-w-2xl mx-auto sm:mb-16">
                        <h3>Bytes</h3>
                        <h1 className="text-6xl sm:text-6xl mb-4 font-semibold overflow-visible pb-6">
                        Documenting the journey of Christian techies that are making a difference in their positions.
                        </h1>
                    </div>
                </div>
            <div className="mask bg-dark z-10"></div>
            </div>
        </section>
    )
}

const Issues = () => {
    React.useEffect(() => {
        
        AppService.getIssues().then((res)=> {
            console.log(res)
        })

    }, [])
    

    return <div></div>

}


const BytesPage = () => (
    <Layout>
        <Seo title="Bytes" />
        <Hero />
        <Issues/>
        <Subscribe />
    </Layout>
)

export const Head = () => <Seo title="Bytes" />

export default BytesPage
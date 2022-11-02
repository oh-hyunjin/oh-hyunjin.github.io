import Layout from "../components/layout";
import Head from 'next/head'

export default function About(){
    return (
        <Layout>
            <div className="flex flex-col items-center m-10 px-6">
                <Head>
                    <title>About Me page</title>
                    <meta name="description" content="hmm,,nya,,ring,,,,," />
                </Head>
                <h1 className="text-2xl font-bold sm:text-2xl">
                    About Me
                </h1>
            </div>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                </div>
            </section>
            
        </Layout>
    );  
}

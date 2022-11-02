import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import PostItem from "../components/posts/post-item";

export default function Post({posts}) {

  console.log(posts);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
              
              <Head>
                <title>hyunjin blog</title>
                <meta name="description" content="hmm,,nya,,ring,,,,," />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <h1 className="text-3xl font-bold sm:text-4xl">
                총 포스트 : 
                <span className="pl-4 text-blue-500">{posts.results.length}</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 py-10 m-6 gap-5 w-full">
                {posts.results.map((aPost) => (
                  <PostItem key={aPost.id} data={aPost}/>
                ))}

              </div>
            
            </div>
            
        </Layout>
    );
}


export async function getStaticProps() {
    
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'content-type': 'application/json',
          authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100}) //page_size = n페이지까지 가져와라
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
      
    const posts = await res.json()

    const postNames = posts.results.map((aPost) =>(
        aPost.properties.이름.title[0].plain_text
    ))

    console.log(`postNames : ${postNames}`);

    return {
      props: {posts}, // will be passed to the page component as props
      revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다 - 갱신 주기 설정 가능
    }
}
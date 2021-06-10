import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

// React component to render this page with postData
// dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. 
export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> 
        </Layout>
    )
}

export async function getStaticPaths () {
    
    // Return an array of possible value for id
    const paths = getAllPostIds()
    console.log("paths",paths)

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {

    // Fetch necessary data for the blog Post using params.id
    // Add the "await" keyword because getPostData is using asyn await
    const postData = await getPostData(params.id) // The id param come from the dynamic name of the file [id].js which takes the name from the route http://localhost:3000/posts/[id] in this case, it can be http://localhost:3000/posts/pre-rendering or http://localhost:3000/posts/ssg-ssr to match the existing files and then could render these routes

    return {
        props: {
            postData
        }
    }

}


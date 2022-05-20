import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import {MyPost} from "../interfaces/post";

interface PostsPageProps {
    posts: MyPost[]
}
export default function Posts({posts}: PostsPageProps) {
    // const [posts, setPosts] = useState([])
    //
    // useEffect(()=> {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts')
    //         const json = await response.json()
    //         setPosts(json)
    //     }
    //     load()
    // }, [])

    return (
        <MainLayout>
            <Head>
                <title>Posts</title>
            </Head>
            <h1>Posts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
                </li>
            ))}
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts: MyPost[] = await response.json()

    return {
        posts
    }
}

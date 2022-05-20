import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {MyPost} from "../../interfaces/post";
import {NextPageContext} from "next";

interface PostPageProps {
    post: MyPost
}

export default function Post({post}: PostPageProps) {

    return (
        <MainLayout>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <Link href={'/posts'}><a>Back</a></Link>
        </MainLayout>
    )
}

// Post.getInitialProps = async ({query, req}) => {
//     if (!req) {
//         return {post: null}
//     }
//     console.log(req)
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json()
//
//     return {
//         post
//     }
// }

interface PostNextPageContext extends NextPageContext{
    query: {
        id: string
    }
}
export async function getServerSideProps({query}: NextPageContext) {
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post: MyPost = await response.json()

    return {props: {post}}
}

import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Next app</title>
                <meta name='keywords' content='next, js, nextjs, react'/>
                <meta name='description' content='this is tutorial next'/>
                <meta charSet='utf-8'/>
            </Head>
            <h1> Hello user</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
        </MainLayout>
    )
}

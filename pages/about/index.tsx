import Link from "next/link";
import React from "react";
import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";


export default function About( {title} ) {

    const handleClick = () => {
        Router.push('/posts')
    }

    return (
        <MainLayout>
            <h1>{title}</h1>
            <p><Link href={'/'}><button>Go back to home</button></Link></p>
            <p><button onClick={handleClick}>Go back to posts</button></p>
            <p><button onClick={() => Router.push('/posts')}>Go back to posts</button></p>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about')
    const data = await response.json()

    return {
        title: data.title
    }
}

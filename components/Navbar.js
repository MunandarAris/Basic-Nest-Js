import React from 'react'

// import component next js
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

// import style navbar
import Styles from '../styles/Navbar.module.css'

// efect if change route
NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}

function Navbar() {

    return (
        <>
            <Head>
                <meta name="keywords" content="logo" />
                <link rel="icon" href="/logo.svg" type="image/icon type"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
            </Head>

            <div className={Styles.navbar}>

                <Image src="/logo.svg" width="100" height="100" alt="logo"/>

                <nav>
                    <Link href="/" passHref>
                        <HomeLink />
                    </Link>

                    <Link href="/about" passHref>
                        <AboutLink />
                    </Link>

                    <Link href="/product" passHref>
                        <ProductLink />
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar;

// home link
const HomeLink = React.forwardRef(({ href }, ref) => {

    let router = useRouter()

    const onClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    const linkActive = {
        color : router.asPath == href ? "red" : "black"
    }

    return (
    <a href={href} onClick={onClick} ref={ref} style={linkActive}>
        Home
    </a>
    )
})

// about link
const AboutLink = React.forwardRef(({ href }, ref) => {

    let router = useRouter()

    const onClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    const linkActive = {
        color : router.asPath == href ? "red" : "black"
    }

    return (
    <a href={href} onClick={onClick} ref={ref} style={linkActive}>
        About
    </a>
    )
})

// product link
const ProductLink = React.forwardRef(({ href }, ref) => {

    let router = useRouter()

    const onClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    const linkActive = {
        color : router.asPath == href ? "red" : "black"
    }

    return (
    <a href={href} onClick={onClick} ref={ref} style={linkActive}>
        Product
    </a>
    )
})

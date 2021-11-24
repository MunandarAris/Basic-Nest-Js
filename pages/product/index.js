import React from 'react';

// import component nextjs
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

// get data
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataProduct = await res.json();

    return {
        props : {
            dataProduct
        }
    }

}

export default function products({dataProduct}) {

    return (
        <>
            <Head>
                <title>Logo | Product</title>
            </Head>

            <div className="content">
                {
                    dataProduct.map((item, index) => {
                        return (
                            <ul className="productName" key={index}>
                                <Link href={`/product/` + item.id} passHref>
                                    <DetailProduct name={item.name}/>
                                </Link>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

// home link
const DetailProduct = React.forwardRef(({name, href }, ref) => {

    let router = useRouter()

    const onClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
    <a href={href} onClick={onClick} ref={ref} className="name">
        {name}
    </a>
    )
})
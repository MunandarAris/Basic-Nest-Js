export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(item => {
        return {
            params : { id : item.id.toString() }
        }
    })

    return { 
        paths,
        fallback : false
    }

}

export const getStaticProps = async (context) => {

    const id = context.params.id

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props : {detail : data}
    }

}

export default function Detail({detail}) {

    return (
        <div>
            <h3>Name Product : {detail.name}</h3>
            <h3>Code : {detail.address.zipcode}</h3>
        </div>
    )
}

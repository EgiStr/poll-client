import Link from 'next/link'

const DiscoverItem = ({
    title ,
    count_answer ,
    create_at,
    slug
    }) => {
    return (
        <>
        <div className="mt-3 w-full md:w-1/2 flex ">
            <div className="hasil-voting w-1/12 pt-2">
                {count_answer}
            </div>
            <div className="flex flex-col w-fill mx-3">
                <Link href={`/${slug}`}>
                    <p className="title text-basefont-500 hover:text-basefont-50 subpixel-antialiased cursor-pointer font-serif an" >
                        {title}
                    </p>
                </Link>
                <p className="create italic text-base-400">
                    {create_at}
                </p>
            </div>
         </div>  
        </>
    )
}

export default DiscoverItem

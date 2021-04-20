import Detail from '../../components/detail/Detail'
import Comments from '../../components/detail/Comment'

const index = () => {
    return (
        <>

        <div className="container mx-auto my-20 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
            <Detail />
        </div>

        <div className="container mx-auto my-10 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
            <Comments/>
        </div>
        </>
    )
}

export default index

import axios from '../../../utils/axios'
import Comments from '../../../components/detail/comment/Comment'

const index = ({ data }) => {
    return (
        <>
         <div className="container mx-auto mt-10 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
            <Comments contenttype={7} comments={data} id={data[0].obj_id} />
         </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context
    
    try {
      const res = await axios.get(`comment/detail/${query.id}/`)
      if(!res.data){
        return {
          notFound: true,
        }
      }
      return {
        props: {
          data:res.data
        }, // will be passed to the page component as props
      }
    } catch (error) {
      return {
        notFound: true,
      }
    }
  }


export default index

import Detail from '../../components/detail/Detail'
import Comments from '../../components/detail/comment/Comment'
import axios from '../../utils/axios'

const index = ({ data }) => {
    const { id, author, desc, title , deadline ,deadlineAnswer ,create_at ,slug  ,contenttype ,choice ,comments} = data
    return (
        <>

        <div className="container mx-auto mt-10 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
            <Detail 
                id={id}
                title={title}
                author={author}
                desc={desc}
                deadline={deadline}
                deadlineAnswer={deadlineAnswer}
                create_at={create_at}
                slug={slug}
                choice={choice} />
        </div>

        <div className="container mx-auto my-10 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
            <Comments 
                contenttype={contenttype}
                comments={comments}
                id={id} />
        </div>
        </>
    )
}


export async function getServerSideProps(context) {
    const { query } = context
    
    try {
      const res = await axios.get(`api/${query.slug}`)
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

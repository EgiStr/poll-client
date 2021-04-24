import Char from '../../components/result/pie' ;
import ProgressBar from '../../components/result/progressBar'

import axios from '../../utils/axios'
import Link from 'next/link'
import ShareButton from '../../components/other/copyClipboard'

import { useRouter } from 'next/router'

const result = ({ data, slug }) => {
 
    const router = useRouter()
    const { title, desc, create_at, result, resultAll } = data
    const colorBg = [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 111, 197)',
          'rgb(162, 111, 197)',
          'rgb(147, 76, 197)',
          'rgb(38, 242, 197)',
          'rgb(253, 141, 191)',
          'rgb(228, 150, 72)',
          'rgb(78, 150, 72)'
    ]
   
    return (
        <>
            <div className="container mx-auto my-20 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-8 rounded">
                <div className="flex flex-col">
                    <div className="flex sm:justify-center mb-3">
                        <div className="flex flex-col">
                            <h1 className="text-2xl sm:text-4x1 mb-2">{title}</h1>
                            <p className="antialiased text-opacity-80 text-base-400 italic">Started About {create_at}</p>
                        </div>
                    </div>
                    <div className="desc text-base-500 text-lg italic sm:ml-7 my-3">
                        <blockquote>
                            " {desc}
                        </blockquote> 
                    </div>
                    <div className="flex flex-col md:flex-row max-h-1/2 my-auto">
                        <div className="flex flex-col md:w-4/5 w-full py-10  ">
                            {result.map((item,i) => {
                                let percent = item.result == 0 ? 0 :  item.result / resultAll 
                                return <ProgressBar key={i} name={item.text} percent={`${((percent * 100) + '').substring(0,5) }%`} color={colorBg[i]} />
                            })}
                        </div>
                        <div className="char p-4 inline-flex justify-center md:m-auto md:justify-items-center">
                            <Char data={{result,resultAll,title}} />
                        </div>
                    </div>
                    <div className="ml-2 sm:ml4">
                        <p className="mb-2 text-lg">Total Votes : {resultAll} vote</p>
                    </div>
                    <div className="flex flex-row sm:justify-between mt-2">
                        <ShareButton url={router.asPath} /> 
                        <Link href={`/${slug}`}>
                            <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l w-1/2">
                                Back to Vote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context
   
    try {
      const res = await axios.get(`api/${query.slug}/result`)
      if(!res.data){
        return {
          notFound: true,
          fallback:false
        }
      }
      return {
        props: {
          data:res.data,
          slug:query.slug
        }, // will be passed to the page component as props
      }
    } catch (error) {
     
      return {
        notFound: true,
      }
    }
  }

export default result

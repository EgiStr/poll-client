import { copyToClipboard } from '../../utils/copyClipbord'
import { shareurl } from '../../utils/baseUrl'

import { useContext } from 'react'
import { GlobalContext } from '../../store/contextApi';

export default function copyClipbord({ url }){
    const { dispatch } = useContext(GlobalContext)
    const copyClipbord = () => {
        try {
            copyToClipboard(shareurl(url))
            dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"Copy to Clipboard"
            })
         
        } catch (error) {
            dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"fail copy to clipboard"
            })

        }
    }
    return(
    <button onClick={() => copyClipbord()} className="transition duration-300shado ease-in-out focus:outline-none focus:w-outlin bg-blue-300 hover:bg-blue-700 w-1/2 border sm:w-1/4 sm:min-h-full  border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex items-center justify-center">
        <span>Share</span>
    </button> ) 
}
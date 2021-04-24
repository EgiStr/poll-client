import { useCallback } from 'react'
import UseEsc from '../../../utils/reacthooks/useEscape'
import RootContent from './selectedContent'

const modal = ({ 
    open, 
    setOpen, 
    type, 
    title,
    desc,
    id,
    deadline }) => {

    const onEsc = useCallback(() => setOpen(false),[])
    UseEsc(onEsc)

    return (
       
        <div className={`fixed z-10 inset-0 overflow-y-auto ${!open && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* opacity */}
                <div onClick={() => setOpen(prev => !prev )} className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className=" hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                {/* content modal */}
                <div className=" bg-gradient-to-r from-bgseccond to-bgseccond2 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 min-w-max">
                    <RootContent 
                        title={title} 
                        type={type}
                        desc={desc}
                        deadline={deadline}
                        id={id} />
                </div>            
            </div>
        </div>
        </div>
    )
}

export default modal

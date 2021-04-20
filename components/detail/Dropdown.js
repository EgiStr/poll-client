import { useState } from 'react'

const Dropdown = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <img onClick={() => setShow(prev => !prev )} className="cursor-pointer" loading="eager" src="https://img.icons8.com/color/22/000000/more.png"/>
            <div className="dropdown inline-block relative">
                <ul className={`dropdown-menu absolute right-4 sm:right-0 bg-bgseccond text-white pt-1 ${show ? 'block' : 'hidden'}`}>
                    <li className=""><a className="rounded-t py-2 px-4 block whitespace-no-wrap" href="#">Edit Title or Desc</a></li>
                    <li className=""><a className=" py-2 px-4 block whitespace-no-wrap" href="#">Update Deadline</a></li>
                    <li className=""><a className=" py-2 px-4 block whitespace-no-wrap" href="#">Delete</a></li>
                    <li className=""><a className="rounded-b  py-2 px-4 block whitespace-no-wrap" href="#">Share</a></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown

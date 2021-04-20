import ChildComment from './ChiildComment'

const Rootcomment = () => {
    return (
        <>
            <div className="commet flex flex-col mt-4">
                <div className="block px-2 ">
                    the hell bro
                </div>
                <div className="flex">
                    <div className="block px-2">
                        21 day agoes
                    </div>
                    <button className="block px-2 cursor-pointer">
                        Reply
                    </button>
                </div>
                <ChildComment />
                <ChildComment />
            </div>
        </>
    )
}

export default Rootcomment

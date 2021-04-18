import React from 'react'

const DiscoverItem = props => {
    return (
        <>
        <div className="mt-6 w-full md:w-1/2 flex ">
            <div className="hasil-voting w-1/12 pt-1">
                500
            </div>
            <div className="flex flex-col w-fill mx-3">
                <p className="title text-basefont-400 hover:text-basefont-50 subpixel-antialiased cursor-pointer font-serif an" >
                    mau tau ga ?? kalo ini bis ajadi panjang kalo ini ga ada
                </p>
                <p className="create" style={{ color:'gray' }}>
                    started at 5 hours agoes
                </p>
            </div>
         </div>  
        </>
    )
}

export default DiscoverItem

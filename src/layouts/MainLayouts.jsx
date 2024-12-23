import React, { Children } from 'react'
import { Link } from 'react-router-dom'
function MainLayouts({ children }) {
    return (
        <div className=''>
            <header className='flex items-center bg-blue-600 justify-between max-w-[1020px] mx-auto p-1 '>
                <div className='text-white font-extrabold text-4xl'>LOGO</div>
                <div className='flex items-center gap-11 '>

                    <Link className='bg-green-500 py-2 px-3 text-white rounded-md transform active:scale-[0.95]' to='/'>Home</Link>
                    <Link className='bg-green-500 py-2 px-3 text-white rounded-md transform active:scale-[0.95]' to='/todo'>Todo</Link>
                    <Link className='bg-green-500 py-2 px-3 text-white rounded-md transform active:scale-[0.95]' to='/Api'>Api</Link>
                    <Link className='bg-green-500 py-2 px-3 text-white rounded-md transform active:scale-[0.95]' to='/Dark'>Dark</Link>
                    <Link className='bg-green-500 py-2 px-3 text-white rounded-md transform active:scale-[0.95]' to='/form'>Form</Link>
                </div>
                <div>
                    <button className='bg-green-500 py-2 px-7 rounded-md text-2xl text-white '>Ok</button>
                </div>
            </header>



            {children}

        </div>
    )
}

export default MainLayouts
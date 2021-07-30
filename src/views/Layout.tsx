import React from 'react'

const Header = (): React.ReactElement => {
    return (
        <nav className='bg-gray-900'>
            <div className='mx-4 py-2 flex items-center gap-4'>
                <h2 className='text-white'>Logo</h2>
                <a href="#" className='text-white'>Link</a>
                <a href="#" className='text-white'>Link</a>
            </div>
        </nav>
    )
}

export default Header

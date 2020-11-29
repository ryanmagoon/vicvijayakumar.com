import React from 'react'

import NavbarLink from 'components/Layout/NavbarLink'

function Navbar() {
    return (
        <div className="relative overflow-hidden">
            <div className="relative pt-6 pb-12">
                <nav className="relative flex items-center max-w-screen-lg px-4 mx-auto sm:px-6">
                    <div className="text-right sm:flex-1 sm:block">
                        <NavbarLink href="/" label="Home" />
                        <NavbarLink href="/about" label="About" />
                        <NavbarLink href="/uses" label="Uses" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

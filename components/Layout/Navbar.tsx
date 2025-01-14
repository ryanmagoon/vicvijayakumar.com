import NavbarLink from 'components/Layout/NavbarLink'

const Navbar = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="relative pt-6 pb-12">
                <nav className="relative flex items-center max-w-screen-lg px-4 mx-auto sm:px-6">
                    <div className="text-right sm:flex-1 sm:block">
                        <NavbarLink href="/" label="home" />
                        <NavbarLink href="/links" label="links" />
                        <NavbarLink href="/uses" label="uses" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

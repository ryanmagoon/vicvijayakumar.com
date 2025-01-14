import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const NavbarLink = ({ href, label }) => {
    const className =
        'mr-10 font-medium transition duration-150 ease-in-out sm:mr-0 sm:ml-10 focus:outline-none'

    const { pathname } = useRouter()
    const activeClass =
        href !== '/' && pathname.startsWith(href)
            ? 'text-black dark:text-white font-bold'
            : 'text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hover:text-gray-900'

    return (
        <Link href={href}>
            <a className={`${className} ${activeClass}`}>{label}</a>
        </Link>
    )
}

NavbarLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default NavbarLink

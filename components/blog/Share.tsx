import PropTypes from 'prop-types'
import { TwitterShareButton } from 'react-share'
import { usePlausible } from 'next-plausible'

const Share = ({ url, title, twitterHandle }) => {
    const plausible = usePlausible()

    return (
        <div className="mx-auto mt-20 text-center border-t border-blue-400">
            <TwitterShareButton
                url={url}
                title={title}
                via={twitterHandle}
                onClick={() => plausible('Shared on Twitter')}
            >
                <div className="pt-20 text-2xl">
                    If you liked this article, <span className="font-bold">click here</span> to
                    share it on Twitter
                    <br />
                    <span className="text-xs">and please say nice things.</span>
                </div>
            </TwitterShareButton>
        </div>
    )
}

Share.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string,
}

Share.defaultProps = {
    twitterHandle: 'VicVijayakumar',
}

export default Share

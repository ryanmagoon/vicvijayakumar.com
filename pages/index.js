/* eslint-disable react/no-array-index-key */
import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'

import DefaultLayout from 'components/Layout/DefaultLayout'
import PostPreview from 'components/blog/PostPreview'
import { getAllPosts } from 'utils/blog'

export default function Index({ allPosts }) {
    return (
        <DefaultLayout className="homepage" title="Vic Vijayakumar">
            <div className="md:mx-auto lg:col-span-12 lg:text-left">
                <h1 className="mt-1 text-4xl font-medium leading-10 tracking-tight text-left text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    Hello, I'm Vic{' '}
                    <span role="img" aria-label="wave">
                        👋🏾
                    </span>
                </h1>

                <div className="mt-8 text-lg text-left">
                    <p>
                        I'm a software engineer, runner, dad, and indie maker currently living in
                        Raleigh, NC. I work in scientific publishing.
                    </p>
                    <p>
                        <Link href="/about">
                            <a>More about me →</a>
                        </Link>
                    </p>
                </div>

                <div className="mt-12 text-left">
                    <h2 className="mb-3 text-2xl font-semibold">Writing</h2>
                    <p className="mb-8 text-lg">
                        This is my personal website. I've realized that if I try to get my thoughts{' '}
                        <b>perfect</b> before hitting publish they will never see the light of day.
                        So strap yourself in and read the things I was happy to put out into the
                        world, freed from expectations.
                    </p>

                    {allPosts.map((post) => (
                        <PostPreview key={post.filePath} post={post} />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    )
}

Index.propTypes = {
    allPosts: PropTypes.array.isRequired,
}

export async function getStaticProps() {
    const allPosts = await getAllPosts()

    allPosts.sort((a, b) => (a.data.date > b.data.date ? -1 : 1))

    return { props: { allPosts } }
}
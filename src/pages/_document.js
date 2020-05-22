import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    render() {
        return (
            <Html className="bg-white" lang="en">
                <Head />

                <body className="font-sans antialiased leading-normal text-gray-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

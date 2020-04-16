import React from 'react'

import Layout from '../components/layout'

import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page Not Found</h1>
            <p>You Failed</p>
        </Layout>
    )

}

export default NotFound;
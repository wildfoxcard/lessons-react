import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

import Head from '../components/head'

const BlogPage = () => {
    const blogs = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
            sort: {
                fields:publishedDate,
                order: DESC
            }
            ) {
            edges {
                node {
                title
                slug
                publishedDate (formatString: "MMMM Do, YYYY")
                }
            }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>

            <ol className={blogStyles.posts}>
                {blogs.allContentfulBlogPost.edges.map((blog, index) => {
                    return (
                        <li key={index} className={blogStyles.post}>
                            <Link to={`/blog/${blog.node.slug}`}>
                                <h2>
                                    {blog.node.title}
                                </h2>
                            <p>{blog.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            <p>Posts will show up here later on.</p>
        </Layout>
    )
}

export default BlogPage
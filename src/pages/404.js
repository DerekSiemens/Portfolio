import React from 'react'
import { Link } from 'gatsby'
import { Layout, ContainerDiv, ArticleContent } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body">
                    Page not found, <Link to="/">return home</Link> to start over
                </section>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default NotFoundPage

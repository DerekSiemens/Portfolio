import React from 'react'
import { Link } from 'gatsby'
import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent style={{ textAlign: `center` }}>
                <Title>Error 404</Title>
                <section className="content-body">
                    Page not found, <Link to="/">return home</Link> to start over
                </section>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default NotFoundPage

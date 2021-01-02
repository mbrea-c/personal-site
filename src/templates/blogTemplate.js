import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"

require(`katex/dist/katex.min.css`)

const BlogPostContainer = styled.div`
	.date-label {
		font-size: 0.83255rem;
		line-height: 1.75rem;
		display: block;
		margin-bottom: 1.75rem;
		margin-top: 0;
	}
	.title {
		margin-bottom: 0;
	}
`

export default function Template({ data }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<BlogPostContainer className="blog-post-container">
				<div classname="blog-post">
					<h1 className="title">{frontmatter.title}</h1>
					<p className="date-label">{frontmatter.date}</p>
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</BlogPostContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
			}
		}
	}
`

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { theme } from "../utils/typography"

const BlogPostContainer = styled.div`
	.link {
		text-decoration: none;
		font-weight: bold;
		color: ${theme.headerColor};
	}
`

const DateLabel = styled.label`
	font-size: 0.75rem;
	font-style: italic;
	margin: 0;
	padding: 0;
	position: relative;
	top: -0.3rem;
`

const Separator = styled.hr`
	max-width: 42rem;
	margin: auto;
	border-top: 1px solid lightgray;
	border-bottom: none;
	height: 0;
	background-color: rgba(0, 0, 0, 0);
`

const BlogPostTitle = styled.h2`
	display: inline-block;
	padding: 0;
	margin: 0;
	margin-top: 0.5rem;

	.link {
		font-weight: 800;
	}
	.link:hover {
		color: #0085a1;
	}
`

const BlogPostEntry = props => {
	return (
		<BlogPostContainer>
			<BlogPostTitle>
				<Link className="link" to={props.slug}>
					{props.title}
				</Link>
			</BlogPostTitle>
			<br />
			<DateLabel>Posted on {props.date}</DateLabel>
			<p>{props.description}</p>
		</BlogPostContainer>
	)
}

const Home = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<Layout>
			<Separator />
			{posts.map(({ node }) => {
				return (
					<div key={node.frontmatter.slug}>
						<BlogPostEntry
							slug={node.frontmatter.slug}
							title={node.frontmatter.title}
							date={node.frontmatter.date}
							description={node.frontmatter.description || node.excerpt}
						/>
						<Separator />
					</div>
				)
			})}
		</Layout>
	)
}

export default Home

export const pageQuery = graphql`
	{
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 1000
		) {
			edges {
				node {
					excerpt
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						slug
						description
					}
				}
			}
		}
	}
`

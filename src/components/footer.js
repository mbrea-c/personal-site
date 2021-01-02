import React from "react"
import styled from "@emotion/styled"

const FooterDiv = styled.div`
	margin: 0;
	padding: 1rem;
	background-color: #eaeaea;
	text-align: center;
	font-size: 0.9rem;

	a {
		color: black;
		font-weight: bold;
	}

	p {
		padding: 0;
		margin: 0;
	}

	p.powered-by {
		font-size: 0.75rem;
	}
`

const Footer = () => {
	return (
		<FooterDiv>
			<p>Manuel Brea • 2020</p>
			<p className="powered-by">
				{" "}
				Powered by
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</p>
		</FooterDiv>
	)
}

export default Footer

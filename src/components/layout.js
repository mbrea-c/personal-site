import React from "react"

import Header from "./header"
import Footer from "./footer"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

const MainDiv = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 50rem;
	padding: 2.625rem 1.3125rem;
`

const Layout = ({ children }) => {
	return (
		<div>
			<Global
				styles={css`
					body {
						margin: 0;
						padding: 0;
					}
				`}
			/>
			<Header />
			<MainDiv>{children}</MainDiv>
			<Footer />
		</div>
	)
}

export default Layout

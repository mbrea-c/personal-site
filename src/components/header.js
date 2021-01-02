import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { theme } from "../utils/typography"

const Navbar = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #eaeaea;
	border-bottom: 1px solid lightgray;

	li {
		float: right;
		margin: auto;
	}

	li h3 {
		display: inline;
		font-size: 1rem;
	}

	li .link {
		display: block;
		color: ${theme.headerColor};
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li .link:hover {
		background-color: #e0e0e0;
	}
`

const Title = styled.div`
	display: block;
	float: left;
	margin-left: 1.5rem;
	background-color: lightgray;
	height: 4.2rem;

	.first-name {
		font-weight: 800;
		padding: 0rem;
		margin: 0;
	}
	.last-name {
		font-weight: 400;
		font-size: 1.5rem;
		padding: 0rem;
		margin: 0;
		top: -0.5rem;
		position: relative;
	}
`

const Info = styled.div`
	padding: 1rem;
	margin: 0;
	background-color: lightgray;
	overflow: hidden;
	padding: 0;
`
const PersonalLinks = styled.div`
	padding: 1rem;
	margin: 0;
	background-color: lightgray;
	float: right;
	text-align: right;
`

const NavbarItem = props => {
	return (
		<li>
			<h3>
				<Link className="link" to={props.to}>
					{props.text}
				</Link>
			</h3>
		</li>
	)
}

const Header = () => {
	return (
		<div className="header">
			<Info>
				<Title>
					<h1 className="first-name">MANUEL</h1>
					<h1 className="last-name">BREA CARRERAS</h1>
				</Title>
				<PersonalLinks>
					<a href=""></a>
				</PersonalLinks>
			</Info>
			<Navbar className="navbar">
				<NavbarItem to="/about/" text="About" />
				<NavbarItem to="/cv/" text="Resume" />
				<NavbarItem to="/" text="Home" />
			</Navbar>
		</div>
	)
}

export default Header

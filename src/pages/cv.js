import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { theme } from "../utils/typography"

const Separator = styled.hr`
	max-width: 42rem;
	margin: auto;
	border-top: 1px solid lightgray;
	border-bottom: none;
	height: 0;
	background-color: rgba(0, 0, 0, 0);
`

const OtherSkills = () => {
	const otherSkills = [
		{ name: "git", description: "Used for most of my projects." },
		{
			name: "React/Redux",
			description: "Used to build frontend for hackathon and personal projects."
		},
		{
			name: "NodeJS",
			description:
				"Used to build backend (with PostgreSQL database and Koa web framework) for personal projects."
		},
		{
			name: "LaTeX",
			description: "Writing reports."
		},
		{
			name: "Linux/UNIX",
			description:
				"Scripting/task automation with shell/bash, other general knowledge arising from several years of Linux use."
		}
	]
	return (
		<div>
			<h2 style={{ "margin-top": 0 }}>Other skills</h2>
			<ul>
				{otherSkills.map(({ name, description }) => (
					<li key={name} style={{ margin: "0rem", "margin-bottom": "0.3rem" }}>
						<b>{name}</b>: {description}
					</li>
				))}
			</ul>
		</div>
	)
}

const ProgrammingLanguages = () => {
	const programmingLanugages = [
		{ name: "C", level: 90 },
		{ name: "JavaScript", level: 80 },
		{ name: "Shell/Bash", level: 78 },
		{ name: "Python", level: 70 },
		{ name: "HTML/CSS", level: 70 },
		{ name: "Java", level: 60 },
		{ name: "Haskell", level: 40 },
		{ name: "MIPS32", level: 30 }
	]
	const ProgrammingLanguage = ({ name, level }) => {
		const labelWidth = 30
		const SkillBar = styled.div`
			width: auto;
			height: 1rem;
			background-color: lightgray;

			div {
				background-color: #0085a1;
				width: ${level}%;
				height: 1rem;
			}
		`
		return (
			<div>
				<div style={{ width: `${labelWidth}%`, float: "left" }}>{name}</div>
				<div style={{ width: `${100 - labelWidth}%`, float: "right" }}>
					<SkillBar>
						<div></div>
					</SkillBar>
				</div>
				<br />
			</div>
		)
	}

	return (
		<div>
			<h2 style={{ "margin-top": 0 }}>Programming languages</h2>
			{programmingLanugages.map(({ name, level }) => (
				<ProgrammingLanguage key={name} name={name} level={level} />
			))}
		</div>
	)
}

const Home = () => {
	const progLangsWidth = 50
	return (
		<Layout>
			<div style={{ display: `block`, overflow: "hidden" }}>
				<div style={{ width: `${progLangsWidth - 3}%`, float: "left" }}>
					<ProgrammingLanguages />
				</div>
				<div style={{ width: `${97 - progLangsWidth}%`, float: "right" }}>
					<OtherSkills />
				</div>
			</div>
		</Layout>
	)
}

export default Home

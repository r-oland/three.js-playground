// Components==============
import { createGlobalStyle } from 'styled-components';
// =========================

export const GlobalStyles = createGlobalStyle`
	:root {
		--leva-fonts-mono: 'Raleway', sans-serif !important;  
	}

	html {
		background-color: ${({ theme }) => theme.color.offWhite};
	}

	canvas {
		background-color: ${({ theme }) => theme.color.gray}
	}

	body {
	font-family: 'Raleway', sans-serif;
	color: ${({ theme }) => theme.color.black};
	}

	h1 {
	font-size: ${({ theme }) => theme.fontSize.h1};
	}

	h2 {
	font-size: ${({ theme }) => theme.fontSize.h2};
	}

	h3 {
	font-size: ${({ theme }) => theme.fontSize.h3};
	}

	p,
	a,
	strong,
	li,
	input,
	textarea,
	button {
	font-size: ${({ theme }) => theme.fontSize.m};
	}

	small {
	font-size: ${({ theme }) => theme.fontSize.s};
	}

	input,
	textarea,
	select {
	font-family: 'Raleway', sans-serif;
	border-radius: ${({ theme }) => theme.borderRadius};
	}

	/* reset */

	svg {
	display: block;
	}

	html {
	@include scrollBar;
	}

	*,
	::before,
	::after {
	box-sizing: border-box;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul,
	ol,
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd {
	margin: 0;
	}

	p,
	ul,
	ol,
	dl,
	address,
	button {
	padding: 0;
	}

	input,
	textarea {
	width: 100%;
	resize: vertical;

	&:focus-visible {
		outline: none;
	}
	}

	button {
	background: none;
	color: ${({ theme }) => theme.color.black};
	border: none;
	padding: 0;
	cursor: pointer;
	font-family: inherit;
	outline: inherit;
	}

	pre {
	white-space: pre-wrap;
	}

	hr {
	border: 0.5px solid;
	}

	ul {
	list-style: none;
	}

	ol {
	padding-left: ${({ theme }) => theme.spacing.s4};
	}

	a {
	color: ${({ theme }) => theme.color.black};
	text-decoration: none;
	}

	img,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
	display: block;
	}

	img,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
	vertical-align: middle;
	}

	img,
	video {
	max-width: 100%;
	height: auto;
	}

	img {
	border-style: none;
	}
`;

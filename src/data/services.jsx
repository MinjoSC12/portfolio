import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Experiencia en desarrollo de páginas Web con tecnología responsiva para tu negocio, empresa o proyecto.',
	},
	{
		title: 'Habilidades',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Conocimientos en HTML, CSS, JavaScript, React, NodeJs, Tailwind, Python, Postman, SQL Lenguage, Servidores Web, Flask, AWS entre otras tecnologías',
	},
	{
		title: 'Deployment',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Experiencia en despliegue de aplicaciones y actualizaciones.',
	},
];
import React from 'react';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>Acerca de mi</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
                Mi nombre es Alfredo soy Desarrollado FullStack, tengo 27 años  y me encanta estar en mi ordenador programando, diseñando y jugando a videojuegos.
				</p>
				<a
					href="mailto:nobrain173@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					Email: nobrain173@gmail.com
				</a>
			</div>

			<img
				src='https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/320653005_684205133367066_5689590476347641909_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFkYXkKavgPE8xJI_fwIzgQTkJR2lvzEFhOQlHaW_MQWHD5rsQcxbG5hh-hEjuNe0LDG1fQ8Spixl8B3qe3mpPV&_nc_ohc=NHeDXxbmbAMAX8uDpXd&_nc_ht=scontent-lim1-1.xx&oh=00_AfCFLgGHcJ3Guhjqyv-WPehnTZagagUcgVoAiok_WW8ugg&oe=64716367'
				alt="Minjo"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
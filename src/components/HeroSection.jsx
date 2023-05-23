import React from 'react'

function HeroSection() {
  return (
    <div id='hero'className='flex items-center justify-center flex-col py-20 '>
        <img
				src='https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/320653005_684205133367066_5689590476347641909_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFkYXkKavgPE8xJI_fwIzgQTkJR2lvzEFhOQlHaW_MQWHD5rsQcxbG5hh-hEjuNe0LDG1fQ8Spixl8B3qe3mpPV&_nc_ohc=NHeDXxbmbAMAX8uDpXd&_nc_ht=scontent-lim1-1.xx&oh=00_AfCFLgGHcJ3Guhjqyv-WPehnTZagagUcgVoAiok_WW8ugg&oe=64716367'
				alt="Minjo"
				className=" md:w-6/12 rounded-lg object-scale-down h-48 w-96 mb-5"
			/>
        <div className='text-center'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold font-inter'>Hola, mi nombre es Alfredo</h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Soy Desarrollador Web Full Stack Junior, Bachiller en Ingenieria en Telecomunicaciones y tengo gran capacidad comunicativa</p>
            <a href="https://github.com/MinjoSC12?tab=repositories" className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>Ver Proyectos</a>
        </div>
    </div>
  )
}

export default HeroSection
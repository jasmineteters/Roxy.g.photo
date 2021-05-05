import React from 'react'

export default function About() {
  return (
    <section className='flex flex-col tablet:flex-row max-w-full justify-center'>
      <div className='flex w-full h-screen flex-shrink'>
        <div className='phone:max-h-96 tablet:h-5/6'>
          <img
            className='phone:hidden tablet:block w-screen h-screen object-contain object-middle object-right tablet:p-10'
            src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613248507/portfolio-sq_copy_z1wuns.jpg'
            alt=''
          />
          <img
            className='tablet:hidden w-screen h-screen object-contain object-middle '
            src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613238151/portfolio_u8woqj.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='phone:container phone:w-full phone:justify-center mx-auto flex mb-10'>
        <div className='phone:w-full tablet:max-w-lg flex flex-col justify-center phone:p-0 tablet:p-10'>
          <h1 className='text-3xl font-josefin font-light'>
            Hi, I'm Roxy
          </h1>
          <p className='font-raleway'>
            <br />
            I’m a portrait, couples, and commercial/product photographer based
            out of Salt Lake City, UT. When I’m not taking photos, I’m usually
            snuggling my shih tzu, Simon, or cycling out on my road bike. During
            the winter I like cross country skiing (downhill skiing is a little
            too intense for me!). I also enjoy traveling and landscape or
            milkyway photography in new locations, I ALWAYS take my camera with
            me when I’m traveling.
            <br />
            <br />
            Capturing real moments, as well as fashion is my passion! I love
            making my clients feel their absolute best in front of the camera.
            I’m generally a very silly person, so do not be afraid to let loose
            in front of the camera with me, often that leads to the best
            photographs! If you have an idea you’d like to bring to life, let’s
            chat!
          </p>
          <button className='bg-oxfordBlue w-1/3 rounded-md py-3 px-2 mt-6 text-white place-self-center font-bioRhyme font-thin'>
            <a href='mailto:jasmineteters2020@gmail.com'>Email Me</a>
          </button>
        </div>
      </div>
    </section>
  );
}

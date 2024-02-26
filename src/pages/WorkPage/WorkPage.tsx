import rssApp from '../../assets/projects/RSS-App.webp';
import diffCalc from '../../assets/projects/diff-calc.webp';
import brainGames from '../../assets/projects/brain-games.webp';

import projects, { type Project } from './../../data.ts';

const WorkPage = () => {
  return (
    <section className='h-full p-4  text-lg'>
      <div className='h-screen flex flex-col justify-center gap-x-4 md:items-center md:flex-row pt-[100px] '>
        <h2 className='mb-4 md:flex-1 text-6xl md:text-8xl uppercase'>
          Projects
        </h2>
        <p className='md:flex-1 text-2xl lg:text-3xl leading-none'>
          Below is a list of selected projects I have done. If you have any
          questions feel free to&nbsp;
          <a
            href='mailto: ozerova.lenka@gmail.com'
            className='hover:text-yellow'
          >
            PING ME
          </a>
          .
        </p>
      </div>

      <div className='mb-10'>
        <ul className='uppercase '>
          {projects.map((project) => (
            <li
              key={project.id}
              className='h-screen w-full mb-4 md:mb-2 flex flex-col md:flex-row md:items-center gap-x-4 hover:bg-gray'
            >
              <div className='flex-1 flex flex-col justify-end md:block'>
                <h3 className='pt-2 text-4xl'>{project.name}</h3>
                <p className='py-4 leading-none'>{project.description}</p>
                <div className='flex justify-between'>
                  {project.live.length === 0 ? (
                    <div className='w-12'>-</div>
                  ) : (
                    <a
                      className='text-3xl hover:text-yellow'
                      href={project.live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      LIVE
                    </a>
                  )}
                  <a
                    className='text-3xl hover:text-green'
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className='flex-1 flex flex-col justify-center items-center h-full md:h-[320px] bg-black overflow-hidden'>
                <img src={project.image} alt={`${project.name} screenshot`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className='text-center text-3xl uppercase mb-10'>
        see more apps&nbsp;
        <a
          className='underline hover:text-red'
          href='https://elen-oz.notion.site/About-Me-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
        &nbsp;or&nbsp;
        <a
          href='mailto: ozerova.lenka@gmail.com'
          className=' underline hover:text-yellow'
        >
          ping me
        </a>
      </p>
    </section>
  );
};
export default WorkPage;

import React, { useEffect, useState } from 'react';
import './About.css'
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutSectionTop = aboutSection.getBoundingClientRect().top;
      const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (aboutSectionTop < windowHeight && aboutSectionBottom > 0) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    {css: 'CSS'},
    {html: 'HTML'},
    {js: 'JAVASCRIPT'},
  ]

  const info = [
    {Name: 'Elnie Ebasan'},
    {Birthday: 'December 13, 1990'},
    {Location: 'Pamplona, Negros Oriental'},
    {Education: 'Elementary Education, Information Technology'},
    {Experience: 'Data Entry, Customer Service, Production Crew'},
    {Motivation: 'Family and Goals'}
  ]

  return (
    <div className='about-page' id='about'>

      <section className='about-title'>
        <h2 className='title'>About Page</h2>
      </section>

      <section>
        <div className='about-intro'>
            <p className={`about-description ${animate ? 'animate' : ''}`}>
              Hi! I am Elnie Ebasan, a current student of Kodego under the WD35-P class. I love and enjoy creating and designing websites. We've made several activities already and now we are down to our mini-project. A dedicated Web Developer with a strong interpersonal skills and potential. Willing to accept comments and suggestions to enhance my knowledge and improve my skills.
            </p>
        </div>
      </section>

      <section className='about-skills-info'>
        <div className="about-item">
          <Skills skillsInfo={skills} />
        </div>
        <div className="about-item">
            <PersonalInfo personalInfo={info}/>
        </div>
      </section>

    </div>
  );
};

export default About;

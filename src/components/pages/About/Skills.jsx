import React from 'react'
import './Skills.css'

const Skills = (props) => {
    const skillsInfo = props.skillsInfo;
    // const { html, css, js } = props;
    // console.log(skillInfo);

  return (
    <div className='skills-section'>
      <h3>Skills section</h3>
      <div className='skills-body'>
        <ul style={{ listStyleType: 'none' }}>
            <li className='circle-animation'>{skillsInfo[0].css}</li>
            <li className='circle-animation'>{skillsInfo[1].html}</li>
            <li className='circle-animation'>{skillsInfo[2].js}</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills

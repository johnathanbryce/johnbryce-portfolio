import styles from './Projects.module.css';
// Components
import PagesContainer from '../../components/PagesContainer/PagesContainer';
import SectionBreakTitle from '../../components/SectionBreakTitle/SectionBreakTitle'
// Pages
import ProjectContainer from './ProjectContainer/ProjectContainer';
// Internal Assets
import julien from '../../images/julien.jpeg'
import sollunnaEssence from '../../images/sollunnaEssence.jpeg'
import diceGame from '../../images/diceGame.jpeg';
import dailyFeed from '../../images/dailyFeed.jpeg';
import romp from '../../images/romp.jpeg';
import oldPortfolio from '../../images/portfolioOld.jpeg';
import jBDev from '../../images/jBDev.jpeg';
import myTube from '../../images/myTube.png'
import fitFriends from '../../images/fitFriends.png'

function Projects() {

  return (
    <div>
      <SectionBreakTitle header='check out my work.' />   
      <PagesContainer>
        <section className={styles.projects_container}>
           <ProjectContainer
                flexDirection='normal'
                featuredType='Project'
                title='Fit Friends'
                link={'https://fitfriends-five.vercel.app/'}
                description="Fit Friends is a dynamic full-stack web application that enables users to create, join, and invite others to personalized fitness challenges. As my debut full-stack project, it exemplifies a seamless integration of front-end flair and back-end prowess, offering an interactive platform for fitness community building."
                languages="Next.js, TypeScript, Firebase Realtime Database, Firebase Authentication, CSS"
                img={fitFriends}
                github='https://github.com/johnathanbryce/fitfriends'
            />
          <ProjectContainer
                flexDirection=''
                featuredType='Project'
                title='MyTube'
                link={'https://mytube-jb.vercel.app/'}
                description="MyTube fetches data from multiple YouTube channels, displaying the 8 latest videos for each. With seamless integration with the YouTube API, it keeps me updated on the latest content from my favourite creators, all in one place."
                languages="Next.js, TypeScript, CSS, HTML"
                img={myTube}
                github='https://github.com/johnathanbryce/mytube'
            />
          <ProjectContainer
                flexDirection='normal'
                featuredType='Work'
                title='jB Web Dev & Design'
                link={'https://johnbryce-web-dev.vercel.app/'}
                description="A landing page to promote my web development skills, focusing on small businesses as my target audience."
                languages="Next.js, TypeScript, CSS, HTML"
                img={jBDev}
                github='https://github.com/johnathanbryce/johnbryce-web-dev'
            />
          <ProjectContainer
                flexDirection=''
                featuredType='Work'
                title='Julien Verschooris'
                link={'https://www.julienverschooris.com/'}
                description="This portfolio website showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer."
                languages="Next.js, TypeScript, CSS, HTML"
                img={julien}
                github='https://github.com/johnathanbryce/julien-verschooris'
            />
            <ProjectContainer
              flexDirection='normal'
              featuredType='Work'
              title='romp'
              link={'https://rompathlete.com/'}
              description='Romp is an activity planning social platform that allows you to create and share activities and events. You can broadcast what you are doing, when you are doing it, and then go and do it with the people you actually want to do it with, in your area!'
              languages="React, JavaScript, CSS, HTML"
              img={romp}
              github='https://github.com/rompAthlete/rompWebsite'
          />
          <div className={styles.line_content_break_horizontal}> </div>
          <ProjectContainer
            flexDirection=''
            featuredType='Work'
            title='SolLunna Essence'
            link="https://www.sollunaessence.com/"
            description='This website provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from Bio-Energy Healing Practitioner and Intuitive reader, Sydney Fisher.'
            languages="CSS, SCSS, HTML, JavaScript, jQuery "
            img={sollunnaEssence}
            github='https://github.com/johnathanbryce/solLuna-essence'
          />
          <div className={styles.line_content_break_horizontal}> </div>
          <ProjectContainer
            flexDirection='normal'
            featuredType='Project'
            title='My Daily Feed'
            link="https://my-daily-feed.netlify.app/"
            description='A React app which provides curated articles that are tailored towards topics of personal interest that update every two hours. It also provides updates on Vancouver weather.'
            languages="React, JavaScript, CSS, HTML "
            img={dailyFeed}
            github='https://github.com/johnathanbryce/my-daily-feed'
          />
          <div className={styles.line_content_break_horizontal}> </div>
          <ProjectContainer
            flexDirection=''
            featuredType='Project'
            title='Dice Game'
            link="https://dice-game-jb.netlify.app/"
            description="A dice rolling game against a computer. Highest number after 3 rolls wins! My final individual project for BCIT's COMP2131 - Web Development with Javascript that received a grade of 100%."
            languages="JavaScript, jQuery, CSS, SCSS, HTML "
            img={diceGame}
            github='https://github.com/johnathanbryce/Dice-Game'
          />
          <div className={styles.line_content_break_horizontal}> </div>
          <ProjectContainer
            flexDirection='normal'
            featuredType='Project'
            title='Portfolio - v1'
            link="https://johnbrycewebdevelopment-old.netlify.app/"
            description="My original web development portfolio site made in early 2022. Go easy on me, it was my first time!"
            languages="React, JavaScript, CSS, HTML "
            img={oldPortfolio}
            github='https://github.com/johnathanbryce/jbryce-portfolio'
          />
        </section> 
        </PagesContainer>
    </div>
  )
}

export default Projects;




/*      
<div className={styles.projects_intro_text_container}id="projects"> 
    <svg className={styles.intro_text}width="519" height="56" viewBox="0 0 519 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7603 43.54C11.1603 43.54 8.86031 43.08 6.86031 42.16C4.86031 41.2 3.30031 39.88 2.18031 38.2C1.06031 36.52 0.500313 34.62 0.500313 32.5V24.1C0.500313 21.82 1.06031 19.8 2.18031 18.04C3.30031 16.28 4.86031 14.92 6.86031 13.96C8.86031 12.96 11.1403 12.46 13.7003 12.46C16.1003 12.46 18.2203 12.8 20.0603 13.48C21.9403 14.16 23.4003 15.12 24.4403 16.36C25.4803 17.56 26.0003 18.96 26.0003 20.56C26.0003 21.8 25.5203 22.8 24.5603 23.56C23.6003 24.32 22.3403 24.7 20.7803 24.7C20.3403 24.7 20.0203 24.68 19.8203 24.64C19.8203 22.92 19.2603 21.54 18.1403 20.5C17.0603 19.46 15.6403 18.94 13.8803 18.94C12.1203 18.94 10.6803 19.44 9.56031 20.44C8.48031 21.44 7.94031 22.76 7.94031 24.4V31.96C7.94031 33.48 8.50031 34.72 9.62031 35.68C10.7403 36.6 12.1803 37.06 13.9403 37.06C15.7003 37.06 17.1403 36.54 18.2603 35.5C19.3803 34.42 19.9403 33.06 19.9403 31.42C20.1803 31.38 20.5203 31.36 20.9603 31.36C22.5203 31.36 23.7803 31.72 24.7403 32.44C25.7003 33.16 26.1803 34.14 26.1803 35.38C26.1803 36.98 25.6403 38.4 24.5603 39.64C23.5203 40.84 22.0603 41.8 20.1803 42.52C18.3003 43.2 16.1603 43.54 13.7603 43.54ZM31.915 6.22C31.915 4.38 32.555 2.96 33.835 1.96C35.115 0.959998 36.955 0.459997 39.355 0.459997V16.06C38.835 16.62 38.355 17.26 37.915 17.98L38.275 18.22C41.035 14.38 44.555 12.46 48.835 12.46C50.875 12.46 52.675 12.92 54.235 13.84C55.795 14.76 56.995 16.02 57.835 17.62C58.715 19.22 59.155 21.02 59.155 23.02V38.98C59.155 40.58 58.535 41.74 57.295 42.46C56.055 43.18 54.175 43.54 51.655 43.54V24.1C51.655 22.58 51.195 21.34 50.275 20.38C49.395 19.42 48.095 18.94 46.375 18.94C44.335 18.94 42.655 19.58 41.335 20.86C40.015 22.1 39.355 23.66 39.355 25.54V38.98C39.355 40.58 38.735 41.74 37.495 42.46C36.255 43.18 34.395 43.54 31.915 43.54V6.22ZM78.6864 43.54C76.2064 43.54 73.9464 43.06 71.9064 42.1C69.8664 41.1 68.2464 39.76 67.0464 38.08C65.8464 36.36 65.2464 34.44 65.2464 32.32V24.34C65.2464 22.1 65.8664 20.08 67.1064 18.28C68.3464 16.48 69.9864 15.06 72.0264 14.02C74.1064 12.98 76.3464 12.46 78.7464 12.46C81.1064 12.46 83.2664 12.96 85.2264 13.96C87.2264 14.92 88.8064 16.28 89.9664 18.04C91.1264 19.76 91.7064 21.74 91.7064 23.98V27.34C91.7064 28.22 91.3664 28.96 90.6864 29.56C90.0464 30.16 89.2264 30.46 88.2264 30.46H72.5064V31.78C72.5064 33.5 73.0264 34.9 74.0664 35.98C75.1064 37.06 76.6664 37.6 78.7464 37.6C80.7464 37.6 82.2264 37.16 83.1864 36.28C84.1864 35.4 84.6864 34.26 84.6864 32.86C85.4064 32.78 85.9064 32.74 86.1864 32.74C87.6664 32.74 88.8264 33.08 89.6664 33.76C90.5064 34.4 90.9264 35.32 90.9264 36.52C90.9264 37.68 90.3864 38.8 89.3064 39.88C88.2264 40.96 86.7464 41.84 84.8664 42.52C82.9864 43.2 80.9264 43.54 78.6864 43.54ZM84.9264 25.12V23.98C84.9264 22.3 84.3464 20.94 83.1864 19.9C82.0264 18.86 80.5264 18.34 78.6864 18.34C76.8464 18.34 75.3464 18.86 74.1864 19.9C73.0664 20.9 72.5064 22.26 72.5064 23.98V25.12H84.9264ZM110.381 43.54C107.781 43.54 105.481 43.08 103.481 42.16C101.481 41.2 99.9214 39.88 98.8014 38.2C97.6814 36.52 97.1214 34.62 97.1214 32.5V24.1C97.1214 21.82 97.6814 19.8 98.8014 18.04C99.9214 16.28 101.481 14.92 103.481 13.96C105.481 12.96 107.761 12.46 110.321 12.46C112.721 12.46 114.841 12.8 116.681 13.48C118.561 14.16 120.021 15.12 121.061 16.36C122.101 17.56 122.621 18.96 122.621 20.56C122.621 21.8 122.141 22.8 121.181 23.56C120.221 24.32 118.961 24.7 117.401 24.7C116.961 24.7 116.641 24.68 116.441 24.64C116.441 22.92 115.881 21.54 114.761 20.5C113.681 19.46 112.261 18.94 110.501 18.94C108.741 18.94 107.301 19.44 106.181 20.44C105.101 21.44 104.561 22.76 104.561 24.4V31.96C104.561 33.48 105.121 34.72 106.241 35.68C107.361 36.6 108.801 37.06 110.561 37.06C112.321 37.06 113.761 36.54 114.881 35.5C116.001 34.42 116.561 33.06 116.561 31.42C116.801 31.38 117.141 31.36 117.581 31.36C119.141 31.36 120.401 31.72 121.361 32.44C122.321 33.16 122.801 34.14 122.801 35.38C122.801 36.98 122.261 38.4 121.181 39.64C120.141 40.84 118.681 41.8 116.801 42.52C114.921 43.2 112.781 43.54 110.381 43.54ZM155.596 41.38C155.236 42.06 154.716 42.6 154.036 43C153.356 43.36 152.576 43.54 151.696 43.54C150.936 43.54 150.256 43.36 149.656 43C149.056 42.68 148.476 42.14 147.916 41.38L139.996 29.68L135.916 33.46V38.98C135.916 40.58 135.296 41.74 134.056 42.46C132.856 43.18 131.016 43.54 128.536 43.54V6.22C128.536 2.38 131.036 0.459997 136.036 0.459997V25.24L149.776 12.46C151.776 14.02 152.776 15.3 152.776 16.3C152.776 16.94 152.596 17.5 152.236 17.98C151.916 18.46 151.396 19.02 150.676 19.66L144.376 25.54L155.596 41.38ZM189.24 43.54C186.64 43.54 184.28 43.08 182.16 42.16C180.08 41.2 178.44 39.88 177.24 38.2C176.04 36.52 175.44 34.62 175.44 32.5V24.04C175.44 21.88 176.02 19.92 177.18 18.16C178.38 16.4 180.02 15.02 182.1 14.02C184.18 12.98 186.56 12.46 189.24 12.46C191.92 12.46 194.3 12.98 196.38 14.02C198.5 15.02 200.14 16.4 201.3 18.16C202.5 19.92 203.1 21.88 203.1 24.04V32.5C203.1 34.62 202.48 36.52 201.24 38.2C200.04 39.88 198.38 41.2 196.26 42.16C194.18 43.08 191.84 43.54 189.24 43.54ZM189.24 37.12C191.24 37.12 192.8 36.66 193.92 35.74C195.08 34.82 195.66 33.58 195.66 32.02V24.4C195.66 22.76 195.08 21.44 193.92 20.44C192.8 19.4 191.24 18.88 189.24 18.88C187.28 18.88 185.72 19.4 184.56 20.44C183.4 21.44 182.82 22.76 182.82 24.4V32.02C182.82 33.58 183.4 34.82 184.56 35.74C185.72 36.66 187.28 37.12 189.24 37.12ZM234.1 37.72C234.1 39.6 233.5 41.04 232.3 42.04C231.14 43.04 229.36 43.54 226.96 43.54V39.94C227.48 39.34 227.96 38.68 228.4 37.96L228.04 37.72C225.48 41.6 222.04 43.54 217.72 43.54C215.68 43.54 213.84 43.08 212.2 42.16C210.6 41.2 209.32 39.88 208.36 38.2C207.44 36.52 206.98 34.62 206.98 32.5V17.02C206.98 15.38 207.58 14.22 208.78 13.54C210.02 12.82 211.9 12.46 214.42 12.46V31.96C214.42 33.52 214.9 34.76 215.86 35.68C216.82 36.6 218.2 37.06 220 37.06C222 37.06 223.6 36.44 224.8 35.2C226.04 33.92 226.66 32.34 226.66 30.46V17.02C226.66 15.38 227.26 14.22 228.46 13.54C229.66 12.82 231.54 12.46 234.1 12.46V37.72ZM254.32 43.54C251.08 43.54 248.68 42.6 247.12 40.72C245.56 38.84 244.78 36.42 244.78 33.46V18.58H238.6C238.6 16.7 238.96 15.3 239.68 14.38C240.4 13.46 241.36 13 242.56 13H244.9V8.02C244.9 6.38 245.5 5.22 246.7 4.54C247.9 3.82 249.72 3.46 252.16 3.46V13H260.14C260.14 15 259.76 16.44 259 17.32C258.24 18.16 257.02 18.58 255.34 18.58H252.28V33.16C252.28 34.56 252.54 35.56 253.06 36.16C253.62 36.76 254.56 37.06 255.88 37.06C257.28 37.06 258.68 36.68 260.08 35.92C260.48 36.28 260.8 36.74 261.04 37.3C261.28 37.82 261.4 38.36 261.4 38.92C261.4 40.12 260.78 41.2 259.54 42.16C258.3 43.08 256.56 43.54 254.32 43.54ZM282.52 18.22C282.52 16.38 283.1 14.96 284.26 13.96C285.42 12.96 287.18 12.46 289.54 12.46V16.06C288.82 16.94 288.34 17.58 288.1 17.98L288.52 18.22C289.76 16.34 291.08 14.92 292.48 13.96C293.88 12.96 295.54 12.46 297.46 12.46C300.94 12.46 303.34 14.16 304.66 17.56C305.66 15.96 306.94 14.72 308.5 13.84C310.06 12.92 311.82 12.46 313.78 12.46C316.5 12.46 318.66 13.46 320.26 15.46C321.9 17.42 322.72 19.94 322.72 23.02V38.98C322.72 40.58 322.1 41.74 320.86 42.46C319.66 43.18 317.82 43.54 315.34 43.54V23.62C315.34 22.14 315 20.96 314.32 20.08C313.68 19.2 312.68 18.76 311.32 18.76C309.88 18.76 308.66 19.26 307.66 20.26C306.7 21.22 306.22 22.74 306.22 24.82V38.98C306.22 40.58 305.62 41.74 304.42 42.46C303.26 43.18 301.44 43.54 298.96 43.54V23.62C298.96 22.1 298.64 20.92 298 20.08C297.36 19.2 296.36 18.76 295 18.76C293.32 18.76 292.04 19.34 291.16 20.5C290.32 21.62 289.9 23.16 289.9 25.12V38.98C289.9 40.58 289.28 41.74 288.04 42.46C286.84 43.18 285 43.54 282.52 43.54V18.22ZM332.086 55.54C330.526 55.54 329.286 55 328.366 53.92C327.486 52.84 327.046 51.28 327.046 49.24C328.246 49.44 329.246 49.54 330.046 49.54C331.566 49.54 332.766 49.14 333.646 48.34C334.566 47.54 335.566 45.94 336.646 43.54L337.606 41.32L326.026 13.06C326.306 12.9 326.786 12.76 327.466 12.64C328.186 12.52 328.766 12.46 329.206 12.46C330.366 12.46 331.426 12.72 332.386 13.24C333.346 13.72 334.006 14.4 334.366 15.28L340.786 32.14L339.766 34.96L340.306 35.14L348.046 15.28C348.406 14.36 349.046 13.66 349.966 13.18C350.926 12.7 351.986 12.46 353.146 12.46C353.586 12.46 354.146 12.52 354.826 12.64C355.546 12.76 356.066 12.9 356.386 13.06L342.946 45.7C341.546 49.06 340.006 51.54 338.326 53.14C336.686 54.74 334.606 55.54 332.086 55.54ZM390.338 43.54C388.498 43.54 386.958 43.18 385.718 42.46C384.478 41.7 383.658 40.62 383.258 39.22L376.358 13.12C376.678 12.92 377.158 12.76 377.798 12.64C378.438 12.52 379.058 12.46 379.658 12.46C380.858 12.46 381.858 12.74 382.658 13.3C383.498 13.82 384.018 14.52 384.218 15.4L387.758 31.54L386.978 34.84L387.338 34.96L392.738 14.92C392.978 14.2 393.398 13.62 393.998 13.18C394.598 12.7 395.378 12.46 396.338 12.46C397.338 12.46 398.158 12.7 398.798 13.18C399.438 13.62 399.858 14.2 400.058 14.92L404.378 31.96L403.478 35.44L403.838 35.56L408.458 15.4C408.658 14.52 409.178 13.82 410.018 13.3C410.858 12.74 411.878 12.46 413.078 12.46C413.718 12.46 414.338 12.52 414.938 12.64C415.578 12.76 416.058 12.92 416.378 13.12L409.478 39.22C409.118 40.58 408.238 41.64 406.838 42.4C405.438 43.16 403.798 43.54 401.918 43.54L395.798 19.42L395.498 19.54L396.158 22.12L390.338 43.54ZM431.994 43.54C429.394 43.54 427.034 43.08 424.914 42.16C422.834 41.2 421.194 39.88 419.994 38.2C418.794 36.52 418.194 34.62 418.194 32.5V24.04C418.194 21.88 418.774 19.92 419.934 18.16C421.134 16.4 422.774 15.02 424.854 14.02C426.934 12.98 429.314 12.46 431.994 12.46C434.674 12.46 437.054 12.98 439.134 14.02C441.254 15.02 442.894 16.4 444.054 18.16C445.254 19.92 445.854 21.88 445.854 24.04V32.5C445.854 34.62 445.234 36.52 443.994 38.2C442.794 39.88 441.134 41.2 439.014 42.16C436.934 43.08 434.594 43.54 431.994 43.54ZM431.994 37.12C433.994 37.12 435.554 36.66 436.674 35.74C437.834 34.82 438.414 33.58 438.414 32.02V24.4C438.414 22.76 437.834 21.44 436.674 20.44C435.554 19.4 433.994 18.88 431.994 18.88C430.034 18.88 428.474 19.4 427.314 20.44C426.154 21.44 425.574 22.76 425.574 24.4V32.02C425.574 33.58 426.154 34.82 427.314 35.74C428.474 36.66 430.034 37.12 431.994 37.12ZM467.101 18.94C464.741 18.94 462.821 19.58 461.341 20.86C459.861 22.1 459.121 23.66 459.121 25.54V38.98C459.121 40.58 458.521 41.74 457.321 42.46C456.121 43.18 454.241 43.54 451.681 43.54V18.22C451.681 16.38 452.261 14.96 453.421 13.96C454.621 12.96 456.421 12.46 458.821 12.46V16C458.221 16.68 457.741 17.34 457.381 17.98L457.741 18.22C460.261 14.38 463.421 12.46 467.221 12.46C468.941 12.46 470.241 12.92 471.121 13.84C472.001 14.72 472.441 15.84 472.441 17.2C472.441 18.24 472.161 19.12 471.601 19.84C470.521 19.24 469.021 18.94 467.101 18.94ZM504.639 41.38C504.279 42.06 503.759 42.6 503.079 43C502.399 43.36 501.619 43.54 500.739 43.54C499.979 43.54 499.299 43.36 498.699 43C498.099 42.68 497.519 42.14 496.959 41.38L489.039 29.68L484.959 33.46V38.98C484.959 40.58 484.339 41.74 483.099 42.46C481.899 43.18 480.059 43.54 477.579 43.54V6.22C477.579 2.38 480.079 0.459997 485.079 0.459997V25.24L498.819 12.46C500.819 14.02 501.819 15.3 501.819 16.3C501.819 16.94 501.639 17.5 501.279 17.98C500.959 18.46 500.439 19.02 499.719 19.66L493.419 25.54L504.639 41.38ZM513.694 43.54C512.374 43.54 511.254 43.12 510.334 42.28C509.454 41.4 509.014 40.3 509.014 38.98C509.014 37.66 509.454 36.56 510.334 35.68C511.254 34.76 512.374 34.3 513.694 34.3C514.974 34.3 516.074 34.76 516.994 35.68C517.954 36.56 518.434 37.66 518.434 38.98C518.434 40.26 517.954 41.34 516.994 42.22C516.074 43.1 514.974 43.54 513.694 43.54Z" fill="white"/>
      </svg>
      </div> 
*/
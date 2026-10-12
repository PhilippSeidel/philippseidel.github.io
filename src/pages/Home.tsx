import React from 'react';

const Home: React.FC = () => {
  return (
    <section>
      <h1 title="general kenobi"><i className="bi bi-cup-hot-fill"></i> Hello There!</h1>
      <br></br>
      <div className="col text-center">
            <div
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                height: "100%",
                width: "100%",
                overflow: 'hidden',
              }}
            >
            <div className='d-none d-lg-block'>
              <img
                src={'/home/me.png'}
                alt={'Philipp Seidel headshot'}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: '30%',
                  width: '30%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='d-lg-none'>
              <img
                src={'/home/me.png'}
                alt={'Philipp Seidel headshot'}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: '60%',
                  width: '60%',
                  objectFit: 'cover',
                }}
              />
            </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      <p className="lead">
        I'm Philipp Seidel, robotics and computer science enthusiast and master student at KTH. I'm currently enrolled in the 'Systems, Control and Robotics' Master programme a KTH, where I also work as a research assistant at the Robots, Perception and Learning (RPL) group, doing research on robot learning with humanoid robots. Previously I worked as a research assistant at the High-Performance Humanoid Technologies (H²T) group at KIT in Germany. I have a passion for robotics and am deeply fascinated by the field of embodied AI and the use cases for robotics in medicine. If you want to have a look at some of my past projects you came to the right place.
        <br></br>My hobbies include programming, reading, skiing, traveling and camping, visiting the local sauna as well as politics and history.
        <br/><br/>I'm excited to meet new people and ideas. If you are a nice person and would like to contact me, feel free to do so!
        <br/>Otherwise don't. :) 
      </p>
    </section>
  );
};

export default Home;

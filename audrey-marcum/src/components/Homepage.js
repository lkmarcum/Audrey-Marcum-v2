import React from 'react';
import '../styles/homepage.scss';
import book from '../journey_with_bipolar.pdf';
import logo from '../logo2.svg';
import linkedin from '../linkedin.svg';

const Homepage = (props) => {
  function openLinkedIn() {
    window.open('https://www.linkedin.com/in/audrey-marcum/');
  }
  return (
    <div className='homepage'>
      <img src={logo} />
      <div className='dash' />
      <h1>Hi, my name is Audrey and I have Bipolar Disorder.</h1>
      <p>
        My first manic episode led to a medical withdrawal after my first day of
        college classes. The last of my 6 hospitalizations was in 2009. Since
        then I graduated law school, made friends, passed the bar, got married,
        and am now in a fulfilling banking career. Living with bipolar disorder
        can be done. Thriving in spite of bipolar disorder can be done.{' '}
      </p>
      <p>
        We’ve all been fighting our own forest fires on our islands not knowing
        if there are any other islands doing well. This poorly edited story is
        for anyone who could use a success story and a roadmap forward for
        themselves or for a loved one.{' '}
      </p>
      <p>
        Feel free to download and share with anyone who you think may be able to
        benefit. 18-year-old me would have loved to hear a success story.
      </p>
      <p className='signoff'>Best wishes,</p>
      <div className='sign-off'>
        <div className='sign-off-text'>
          <p>Audrey Marcum</p>
          <p>December 24, 2019</p>
        </div>
        <a
          href='https://www.linkedin.com/in/audrey-marcum/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img className='linkedin' src={linkedin} />
        </a>
      </div>
      <div className='button-container'>
        <a href={book} target='_blank' className='browser'>
          Read in browser
        </a>
        <a href={book} download>
          Download
        </a>
      </div>
    </div>
  );
};

export default Homepage;

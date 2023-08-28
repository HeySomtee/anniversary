import React, { Component } from 'react'
import Gallery from './Gallery';
import heroImg from './image-assets/41e74b0f91b7cb7df6b73e34ae8528a4.gif'
// import flowers from './image-assets/memories1 (1).mp4'

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: true,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,

    };
  }

  toggleState = (propertyName) => {
    this.setState((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, key === propertyName])
      ),
    }));
  };

  makeNextActive = () => {
    const { active1, active2, active3, active4, active5, active6 } = this.state;
    const activeProperties = [active1, active2, active3, active4, active5, active6];

    const currentIndex = activeProperties.findIndex(property => property);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % activeProperties.length;
      const nextProperty = `active${nextIndex + 1}`;
      this.toggleState(nextProperty);
    }
  };

  makeNextActive2 = () => {
    const { active1, active2, active3, active4, active5, active6 } = this.state;
    const activeProperties = [active1, active2, active3, active4, active5, active6];

    const currentIndex = activeProperties.findIndex(property => property);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % activeProperties.length;
      const nextProperty = `active${nextIndex - 1}`;
      this.toggleState(nextProperty);
    }
  };
  
  render() {
    return ( 
      <div>
        <div className='container'>
          <div className="page one">
            <div className='grid'>
             <div className='top-nav'>
              <span><b>LOVE</b> <br /> ANNIVERSARY</span>
              <span className='span'>
                <a href="#story">Our story</a>
                <a href="#memories">Memories</a>
              </span>
             </div>

              <div className='grid2'>
                <div className="scroll-container">
                  <img className='flowers' src={heroImg} alt="" />
                  <h1 className="scrolling-text">N e s s a ~ & ~ N k e m </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="page two">

            <div className='main'>
              <div className="inner-main first">
                <p>"365 days, 525,600 minutes, 31,536,000 seconds of occupying my mind, thoughts, space and life 🥺 The best decision I’ve made was to let you into my life and heart ♥️". <br /> -Nessa</p>
              </div>
              <div className="inner-main second">
                <p>
                  "Happy Anniversary babe 💕💕🥰 Thank you for one year of love and drama 💝 you're the very best and I'm still thankful for the day I met you" <br />. - Nkem
                </p>
              </div>
            </div>
            
          </div>

          <div className="page three">

            <div className='chapter-display'>
              <span id='story'
              style={{
                display: this.state.active1 ? 'block' : 'none'
              }}
              >
                I met her on a discord server and we started talking, I talked to her first. We got off on the wrong foot 😂. She bragged about how he had a Whitelist I really wanted and how she was gonna get a second. I was super pissed and jealous. Then again somehow I saw her in my own server! Apparently one of my friends had invited her. At first I ignored her, then I tried gaining her attention indirectly but it didn't work. So... I replied a message of hers and we started talking. We moved to another chat, BXH where I reminded her that her so called "lambo" was underwater 😂 and kept teasing her. Soon enough we became enemies, ehh more like frenemies. I like to tell her I played the "enemy card" on her though.
              </span>
              <span 
              style={{
                display: this.state.active2 ? 'block' : 'none'
              }}
              >
                ...Later that night, I saw she needed help with invites for something so I slid into her DMs, thank God it was open. And from there it kinda went smoothly, she was cute with her replies and I knew I liked her almost immediately. We chatted till 4am, I was asking her for something 😂 the werey didn't later agree after stressing me 😫🙄 but I enjoyed every moment of chatting with her
              </span>
              <span 
              style={{
                display: this.state.active3 ? 'block' : 'none'
              }}
              >
                Over the next few weeks we shared everything with each other. We talked about everything and anything we could think of. And shared pictures, I was always shy about taking pictures but she soon convinced me. We also spoke over calls for hours everyday, that was one of the best few weeks of my life. And oh! I learnt her name was actually not Vanessa but Oluchi Goodluck Igboanugo. I'd get jelly whenever people on discord or twitter tried to woo her, but I never told her.

              </span>
              <span 
              style={{
                display: this.state.active4 ? 'block' : 'none'
              }}
              >
                What I failed to mention is that, I told her I was in 200 level while I was in my 100 level, I was scared she'd not be interested in me if I told her the truth, so... On a certain night after a series of cannon events I opened up and told her the truth and she wasn't all that mad, phewww. I was so glad I got that of my chest. We've gone on to have soooo many fights over the course of the year, but we alway bounced back 💝. I love my Nessa

              </span>
              <span 
              style={{
                display: this.state.active5 ? 'block' : 'none'
              }}
              >
                This is a song I'd like to share with you my Queen 
                <br /> <br />
                <audio controls src=""></audio>

              </span>

              <span 
              style={{
                display: this.state.active6 ? 'block' : 'none'
              }}
              >Chapter 6</span>

              <div className='chapter-toggle'>
                <div>
                  <span onClick={this.makeNextActive2}>Previous Chapter</span>
                  <span onClick={this.makeNextActive}>Next Chapter</span>
                </div>
              </div>
            </div>

            <div className='chapter-nav'>
              <h2>Chapters</h2>
              <div className='row'>
                <div onClick={() => this.toggleState('active1')}>1</div>
                <div onClick={() => this.toggleState('active2')}>2</div>
              </div>
              <div className='row'>
                <div onClick={() => this.toggleState('active3')}>3</div>
                <div onClick={() => this.toggleState('active4')}>4</div>
              </div>
              <div className='row'>
                <div onClick={() => this.toggleState('active5')}>5</div>
                <div onClick={() => this.toggleState('active6')}>6</div>
              </div>
            </div>
            
          </div>
          <h1 className='h1'>MEMORIES</h1>
          <div className='page-f'>
            <Gallery />
          </div>  
        </div>
      </div>
      
    )
  }
}

export default Hero
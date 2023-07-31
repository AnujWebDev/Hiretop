import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoFacebookCircle} from "react-icons/bi"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="cont" className='d-flex flex-column align-items-center m-5'>
          <h1>Find your next top tech job in 1 week.</h1>
          <p style={{fontWeight:600,lineHeight:1.35,wordSpacing:"5px"}} className=' text-center m-5'><span className='itext'>Are you a top 2%</span>Software Engineer, Product Manager or Data Scientist?<br/>
          Let leading Indian technology <span className='itext'>companies compete to hire you.</span></p>
          <Link to='/signUp'><Button id='btn'>APPLY TO JOIN</Button>{''}</Link>
          <p id="p1">100% free. It takes only 5 minutes</p>
          <div className='container m-5'>
              <div className='row'>
                  <div className='col-md-4 d-flex flex-column align-items-center' >
                      <div id="bx1" className='m-3'>
                        <img src='images/icon1.png' alt="this is an icon" height={'60px'} width={'60px'}></img>
                      </div>
                      <h3 id="he1" className='text-center'>STEP 1: COMPLETE PROFILE</h3>
                      <p id="pe1" className='text-center m-3'>Once you are approved, we showcase you to leading Indian technology startups</p>
                  </div>
                  <div className='col-md-4 d-flex flex-column align-items-center' >
                      <div id="bx1" className='m-3'>
                        <img src='images/icon1.png' alt="this is an icon" height={'60px'} width={'60px'}></img>
                      </div>
                      <h3 id="he1"  className='text-center'>STEP 2: RECEIVE JOB OFFERS</h3>
                      <p id="pe1" className='text-center m-3'>Companies start sending interview requests. Talk to only the ones you like.</p>
                  </div>
                  <div className='col-md-4 d-flex flex-column align-items-center' >
                      <div id="bx1" className='m-3'>
                        <img src='images/icon1.png' alt="this is an icon" height={'60px'} width={'60px'}></img>
                      </div>
                      <h3 id="he1"  className='text-center'>STEP 3: ACCEPT DREAM JOB</h3>
                      <p id="pe1" className='text-center m-3'>Compare your offers and accept the best one. Hired!</p>
                  </div>
              </div>
          </div>
      </div>
      <div className='container  d-flex flex-column align-items-center'>
            <h1 id="he2" className='text-center m-5'>LEADING COMPANIES BUILD TEAMS ON TOPHIRE</h1>
            <img id="img1" alt="this is company logos" src='images/company.png' className='mx-auto' height={'350px'}></img>
      </div>
      <div className='container'>
          <div className='row'>
              <h1 className='text-center'>How it works</h1>
              <div className='col-md-6'>
                  <h1 className="he3 mx-5" ><span style={{borderTop:"6px solid #39a7f4"}}>Create</span> your free candidate<br/>profile</h1>
                  <p className="pe3 mx-5">Answer a few questions about yourself - it takes<br/>less than 5 minutes.</p>
                  <p className='pe mx-5'>🏅 What is your biggest achievement?</p>
                  <p className='pe mx-5'>‍👑️ What does your ideal opportunity look like?</p>
              </div>
              <div className='col-md-6'>
                <img id="img5" alt="this is an form" src='images/p1.png' width={'427px'} height={'595px'}></img>
              </div>
          </div>
      </div>
      <div className='container mt-5'>
          <div className='row'>
              <div className='col-md-6 text-end'>
              <img id="img2" alt="offers" src='images/p2.png' width={'500px'} height={'340px'}></img>
              </div>
              <div className='col-md-6'>   
                <h1 className="he3 m-3" ><span style={{borderTop:"6px solid #39a7f4"}}>Sit back</span> while companies<br/>compete to hire you</h1>
                  <p className="pe3 m-3" >Don’t waste your time reaching out to companies<br/>or dealing with recruiters</p>
                  <p className='pe m-3'>‍💨 We fast-track your profile to hiring managers.</p>
                  <p className='pe m-3'>‍🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</p>
              </div>
          </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <h1 className="he3 mx-5 m-5" ><span style={{borderTop:"6px solid #39a7f4"}} >Salary</span> & Role transparency</h1>
                  <p className="pe3 mx-5">Interview requests from companies mention salary and<br/> role details upfront - before you decide to accept or<br/> decline them.</p>
              </div>
              <div className='col-md-6'>
                <img id="img3" alt="salary" src='images/p3.png' width={'530px'} height={'261px'}></img>
              </div>
          </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6 mt-5'>
              <img src='images/p4.png' alt="chat" width={'380px'} height={'354px'}></img>
              </div>
              <div className='col-md-6'>
                <h1 className="he3 mx-5 m-5" ><span style={{borderTop:"6px solid #39a7f4"}}>A dedi</span>cated talent advocates</h1>
                  <p className="pe3 mx-5">Your Talent Advocate will guide you through the entire<br/>process. From polishing your profile, providing interview<br/>tips to helping negotiate offers!</p>
              </div>
          </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <h1 className="he3 mx-5 m-5" ><span style={{borderTop:"6px solid #39a7f4"}}>Cur</span>rent and past employers<br/>can’t see your profile</h1>
                  <p className="pe3 mx-5">By default, we hide your profile from any employers that<br/>you list as your current and past employer.</p>
                  <p className='pe mx-5'>‍🕵 Privacy Assured</p>
              </div>
              <div className='col-md-6'>
                <img id="img4" alt="hidden pictures" src='images/p5.png' width={'530px'} height={'175px'}></img>
              </div>
          </div>
      </div>
      <div className='container-fluid' id='cont1'>
          <div className='container d-flex flex-column align-items-center'>
            <h1 className='text-center m-5'>Techies 💘 TopHire</h1>
            <p id="ps1" className='text-center'>A better love story than twilight. Check the video below to find out why.</p>
            <iframe className='m-5' id="vdo" width="560" height="315" src="https://www.youtube.com/embed/rO26Bl439fE?start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src='./images/cred.png' alt="cred logo" width={'100px'} height={'40px'}></img><br/>
                  <img src='./images/a1.jpg'alt="avatar" width={'50px'} height={'50px'} style={{borderRadius:'50px'}} 
                  ></img>
                  <span style={{fontWeight:'bold'}}>Yadhu Manoharan </span>
                  <p className='s1'>Sr. iOS Engineer</p>
                  <p className='pg1'>TopHire was able to make the process<br/> really easy. They were able to schedule<br/> interviews with the<br/> best companies in the industry and drove the entire process<br/> smoothly.</p>
                </div>
                <div className='col-md-4'>
                <img src='./images/dream11.png' alt="dream11 logo" width={'100px'} height={'40px'}></img><br/>
                  <img src='./images/a2.jpeg' alt="avatar" width={'50px'} height={'50px'} style={{borderRadius:'50px'}} 
                  ></img>
                  <span style={{fontWeight:'bold'}}>Santosh Nain </span>
                  <p className='s1'>SDE-2</p>
                  <p className='pg1'>A friend of mine told me about TopHire<br/> when I started looking for new <br/>opportunities. The TopHire team was<br/> extremely helpful, professional and quick<br/> with everything.</p>
                </div>
                <div className='col-md-4'>
                <img src='./images/curefit.png' alt="curefit logo" width={'100px'} height={'40px'}></img><br/>
                  <img src='./images/a3.jpeg' alt="avatar" width={'50px'} height={'50px'} style={{borderRadius:'50px'}} 
                  ></img>
                  <span style={{fontWeight:'bold'}}>Tarun Dugar</span>
                  <p className='s1'>Sr. Software Engineer</p>
                  <p className='pg1'>Compared to other job portals, what<br/> stood out for me was that TopHire, on<br/> top of providing really good<br/> opportunities, helped me in negotiations <br/>with the companies too.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container container d-flex flex-column align-items-center'>
            <h1 id="hs1" className='text-center'>Built by techies, for techies 👩‍💻👨‍💻</h1>
            <p id="ps2">It takes less than 5 minutes to sign up.</p>
            <Link to='/signUp' ><Button id='btn'>APPLY TO JOIN</Button>{' '}</Link>
          </div>
      </div>
      <footer className='container-fluid'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-4'>
                <img src='./images/logo2.png' alt='logo' height={'30px'} width={'100px'}></img>
                <p>TopHire is on a mission to make it dead<br/>simple for leading Indian startups to hire the<br/>top 2% of tech talent.</p>
                <span className='icons'><AiOutlineTwitter/></span>
                <span className='icons'><BiLogoFacebookCircle/></span>
                <span className='icons'><AiOutlineLinkedin/></span>
                <span className='icons'><AiOutlineInstagram/></span>
              </div>
              <div className='col-md-2'>
                <h4 className='sh' >CANDIDATES</h4>
                <p className='sp'>For Candidates</p>
                <p className='sp'>Candidate Sign Up</p>
                <p className='sp'>Invite & Earn ₹15k</p>
                <p className='sp'>Candidate FAQ</p>
              </div>
              <div className='col-md-2'>
              <h4 className='sh' >EMPLOYERS</h4>
                <p className='sp'>For Employers</p>
                <p className='sp'>Employer Sign Up</p>
                <p className='sp'>Employer FAQ</p>
              </div>
              <div className='col-md-2'>
                <h4 className='sh' >COMPANY</h4>
                <p className='sp'>Careers</p>
                <p className='sp'>Privacy Policy</p>
              </div>
              <div className='col-md-2'>
              <h4 className='sh' >PARTNERS</h4>
              <img src='./images/logo3.png' alt='logo' height={'45px'} width={'116px'}></img>
              </div>
          </div>
        </div>
        <h4 className='sh text-center' >© 2023 SPSG TopHire. All Rights Reserved</h4>
      </footer>
    </>
  )
}

export default Home;

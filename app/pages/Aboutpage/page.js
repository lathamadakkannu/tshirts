import Footer from '@/app/component/Footer/page';
import Navbar from '@/app/component/Navbar/page';

import React from 'react';
import Image from "next/image";

//import { AiFillStar } from "react-icons/ai";
import { WiDirectionRight } from "react-icons/wi";
import { SiTicktick } from "react-icons/si";

const Aboutpage = () => {
  return (
    <div className="aboutPage">
      <div className="aboutContainer">
        <div className="about-section">
        <Navbar />
 
       {/*Image Collage */}
        <div className="imgCollageContainer">
          <div className="collage-row">
            <div className="collage-cols">
              <Image src="/image/collage1.png" alt="fit" width={500} height={500} />
            </div>

            <div className="collage-cols">
              <div className="collage-card">
                <Image src="/image/collage2.png" alt="fit" width={500} height={500} />
              </div>
              <div className="collage-card">
                <Image src="/image/collage3.png" alt="fit" width={500} height={500} />
              </div>
            </div>

            <div className="collage-cols">
              <Image src="/image/collage4.png" alt="fit" width={500} height={500} />
            </div>

            <div className="collage-cols">
              <div className="collage-card">
                <Image src="/image/collage5.png" alt="fit" width={500} height={500} />
              </div>
              <div className="collage-card">
                <Image src="/image/collage6.png" alt="fit" width={500} height={500} />
              </div>
            </div>
 
            <div className="collage-cols">
              <Image src="/image/collage7.png" alt="fit" width={500} height={500} />
            </div>

          </div>
          <div className="collage-details">
            <h3>Stand out from the crowd with custom <br/>
            T-shirts in a range of designs, colors and styles.</h3>
          </div>
        </div>
        </div>


        {/*Shopping */}
 
         <div className="shopping-container">
          <div className="shopping-row">

            <div className="shopping-col">
              <div className="shopping-details">
                <div className="shopping-img">
                <Image src="/image/shopping1.png" alt="fit" width={100} height={100} />
                </div>
                <div className="shopping-info">
                  <h4>Top Quality</h4>
                  <p>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
                </div>
              </div>
            </div>

            <div className="shopping-col">
              <div className="shopping-details">
                <div className="shopping-img">
                <Image src="/image/shopping2.png" alt="fit" width={100} height={100} />
                </div>
                <div className="shopping-info">
                  <h4>Mix and Match</h4>
                  <p>Make stunning designs with beginner-friendly design tools and assets</p>
                </div>
              </div>
            </div>

            <div className="shopping-col">
              <div className="shopping-details">
                <div className="shopping-img">
                <Image src="/image/shopping3.png" alt="fit" width={100} height={100} />
                </div>
                <div className="shopping-info">
                  <h4>Shopping Worldwide</h4>
                  <p>Order prints and get them delivered fast, free, and in recycled packaging.</p>
                </div>
              </div>
            </div>


          </div>
         </div>


        {/*Ideas and Tools */}

        <div className="tools-container">
          <div className="tools-row">
            <div className="tools-col">
              <div className="tools-img">
                <Image src="/image/banner-11.png" alt="fit" width={600} height={450} />
              </div>
            </div>
            <div className="tools-col">
              <div className="tools-details">
                <h4>
                  You’ve got the ideas,
                  <br />
                  we’ve got the tools
                </h4>
                <ul>
                  T-shirt Printing for Everyone. Get a headstart with free design
                  templates you can customize in a few clicks.
                  <li>
                  <SiTicktick />Top quality prints using the latest technology
                  </li>
                  <li>
                  <SiTicktick /> Mix and match colors, sizes, and designs
                  </li>
                  <li>
                  <SiTicktick />Fast and free standard shipping
                  </li>
                  <li>
                  <SiTicktick /> Customer happiness guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*Design Fit */}
        <div className="fit-container">
          <div className="fit-row">
            <div className="fit-col">
              <div className="fit-content">
                <h4>Find a fit for everyone</h4>
                <button>Get Started</button>
              </div>
            </div>

            <div className="fit-col">
              <div className="fit-card">
                <div className="fit-Img">
                  <Image src="/image/fit1.png" alt="fit" width={500} height={500} />
                </div>
                <div className="fit-info">
                  <p>Men's Collection <WiDirectionRight /></p>
                </div>
              </div>
            </div>

            <div className="fit-col">
              <div className="fit-card">
                <div className="fit-Img">
                  <Image src="/image/fit2.png" alt="fit" width={500} height={600} />
                </div>
                <div className="fit-info">
                  <p>Women's Collection <WiDirectionRight /></p>
                </div>
              </div>
            </div>

            <div className="fit-col">
              <div className="fit-card">
                <div className="fit-Img">
                  <Image src="/image/fit3.png" alt="fit" width={500} height={500} />
                </div>
                <div className="fit-info">
                  <p>Kid's Collection <WiDirectionRight /></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Team */}

        <div className="team-container">
          <h2>Customize T-Shirts - Hoodies and <br/>
          More for Your Team!</h2>
          <div className="team-row">

            <div className="team-col">
              <div className="team-card">
                <div className="team-img">
                <Image src="/image/team1.png" alt="fit" width={250} height={350} />
                </div>
                <div className="team-info">
                  <h4>Couple</h4>
                  <p>You’ve got the ideas, we’ve got the tools</p>
                </div>
              </div>
            </div>

            <div className="team-col">
              <div className="team-card">
                <div className="team-img">
                <Image src="/image/team2.png" alt="fit" width={250} height={270} />
                </div>
                <div className="team-info">
                <h4>Business</h4>
                <p>You’ve got the ideas, we’ve got the tools</p>
                </div>
              </div>
            </div>

            <div className="team-col">
              <div className="team-card">
                <div className="team-img">
                <Image src="/image/team3.png" alt="fit" width={250} height={350} />
                </div>
                <div className="team-info">
                <h4>Family</h4>
                <p>You’ve got the ideas, we’ve got the tools</p>
                </div>
              </div>
            </div>

            <div className="team-col">
              <div className="team-card">
                <div className="team-img">
                <Image src="/image/team4.png" alt="fit" width={250} height={270} />
                </div>
                <div className="team-info">
                <h4>Event</h4>
                <p>You’ve got the ideas, we’ve got the tools</p>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default Aboutpage;

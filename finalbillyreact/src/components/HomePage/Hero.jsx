import React from "react";

const Hero = () => {
  return (
    <section className="heroSection  pb_50 pt_50">
      <div className="container">
        <div className="row reverse">
          <div className="col-12 col-md-6 colAlignCenter" data-aos="fade-up">
            <div className="heroText">
              <h1>
                Billy
                <br />
                Herrington
                <br />
                meme
              </h1>
              <p>
                Greetings, fellow meme enthusiasts and crypto enthusiasts alike!
                We are thrilled to have you join the epic journey of Billy
                Herrington Coin, the crypto sensation inspired by the legendary
                meme figure himself, Billy Herrington. Prepare yourself for an
                exciting adventure filled with laughter, community spirit, and
                potential moonshots!
              </p>

              <a href="" className="btn mr-3 buyIc">
                Buy Herrington
              </a>
              {/* <a href="" class="btn mr-3 buyIc">Whitepaper</a> */}
            </div>
          </div>
          <div
            className="col-12 col-md-6 colAlignCenter rtImg"
            data-aos="fade-up"
          >
            <img
              src={require("../../assets/images/rightSideImg.png")}
              alt="rightSideImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

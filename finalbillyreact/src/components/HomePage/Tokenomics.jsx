import React from "react";

const Tokenomics = () => {
  return (
    <section className="about pb_50 pt_50 ">
      <div className="container pb_100    pt_50">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-lg-6  aos-init" data-aos="fade-up">
            <h2>Tokenomics (TAX - 0%)</h2>
            <p>
              Billy Herringtoncoin is a cryptocurrency token named after the
              late adult film actor Billy Herrington. The token operates on a
              blockchain network, providing secure and transparent transactions.
              The total supply of Billy Herringtoncoin is fixed, meaning there
              is a limited number of tokens that will ever exist. Holders of
              Billy Herringtoncoin can participate in various activities and
              events related to the token. The token has its own decentralized
              exchange where users can trade Billy Herringtoncoin for other
              cryptocurrencies or tokens. Billy Herringtoncoin has a
              deflationary mechanism built-in, which means that tokens are
              burned over time, reducing the total supply. Holders of Billy
              Herringtoncoin may receive rewards through staking or
              participating in the token's ecosystem. The tokenomics of Billy
              Herringtoncoin aim to create scarcity, value appreciation, and
              provide incentives for community engagement.
            </p>
          </div>
          <div className="col-lg-6 text-center  aos-init" data-aos="fade-up">
            <iframe
              src="https://app.uniswap.org/#/swap?inputCurrency=ETH&amp;outputCurrency=0x15a3081B541e8daD25C4A5E0C4C4B4E8d105b2E8&amp;lng=en-US"
              height="600px"
              width="100%"
              style={{ border: "none" }}
            ></iframe>
          </div>
          <div className="col-12 text-center  aos-init" data-aos="fade-up">
            <div className="card">
              <h3>Token Allocation </h3>
              <ul className="tokenAlocation">
                <li>LP 80%</li>
                <li>Marketing 4%</li>
                <li>Development 4%</li>
                <li></li>
                <li>CEX 12%</li>
                <li></li>
              </ul>
            </div>
            <div className="">
              <a href="#" className="btn">
                {" "}
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt_50 ">
        <div className="row">
          <div className="col-12 text-center  aos-init" data-aos="fade-up">
            <div className="card red">
              <h2>What is Billy Herrington Coin?</h2>
              <p>
                Billy Herrington Coin is not just your average meme coin; it
                embodies the spirit of joy, humor, and camaraderie. Our mission
                is to create a community that celebrates the incredible legacy
                of Billy Herrington and spreads laughter throughout the crypto
                world. With a combination of hilarious memes, engaging
                discussions, and thrilling tokenomics, we aim to bring a smile
                to your face and make your crypto experience truly memorable.
              </p>
            </div>
            {/* <div class="">
                      <a href="#" class="btn"> Join Telegram</a>
                  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

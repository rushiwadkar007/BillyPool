import React from "react";

// import clint2Img from '../../assets/images/clint_1.svg';
import clint2Img from "../../assets/images/clint_2.svg";
import clint3Img from "../../assets/images/clint_3.svg";
import clint4Img from "../../assets/images/clint_4.svg";

const ComingSoon2 = () => {
  return (
    <section className="" data-aos="fade-up" style={{ background: "#1c1c1c" }}>
      <div className="container ">
        <div className="row">
          <div className="col-lg-8 col-sm-12 offset-lg-2">
            <div className="col-12 col-md-12 colAlignCenter" data-aos="fade-up">
              <ul className="client_logo sed">
                <li>
                  <img src={clint2Img} alt="client2" />
                  <span>coming soon</span>
                </li>
                <li>
                  <img src={clint3Img} alt="client2" />
                  <span>coming soon</span>
                </li>
                <li>
                  <img src={clint4Img} alt="client2" />
                  <span>coming soon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon2;

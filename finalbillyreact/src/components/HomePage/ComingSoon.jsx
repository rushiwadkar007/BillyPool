import React from "react";

import client1Img from "../../assets/images/clint_1.svg";
import client2Img from "../../assets/images/clint_2.svg";
import client3Img from "../../assets/images/clint_3.svg";
import client4Img from "../../assets/images/clint_4.svg";

const ComingSoon = () => {
  return (
    <section>
      <div className="row">
        <div className="col-12 col-md-12 colAlignCenter" data-aos="fade-up">
          <ul className="client_logo">
            <li>
              <img src={client1Img} alt="clint_1" />
              <span>coming soon</span>
            </li>
            <li>
              <img src={client2Img} alt="clint_2" />
              <span>coming soon</span>
            </li>
            <li>
              <img src={client3Img} alt="clint_3" />
              <span>coming soon</span>
            </li>
            <li>
              <img src={client4Img} alt="clint_4" />
              <span>coming soon</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

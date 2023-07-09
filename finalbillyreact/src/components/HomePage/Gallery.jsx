import React from "react";

import img1 from "../../assets/images/img_1.jpeg";
import img2 from "../../assets/images/img_2.jpeg";
import img3 from "../../assets/images/img_3.jpeg";
import img4 from "../../assets/images/img_4.jpeg";
import img5 from "../../assets/images/img_5.png";
import img6 from "../../assets/images/img_6.png";

const Gallery = () => {
  // prettier-ignore
  return (
    <section className="pt_50 pb_50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center aos-init aos-animate" data-aos="fade-up">
                    <div className="gallery">
                        
                        <img src={img1} alt="img1" width="%" height="auto" className="gallery-img" />		
                        <img src={img2} alt="img2" width="%" height="auto" className="gallery-img" />
                        <img src={img3} alt="img3" width="%" height="auto" className="gallery-img" />
                        <img src={img4} alt="img4" width="%" height="auto" className="gallery-img" />
                        <img src={img5} alt="img5" width="%" height="auto" className="gallery-img" />
                        <img src={img6} alt="img6" width="%" height="auto" className="gallery-img" />
                        
                    </div> 
                </div>
                
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
};

export default Gallery;

import { useEffect } from "react";
const slideBlock=()=>{
   document.querySelector('.contact-bg').classList.add('active-contact-bg')
 }
const BlockDetector = () => {
    useEffect(() => {
      // Create an intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Trigger alert when 'b' section is in view
              if (entry.target.id === 'contactBlock') {
                        slideBlock()
              }
            }
          });
        },
        {
          threshold: 1, // Adjust this to trigger when 100% of the element is visible
        }
      );
  
      // Target the 'b' section
      const sectionB = document.getElementById('contactBlock');
      if (sectionB) {
        observer.observe(sectionB);
      }
  
      // Cleanup observer on component unmount
      return () => {
        observer.disconnect();
      };
    }, []);

    return(
        <>
<div className="d-flex justify-content-between container flex-wrap mt-5">
        <div className="d-flex flex-column g-10" id="contactBlock">
          <button class="btn-secondary col-8">Contact Me</button>
          <div class="d-flex flex-column g-5">
            <span className="font-size30 secondary-clr">
              Got Any Questions?
            </span>
            <span>Let's Connect.</span>
          </div>
        </div>
        <div>
          <form className="d-flex g-20 flex-column">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" required/>
            </div>
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required/>
            </div>
            <div class="form-group">
            <textarea type="text" class="form-control" rows={4} placeholder="Message" required/>
            </div>
            <div className="form-group">
              <span><i class="bi bi-envelope"></i> &ensp;althaf.sh658@gmail.com</span> &ensp;&ensp;
              <button className="btn-primary" type="submit"><i class="bi bi-envelope"></i> Hit me up</button>
            </div>
            </form>
        </div>
      </div>
        </>
    )
  }

  export default BlockDetector;
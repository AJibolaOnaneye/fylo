import React from "react";
import quotes from "../pictures/quotes.svg"
import rightarrow from "../pictures/rightarrow.svg"
import avatar_testimonial from "../pictures/avatar_testimonial.jpg"
import illustration2 from "../pictures/illustration2.svg";

const Section1 = () => {
  return (
    <div>
      <section class="light-blueish">
        <div className="container">
          <div className="flex">
            <div>
              <h2>Stay productive, wherever you are</h2>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>

              <a className="green" href="/">
                See how Fylo works
                <img src={rightarrow} alt="arrow" />
              </a>

              <div className="testimonial-box">
                <img src={quotes} alt="quote" />
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="user-info">
                  <div>
                    <img src={avatar_testimonial} alt="user" />
                  </div>
                  <div>
                    <h4>Kyle Burton</h4>
                    <small>Founder &amp; CEO, Huddle</small>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="illustration"
                src={illustration2}
                alt="section-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;

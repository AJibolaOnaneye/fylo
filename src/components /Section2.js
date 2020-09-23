import React from "react";

const Section2 = () => {
  return (
    <div>
      <section className="blueish">
        <div className="container">
          <div className="flex">
            <div>
              <h2>Get early access today</h2>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
            <div>
              <form>
                <input type="email" placeholder="example@example.com" />
                <button>Get Started For Free</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;

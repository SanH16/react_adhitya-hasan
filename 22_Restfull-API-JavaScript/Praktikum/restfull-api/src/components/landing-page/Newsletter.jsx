import React from "react";

export default function Newsletter() {
  return (
    <>
      <section className="newsletterr">
        <div className="newss justify-content-center text-center">
          <h3 className="join-our">Join Our Newsletter</h3>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <div className="form-group input-newss">
            <input className="input-search form-control" type="text" placeholder="Hello there" />
            <button className="subscribed buton" href="/">
              Subscribed
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

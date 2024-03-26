import React, { useRef, useState } from "react";

const Form = () => {
  const checkboxRef = useRef(null);
  const [Fromdata, setFromdata] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
  });
  const [Errordata, setErrordata] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
  });
  const [Pop, setPop] = useState(false);
  const submission = (e) => {
    const { name, value } = e.target;
    setFromdata({ ...Fromdata, [name]: value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    };
    const error = {};
    if (!regex.name.test(Fromdata.name)) {
      error.name = "invalid name";
    }
    if (!regex.lastname.test(Fromdata.lastname)) {
      error.lastname = "invalid lastname";
    }
    if (!regex.number.test(Fromdata.number)) {
      error.number = "invalid number";
    }
    if (!regex.email.test(Fromdata.email)) {
      error.email = "invalid email";
    }
    if (!checkboxRef.current.checked) {
      error.checkbox = "agreement not checked";
    }
    setErrordata(error);
    if (Object.keys(error).length === 0) {
      setErrordata({
        name: "",
        lastname: "",
        number: "",
        email: "",
      });
      setFromdata({
        name: "",
        lastname: "",
        number: "",
        email: "",
      });
      setPop(true);
    }
  };
  if (Pop) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <section className="  bg-black py-5 -mt-1 position-relative z-3 ">
      <div className=" bg-from d-flex">
        <div className="container d-flex justify-content-center  align-items-center">
          <div className="row flex-grow-1">
            <div className="col-md-8">
              <div
                data-aos="fade-right"
                className="card-from w-100 gradient-border-mask3"
              >
                <h2 className=" text-white  fw-bold fs-4xl lh-sm-62 lh-40">
                  Get updated with us
                </h2>
                <form onSubmit={handelsubmit}>
                  <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
                    <div className=" d-flex flex-column w-100">
                      <label className="fw-medium fs-md lh-19 mb-2 text-white ">
                        Frist Name
                      </label>
                      <div className="gradia ntfrom">
                        <input
                          onChange={submission}
                          type="name"
                          name="name"
                          value={Fromdata.name}
                          placeholder="Park Seijun"
                          className=" input-layout text-white text-opacit-70   "
                        />
                        {Errordata.name && (
                          <p className="text-white pt-1">{Errordata.name}</p>
                        )}
                      </div>
                    </div>
                    <div className=" d-flex flex-column w-100">
                      <label className="fw-medium fs-md lh-19 mb-2 text-white ">
                        Last Name
                      </label>
                      <div className="gradia ntfrom">
                        <input
                          onChange={submission}
                          type="name"
                          name="lastname"
                          value={Fromdata.lastname}
                          placeholder="Sejiun"
                          className=" input-layout text-white text-opacit-70   "
                        />
                        {Errordata.lastname && (
                          <p className="text-white pt-1">
                            {Errordata.lastname}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-sm-row align-items-center gap-4 pt-4">
                    <div className=" d-flex flex-column w-100">
                      <label className="fw-medium fs-md lh-19 mb-2 text-white ">
                        Phone Number
                      </label>
                      <div className="gradia ntfrom">
                        <input
                          onChange={submission}
                          type="number"
                          name="number"
                          value={Fromdata.number}
                          placeholder="+12 5858526478"
                          className=" input-layout text-white text-opacit-70   "
                        />
                        {Errordata.number && (
                          <p className="text-white pt-1">{Errordata.number}</p>
                        )}
                      </div>
                    </div>
                    <div className=" d-flex flex-column w-100">
                      <label className="fw-medium fs-md lh-19 mb-2 text-white ">
                        Email
                      </label>
                      <div className="gradia ntfrom">
                        <input
                          onChange={submission}
                          type="email"
                          name="email"
                          value={Fromdata.email}
                          placeholder="Park@458@Gmail.com"
                          className=" input-layout  text-white text-opacit-70   "
                        />
                        {Errordata.email && (
                          <p className="text-white pt-1">{Errordata.email}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" mb-2 d-flex pt-3 align-items-start gap-14">
                    <input
                      type="checkbox"
                      id="checkbox"
                      defaultChecked={false}
                      ref={checkboxRef}
                    />
                    <p className=" text-white fw-normal max-w-547 fs-lg lh-21 mb-0 ">
                      By sending this form I confirm that I have read and accept
                      the <span className=" fw-semibold"> Privacy Policy</span>
                    </p>
                  </div>
                  {Errordata.checkbox && (
                    <p className="text-white pt-1">{Errordata.checkbox}</p>
                  )}
                  <div className="button-border  d-inline-block mt-4">
                    <input
                      type="submit"
                      value="Subscribe"
                      className="button-primery2    fs-lg fw-bold text-c-white lh-27"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div data-aos="fade-left" className="col-md-4 my-auto pt-4 pt-md-0">
              <h4 className=" fw-normal fs-2xl lh-27 text-white">
                Stay updated
              </h4>
              <p className="mb-3 pt-1 fw-normal fs-md lh-24 text-opacit-70 text-white">
                At 248 Labs, our constant pursuit is to build engaging games
                that spared joy. Don’t hesitate to reach out to us with your
                thoughts and messages - we are all ears!
              </p>
              <h4 className=" pt-4 fw-normal fs-2xl lh-27 text-white">
                Address
              </h4>
              <p className="fw-normal   pt-1 fs-md lh-24 text-opacit-70 text-white">
                390 Orchard Road, 03-07, Palais Renaissance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {Pop && (
        <div className=" p-12 position-fixed w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center blur-20 submissonlayer z-11">
          <div
            className={`${
              Pop && " submission-animation"
            } sumbmission-succefull text-center`}
          >
            <p className=" text-white fs-3xl">THANKS FOR SUBCRIBED 👍</p>
            <div className="button-border   d-inline-block">
              <button
                onClick={() => {
                  setPop(false);
                }}
                className="button-primery2   px-4 py-1    fs-lg fw-bold text-c-white lh-27"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Form;

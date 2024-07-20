import React from "react";

function Feedback() {
  return (
    <section className="p-4" style={{ fontSize: "14px" }}>
      <div style={{ maxWidth: "1080px" }} className="d-flex flex-column gap-3">
        <div className="d-flex  flex-column gap-2 ">
          <p className="text-black fw-semibold fs-6">
            Tell us about your experience!
          </p>
          <p className="text-black">
            We work hard to make sure our partner platforms help you run your
            business. Hearing from you is an important part of getting things
            right.
          </p>
          <p className="text-black">
            For support with your property or account, please visit our{" "}
            <span style={{ color: "#02BCBC", cursor: "pointer" }}>
              Help Center
            </span>{" "}
            or{" "}
            <span style={{ color: "#02BCBC", cursor: "pointer" }}>
              Contact Us.
            </span>
             
          </p>
          <p className="text-black">
            What kind of feedback do you want to provide today?
          </p>
        </div>
        <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
          <input
            type="text"
            className="form-control w-100"
            placeholder="Compliment"
          />
          <input
            type="text"
            className="form-control w-100"
            placeholder="Suggestion"
          />
          <input
            type="text"
            className="form-control w-100"
            placeholder="Complaint"
          />
          <div>
            <label htmlFor="comment-textarea">Your comments</label>
            <textarea
              name=""
              id=""
              className="form-control w-100"
              rows={5}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Attach a file (optional)</label>
            <label
              htmlFor="comment-file"
              className="d-flex align-items-center justify-content-center form-control"
              style={{
                cursor: "pointer",
                width: "100%",
                height: "150px",
                color: "#02BCBC",
                border: "1px solid #02BCBC",
              }}
            >
              Browse files or drag and drop
            </label>
            <input
              type="file"
              className="form-control w-100 d-none"
              id="comment-file"
            />
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <p className="text-black">
            <span className="fw-semibold">Tip! </span>
            <span>
              Feedback that helps us improve your experience includes things
              like:
            </span>
          </p>
          <ul className="text-black">
            <li>Information you expected to see but did not</li>
            <li>Tasks you wanted to complete but could not</li>
            <li>Confusion about information on the page</li>
            <li>Recommendations you have to improve the page</li>
          </ul>
        </div>
        <div className="d-flex align-items-end justify-content-end">
            <button className="text-white rounded-pill border-0 px-4 py-2 fw-semibold" style={{ backgroundColor: "#000000" }}>
                Next
            </button>
        </div>
      </div>
    </section>
  );
}

export default Feedback;

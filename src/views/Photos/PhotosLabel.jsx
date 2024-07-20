import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import warning from "../../assets/img/warning.svg";
import returnBullet from "../../assets/img/return-bullet.svg";
import * as Icons from "tabler-icons-react";

function PhotosLabel(props) {
  const { tempImageStore, setTempImageStore, setImageStore } = props;
  const [isSelectedAsPrimaryPhoto, setIsSelectedAsPrimaryPhoto] =
    useState(false);
  const [isAllLabelModalOpen, setIsAllLabelModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageResolution, setImageResolution] = useState({
    width: 0,
    height: 0,
  });
  const [selectedLabelRadio, setSelectedLabelRadio] = useState(null);

  const imageLabel = [
    "Room",
    "Bathrrom",
    "Living Area",
    "Front of property",
    "Exterior",
    "Private kitchen",
    "Terrace/Patio",
    "Restaurant",
    "Reception",
    "In-room dinning",
  ];

  useEffect(() => {
    if (tempImageStore.length > 0) {
      const file = tempImageStore[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        const img = new Image();
        img.onload = () => {
          setImageResolution({ width: img.width, height: img.height });
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }, [tempImageStore]);

  useEffect(() => {
    setTempImageStore((prevTempImageStore) => ({
      ...prevTempImageStore,
      label: selectedLabelRadio,
    }));
  }, [selectedLabelRadio]);

  function updateImageStore() {
    setImageStore((prevImageStore) => ({
      ...prevImageStore,
      ...tempImageStore,
    }));
    setTempImageStore(null);
  }

  return (
    <section className="p-4" style={{ fontSize: "14px" }}>
      <div style={{ maxWidth: "1080px" }} className="d-flex flex-column gap-3">
        <div
          className="d-flex align-items-center gap-3 justify-content-between"
          style={{ borderBottom: "1px solid #E5E5E5" }}
        >
          <p className="text-black fw-semibold fs-5">Label Photo</p>
          <Link to="feedback">
            <p style={{ color: "#02BCBC", cursor: "pointer" }}>Feedback</p>
          </Link>
        </div>
        <div
          className="p-3 d-flex flex-column gap-2"
          style={{ border: "solid 2px #02BCBC", backgroundColor: "#02BCBC1A" }}
        >
          <div className="d-flex align-items-center gap-2">
            <img src={warning} style={{ width: "16px" }} />
            <p className="text-black">Photo is low resolution</p>
          </div>
          <p className="text-black">
            <span>
              Low resolution photos can appear pixelated or out of focus.{" "}
            </span>{" "}
            <label
              htmlFor="replace-photo-input"
              style={{ color: "#02BCBC", cursor: "pointer" }}
            >
              Replace photo
            </label>
          </p>
        </div>
        <div className="d-flex align-items-start gap-5 flex-wrap">
          <div className="d-flex flex-column align-items-start gap-2">
            <p className="text-black fs-6">Label this photo</p>

            {selectedLabelRadio === null ? (
              <div>
                <div
                  className="d-flex align-items-center gap-1 p-1 rounded-3"
                  style={{ border: "solid 1px #02BCBC" }}
                >
                  <Icons.Search style={{ width: "20px" }} />
                  <input
                    type="search"
                    placeholder="Search"
                    name=""
                    id=""
                    className="border-0"
                    style={{ outline: "none" }}
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <p>Popular labels</p>
                  {imageLabel.map((label) => (
                    <div
                      className="d-flex align-items-center gap-2"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={returnBullet}
                        alt=""
                        style={{ width: "16px" }}
                      />
                      <input
                        type="radio"
                        id={label}
                        value={label}
                        name="all-label"
                        onChange={(e) => setSelectedLabelRadio(e.target.value)}
                        className="d-none"
                      />
                      <label htmlFor={label}>{label}</label>
                    </div>
                  ))}
                  <p
                    className="fw-semibold"
                    style={{ color: "#02BCBC", cursor: "pointer" }}
                    onClick={() => setIsAllLabelModalOpen(true)}
                  >
                    Browse all labels
                  </p>
                </div>
              </div>
            ) : (
              <p
                className="text-white p-1 ps-4 rounded-pill d-flex align-items-center justify-content-between gap-2 "
                onClick={() => setSelectedLabelRadio(null)}
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                  backgroundColor: "#000000",
                }}
              >
                {" "}
                <span>{selectedLabelRadio}</span>{" "}
                <span>
                  <Icons.X className="w-50" />
                </span>{" "}
              </p>
            )}
            <div className="d-flex gap-2">
              {tempImageStore.label === null ? (
                <button
                  className="rounded-pill px-3 py-1 "
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "3px solid #EBEBEB",
                    color: "#EBEBEB",
                  }}
                >
                  Upload
                </button>
              ) : (
                <button
                  className="rounded-pill px-3 py-1 text-white border-0 "
                  style={{ backgroundColor: "#93278F" }}
                  onClick={updateImageStore}
                >
                  Upload
                </button>
              )}
              <button
                className="bg-white rounded-pill px-3 py-1 border-1"
                onClick={() => setTempImageStore(null)}
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            style={{
              width: "670px",
              height: "590px",
              backgroundColor: "#000000",
              padding: "16px",
            }}
            className="d-flex flex-column gap-4 justify-content-between"
          >
            <div className="d-flex align-items-center gap-5 justify-content-center flex-wrap">
              <div>
                <label
                  htmlFor="replace-photo-input"
                  className=" text-white d-flex align-items-center gap-2"
                  style={{ cursor: "pointer" }}
                >
                  <Icons.Upload style={{ width: "20px" }} />
                  <p className="text-white">Replace photo</p>
                </label>
                <input
                  type="file"
                  name=""
                  id="replace-photo-input"
                  className="d-none"
                  onChange={(event) => {
                    setTempImageStore(event.target.files);
                    setSelectedLabelRadio(null);
                  }}
                />
              </div>
              <div
                className="text-white d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
                onClick={() => setTempImageStore(null)}
              >
                <Icons.Trash style={{ width: "20px" }} />
                <p className="text-white">Delete</p>
              </div>
              <div
                className="text-white d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <Icons.Rotate style={{ width: "20px" }} />
                <p className="text-white">Rotate</p>
              </div>
              <div
                className="text-white d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setIsSelectedAsPrimaryPhoto(!isSelectedAsPrimaryPhoto)
                }
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid white",
                    borderRadius: "4px",
                  }}
                  className="d-flex align-items-center justify-content-center"
                >
                  {isSelectedAsPrimaryPhoto ? (
                    <Icons.Check style={{ width: "20px" }} />
                  ) : null}
                </span>
                <p className="text-white">Preferred primary photo</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={selectedImage}
                alt=""
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-white">{tempImageStore[0]?.name}</p>
              {/* Resoulution adding here  */}
              <p className="text-white">
                {imageResolution.width} x {imageResolution.height}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={isAllLabelModalOpen}
        onHide={() => setIsAllLabelModalOpen(false)}
      >
        <Modal.Body className="p-0 h-600p">
          <div data-simplebar className="nicescroll-bar">
            <div className="">
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <Icons.ArrowNarrowLeft />
                  <p style={{ fontSize: "14px" }}>Exterior</p>
                </div>
                <Icons.X onClick={() => setIsAllLabelModalOpen(false)} />
              </div>
              <p
                className="text-black ps-3 py-2"
                style={{ backgroundColor: "#E6E6E6" }}
              >
                Chose a label
              </p>
            </div>
            <PerfectScrollbar>
              <form action="" className="m-3 d-flex flex-column gap-2">
                <Form.Check
                  type="radio"
                  label="Aerial view"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </form>
            </PerfectScrollbar>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default PhotosLabel;

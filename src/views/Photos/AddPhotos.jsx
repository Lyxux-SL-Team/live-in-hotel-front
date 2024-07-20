import React from "react";
import * as Icons from "tabler-icons-react";
import { Link } from "react-router-dom";

function AddPhotos(props) {
  const {
    isPropertyExpanded,
    setIsPropertyExpanded,
    isAmenitiesExpanded,
    setIsAmenitiesExpanded,
    isRoomExpanded,
    setIsRoomExpanded,
    setTempImageStore,
    imageStore,
  } = props;
  return (
    <section className="p-4" style={{ fontSize: "14px" }}>
      <div style={{ maxWidth: "1080px" }} className="d-flex flex-column gap-3">
        <div>
          <p className="text-black fw-semibold fs-5">Photos</p>
          <p style={{ fontSize: "14px" }}>
            Travelers interact with photos more than any other part of your
            property listing, and the right ones can make a difference. We
            recommend using as many photos as you can, but 6 unique photos are
            required to get you started. Duplicates will be removed and need to
            be replaced.
          </p>
        </div>
        {/* Drag and drop div */}
        <div>
          <label
            htmlFor="hero-file-uploader"
            style={{
              cursor: "pointer",
              width: "100%",
              height: "180px",
              border: "1px dashed black",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="d-flex gap-2 fs-5 ">
              <Icons.PhotoPlus style={{ color: "#02BCBC" }} />
              <span style={{ color: "#02BCBC" }}>Upload Photos</span>
            </p>
            <p style={{ color: "#02BCBC" }}>Browse files or drag and drop</p>
          </label>
          <input
            type="file"
            name=""
            id="hero-file-uploader"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setTempImageStore(e.target.files)}
          />
        </div>
        <div className="d-flex flex-column gap-5">
          <p style={{ fontSize: "16px" }} className="text-black">
            Recommended photos
          </p>
          {/* Property Photos */}
          <div>
            <p>
              <span className="text-black">Property </span>
              <span> (upload an exterior and lobby photo)</span>
            </p>
            <div className="border border-1">
              <div className="px-4 py-5 border-bottom border-1">
                <p>
                  Help travelers imagine themselves at your property by
                  showcasing everything you have to offer.
                </p>
              </div>

              {/* Exterior */}
              <div className="px-4 py-5">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex gap-2 align-items-center "
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setIsPropertyExpanded({
                        ...isPropertyExpanded,
                        exterior: !isPropertyExpanded.exterior,
                      })
                    }
                  >
                    <Icons.Check
                      className="rounded-circle p-1"
                      style={
                        isPropertyExpanded.exterior
                          ? { backgroundColor: "#02BCBC", color: "white" }
                          : { backgroundColor: "#B8B8B8" }
                      }
                    />
                    <p className="fs-6 text-black fw-bold">Exterior</p>
                  </div>
                  {!isPropertyExpanded.exterior && (
                    <div
                      className="d-flex gap-2 align-items-center px-4 py-2 fs-6 rounded border border-1"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#E7E7E7",
                        color: "#02BCBC",
                      }}
                      onClick={() =>
                        setIsPropertyExpanded({
                          ...isPropertyExpanded,
                          exterior: true,
                        })
                      }
                    >
                      <Icons.PhotoPlus />
                      <p style={{ color: "#02BCBC" }}>Add Photos</p>
                    </div>
                  )}
                </div>
                {isPropertyExpanded.exterior && (
                  <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                    <label
                      htmlFor="file-upload-property-exterior"
                      style={{
                        cursor: "pointer",
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons.PhotoPlus />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-upload-property-exterior"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>

              {/* Interior */}
              <div className="px-4 py-5 border-top border-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex gap-2 align-items-center "
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setIsPropertyExpanded({
                        ...isPropertyExpanded,
                        interior: !isPropertyExpanded.interior,
                      })
                    }
                  >
                    <Icons.Check
                      className="rounded-circle p-1"
                      style={
                        isPropertyExpanded.interior
                          ? { backgroundColor: "#02BCBC", color: "white" }
                          : { backgroundColor: "#B8B8B8" }
                      }
                    />
                    <p className="fs-6 text-black fw-bold">interior</p>
                  </div>
                  {!isPropertyExpanded.interior && (
                    <div
                      className="d-flex gap-2 align-items-center px-4 py-2 fs-6 rounded border border-1"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#E7E7E7",
                        color: "#02BCBC",
                      }}
                      onClick={() =>
                        setIsPropertyExpanded({
                          ...isPropertyExpanded,
                          interior: true,
                        })
                      }
                    >
                      <Icons.PhotoPlus />
                      <p style={{ color: "#02BCBC" }}>Add Photos</p>
                    </div>
                  )}
                </div>
                {isPropertyExpanded.interior && (
                  <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                    <label
                      htmlFor="file-upload-property-interior"
                      style={{
                        cursor: "pointer",
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons.PhotoPlus />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-upload-property-interior"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Amenities Photos */}
          <div>
            <p>
              <span className="text-black">Amenities </span>
              <span> (upload a photo of at least two amenities)</span>
            </p>
            <div className="border border-1">
              <div className="px-4 py-5 border-bottom border-1">
                <p>
                  Amenity photos can help you connect with travelers looking for
                  properties like yours.
                </p>
              </div>

              {/* Breakfast */}
              <div className="px-4 py-5">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex gap-2 align-items-center "
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setIsAmenitiesExpanded({
                        ...isAmenitiesExpanded,
                        breakfast: !isAmenitiesExpanded.breakfast,
                      })
                    }
                  >
                    <Icons.Check
                      className="rounded-circle p-1"
                      style={
                        isAmenitiesExpanded.breakfast
                          ? { backgroundColor: "#02BCBC", color: "white" }
                          : { backgroundColor: "#B8B8B8" }
                      }
                    />
                    <p className="fs-6 text-black fw-bold">Breakfast</p>
                  </div>
                  {!isAmenitiesExpanded.breakfast && (
                    <div
                      className="d-flex gap-2 align-items-center px-4 py-2 fs-6 rounded border border-1"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#E7E7E7",
                        color: "#02BCBC",
                      }}
                      onClick={() =>
                        setIsAmenitiesExpanded({
                          ...isAmenitiesExpanded,
                          breakfast: true,
                        })
                      }
                    >
                      <Icons.PhotoPlus />
                      <p style={{ color: "#02BCBC" }}>Add Photos</p>
                    </div>
                  )}
                </div>
                {isAmenitiesExpanded.breakfast && (
                  <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                    <label
                      htmlFor="file-upload-amenities-breakfast"
                      style={{
                        cursor: "pointer",
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons.PhotoPlus />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-upload-amenities-breakfast"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>

              {/* Spa */}
              <div className="px-4 py-5 border-top border-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex gap-2 align-items-center "
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setIsAmenitiesExpanded({
                        ...isAmenitiesExpanded,
                        spa: !isAmenitiesExpanded.spa,
                      })
                    }
                  >
                    <Icons.Check
                      className="rounded-circle p-1"
                      style={
                        isAmenitiesExpanded.spa
                          ? { backgroundColor: "#02BCBC", color: "white" }
                          : { backgroundColor: "#B8B8B8" }
                      }
                    />
                    <p className="fs-6 text-black fw-bold">Spa</p>
                  </div>
                  {!isAmenitiesExpanded.spa && (
                    <div
                      className="d-flex gap-2 align-items-center px-4 py-2 fs-6 rounded border border-1"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#E7E7E7",
                        color: "#02BCBC",
                      }}
                      onClick={() =>
                        setIsAmenitiesExpanded({
                          ...isAmenitiesExpanded,
                          spa: true,
                        })
                      }
                    >
                      <Icons.PhotoPlus />
                      <p style={{ color: "#02BCBC" }}>Add Photos</p>
                    </div>
                  )}
                </div>
                {isAmenitiesExpanded.spa && (
                  <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                    {amenitiesFilesStore.spa.map((file, index) => (
                      <img
                        src={URL.createObjectURL(file)}
                        key={index}
                        style={{
                          width: "152px",
                          height: "125px",
                          objectPosition: "center",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    ))}
                    <label
                      htmlFor="file-upload-amenities-spa"
                      style={{
                        cursor: "pointer",
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons.PhotoPlus />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-upload-amenities-spa"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Room Photos */}
          <div>
            <p className="text-black fw-semibold">Room photos</p>
            <div className="border border-1">
              <div className="px-4 py-5 border-bottom border-1">
                <p>
                  Let travelers know what to expect by adding photos of your
                  rooms and amenities.
                </p>
              </div>

              {/* Double or Twin Room, Men only, Private Pool, Annex Building */}
              <div className="px-4 py-5">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex gap-2 align-items-center "
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setIsRoomExpanded({
                        ...isRoomExpanded,
                        firstOption: !isRoomExpanded.firstOption,
                      })
                    }
                  >
                    <Icons.Check
                      className="rounded-circle p-1"
                      style={
                        isRoomExpanded.firstOption
                          ? { backgroundColor: "#02BCBC", color: "white" }
                          : { backgroundColor: "#B8B8B8" }
                      }
                    />
                    <p className="fs-6 text-black fw-bold">
                      Double or Twin Room, Men only, Private Pool, Annex
                      Building
                    </p>
                  </div>
                  {!isRoomExpanded.firstOption && (
                    <div
                      className="d-flex gap-2 align-items-center px-4 py-2 fs-6 rounded border border-1"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#E7E7E7",
                        color: "#02BCBC",
                      }}
                      onClick={() =>
                        setIsRoomExpanded({
                          ...isRoomExpanded,
                          firstOption: true,
                        })
                      }
                    >
                      <Icons.PhotoPlus />
                      <p style={{ color: "#02BCBC" }}>Add Photos</p>
                    </div>
                  )}
                </div>
                {isRoomExpanded.firstOption && (
                  <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                    <label
                      htmlFor="file-upload-room-firstOption"
                      style={{
                        cursor: "pointer",
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons.PhotoPlus />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-upload-room-firstOption"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>

              {/* Basic Double or Twin Room */}
              <div className="px-4 py-5 border-top border-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex gap-2 align-items-center "
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setIsRoomExpanded({
                        ...isRoomExpanded,
                        secondOption: !isRoomExpanded.secondOption,
                      })
                    }
                  >
                    <Icons.Check
                      className="rounded-circle p-1"
                      style={
                        isRoomExpanded.secondOption
                          ? { backgroundColor: "#02BCBC", color: "white" }
                          : { backgroundColor: "#B8B8B8" }
                      }
                    />
                    <p className="fs-6 text-black fw-bold">
                      Basic Double or Twin Room
                    </p>
                  </div>
                  {!isRoomExpanded.secondOption && (
                    <div
                      className="d-flex gap-2 align-items-center px-4 py-2 fs-6 rounded border border-1"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#E7E7E7",
                        color: "#02BCBC",
                      }}
                      onClick={() =>
                        setIsRoomExpanded({
                          ...isRoomExpanded,
                          secondOption: true,
                        })
                      }
                    >
                      <Icons.PhotoPlus />
                      <p style={{ color: "#02BCBC" }}>Add Photos</p>
                    </div>
                  )}
                </div>
                {isRoomExpanded.secondOption && (
                  <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                    <label
                      htmlFor="file-upload-room-secondOption"
                      style={{
                        cursor: "pointer",
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons.PhotoPlus />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-upload-room-secondOption"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        setRoomFileStore((prevRoomFileStore) => ({
                          ...prevRoomFileStore,
                          secondOption: [
                            ...prevRoomFileStore.secondOption,
                            event.target.files[0],
                          ],
                        }));
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Photos */}
          <div>
            <p className="text-black fw-semibold">Additional photos</p>
            <div className="border border-1">
              <div className="px-4 py-5 border-bottom border-1">
                <p>Add or update labels to start categorizing these photos.</p>
              </div>

              <div className="px-4 pb-2">
                <div className="mt-3 d-flex gap-3 align-content-center flex-wrap">
                  {/* {imageStore.map((image) => (
                    <img
                      src={URL.createObjectURL(image)}
                      style={{
                        width: "152px",
                        height: "125px",
                        border: "3px dashed #B8B8B8",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  ))} */}
                  <label
                    htmlFor="file-upload-additional-files"
                    style={{
                      cursor: "pointer",
                      width: "152px",
                      height: "125px",
                      border: "3px dashed #B8B8B8",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icons.PhotoPlus />
                  </label>
                  <input
                    type="file"
                    name=""
                    id="file-upload-additional-files"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <button
            className="rounded-pill"
            style={{
              cursor: "pointer",
              backgroundColor: "#FFFFFF",
              padding: "6px 16px",
              border: "1px solid #000000",
            }}
          >
            Back
          </button>
          <Link to="photo-label">
            <button
              className="rounded-pill"
              style={{
                cursor: "pointer",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                padding: "6px 16px",
                border: "1px solid #000000",
              }}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AddPhotos;

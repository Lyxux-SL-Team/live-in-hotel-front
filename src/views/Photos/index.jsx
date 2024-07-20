import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddPhotos from "./AddPhotos";
import PhotosLabel from "./PhotosLabel";
import * as Icons from "tabler-icons-react";

const Photos = () => {
  // For the property
  const [isPropertyExpanded, setIsPropertyExpanded] = useState({
    exterior: false,
    interior: false,
  });

  // For the Amenities
  const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState({
    breakfast: false,
    spa: false,
  });

  const [isRoomExpanded, setIsRoomExpanded] = useState({
    firstOption: false,
    secondOption: false,
  });

  const [tempImageStore, setTempImageStore] = useState(null);
  const [imageStore, setImageStore] = useState([]);
  console.log ("image Store", imageStore)
 

  return (
    <div>
      {tempImageStore === null ? (
        <AddPhotos
          isPropertyExpanded={isPropertyExpanded}
          setIsPropertyExpanded={setIsPropertyExpanded}
          isAmenitiesExpanded={isAmenitiesExpanded}
          setIsAmenitiesExpanded={setIsAmenitiesExpanded}
          isRoomExpanded={isRoomExpanded}
          setIsRoomExpanded={setIsRoomExpanded}
          setTempImageStore={setTempImageStore}
          imageStore={imageStore}
        />
      ) : (
        <PhotosLabel
          tempImageStore={tempImageStore}
          setTempImageStore={setTempImageStore}
          setImageStore={setImageStore}
        />
      )}
    </div>
  );
};

export default Photos;
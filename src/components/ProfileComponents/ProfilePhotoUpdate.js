import React, { useState } from "react";

import { Form } from "react-bootstrap";

import Avatar from "../SharedComponents/Avatar";

import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../../redux/reducers/user/userSlice";

const ProfilePhotoUpdate = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);

    // Create form data and append the selected image
    const formData = new FormData();
    formData.append("avatar", selectedImage);

    // Dispatch the updateInfo action with form data
    dispatch(updateInfo(formData));
  };

  // const avatarSrc = selectedImage || user.avatar.url;

  return (
    <div>
      <p className="text-center">Profile Photo</p>
      <Avatar src={user.avatar.url} />
      <span style={{ color: "red", fontWeight: "700" }}>Delete</span>

      <Form.Group controlId="profilePicture">
        <Form.Label>choose Another you want ! </Form.Label>
        <Form.Control
          type="file"
          placeholder="Select Profile Photo"
          onChange={handleImageChange}
        />
      </Form.Group>
    </div>
  );
};
export default ProfilePhotoUpdate;

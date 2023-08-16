import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import Avatar from "../SharedComponents/Avatar";

import { useSelector, useDispatch } from "react-redux";
import { updateProfilePic } from "../../redux/reducers/user/userSlice";

const ProfilePhotoUpdate = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(user.avatar.url);

  const selectImageHandler = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImagePrev(fileReader.result);
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = new FormData();

    userData.append("file", image);

    dispatch(updateProfilePic(userData));
  };

  return (
    <div>
      <Avatar src={imagePrev} alt="no picture" />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="profilePicture">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            placeholder="Select Profile Photo"
            onChange={selectImageHandler}
          />
        </Form.Group>

        <Button type="submit" variant="outline-success" className="mt-2">
          Change Photo
        </Button>
      </Form>
    </div>
  );
};
export default ProfilePhotoUpdate;

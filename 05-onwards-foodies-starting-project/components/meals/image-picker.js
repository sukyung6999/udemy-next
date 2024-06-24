"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function HandlePickClick() {
    imageInput.current.click();
  }

  function HandleImageChange(event) {
    const file = event.target.file[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id={name}
          className={classes.input}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={HandleImageChange}
          // multiple
        />
        <button
          className={classes.button}
          type="button"
          onClick={HandlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

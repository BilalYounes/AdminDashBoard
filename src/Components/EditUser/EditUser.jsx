import "./EditUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const EditUser = ({ title, inputs }) => {
  const [file, setfile] = useState("");
  return (
    <div className="edituser">
      <div className="edituser__top">{title}</div>
      <div className="edituser__bottom">
        <div className="edituser__bottom-left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
            className="image"
          />
        </div>
        <div className="edituser__bottom-right">
          <form>
            <div className="inputform">
              <label htmlFor="file">
                image:
                <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                onChange={e => setfile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
              />
            </div>
            {inputs.map((input) => (
              <div className="inputform">
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}

            <button className="button_send">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

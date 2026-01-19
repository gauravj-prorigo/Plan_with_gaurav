import React from "react";
import { FcBusinessman } from "react-icons/fc";
import "../css/ProfileModal.css";

const ProfileModal = ({onlogout}) => {
  return (
    <div className="profile-modal-main">
      <div className="profile-modal-box">
        
        <FcBusinessman className="profile-icon" />

        {/* <h3 className="profile-username">{username}</h3> */}

        <button className="logout-btn" onClick={onlogout}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default ProfileModal;

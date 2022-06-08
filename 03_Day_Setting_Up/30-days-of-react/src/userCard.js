import { userCardStyle, userIconStyle, skillStyle } from "./style";
import { FaRegClock } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';

import asabenehImage from "./images/asabeneh.jpg";
const cardText = {
  fullName: "DAMIEN CHAN",
  jobTitle: "CRM Consultant",
  country: "France",
  skillTitle: "SKILLS",
  skillsList: ["HTML", "CSS", "JS", "C#"],
  joinDate: "2021-09-13",
};

const skillsListFormatted = cardText.skillsList.map((skill) => {
  return (
    <button key={skill} style={skillStyle}>
      {skill}
    </button>
  );
});

const userIcon = (
  <div>
    <img style={userIconStyle} src={asabenehImage} alt="asabeneh" />
  </div>
);

export const UserCard = (
  <div style={{ height: "100%", padding: "8px", backgroundColor: "#f0f1f7" }}>
    <div style={userCardStyle}>
      {userIcon}
      <p style={{ fontWeight: "bold" }}>
        {cardText.fullName}
        <FcApproval/>
      </p>
      <p>
        {cardText.jobTitle}, {cardText.country}
      </p>
      <p style={{ fontWeight: "bold" }}>
        {cardText.skillTitle}
      </p>
      <ul>{skillsListFormatted}</ul>
      <p style={{ margin: "0" }}>
        <FaRegClock style={{marginLeft: '10px', marginRight: '10px'}}/>
        Joined on {cardText.joinDate}
      </p>
    </div>
  </div>
);

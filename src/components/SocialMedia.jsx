import React from "react";

// function SocialMedia({ socialLinks }) {
function SocialMedia({ socialLinks: { github, linkedin } }) {
  return (
    <div>
      {/*<a href={socialLinks.github}>{socialLinks.github}</a>*/}
      {/*<a href={socialLinks.linkedin}>{socialLinks.linkedin}</a>*/}
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default SocialMedia;

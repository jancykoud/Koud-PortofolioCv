import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com' },
  { icon: <FaLinkedin />, path: 'https://linkedin.com' },
  { icon: <FaYoutube />, path: 'https://youtube.com' },
  { icon: <FaTwitter />, path: 'https://twitter.com' },
];

const RéseauxSociaux = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default RéseauxSociaux;

import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../../Assets/Css/Footer.css";
const Footer = () => {
  const FooterLinks = [
    {
      link: "https://web.facebook.com/egorasmarket/",

      img: <FacebookRoundedIcon className="footer_icon" />,
      name: "Facebook",
    },
    {
      link: "https://ng.linkedin.com/company/egorasmarket",

      img: <LinkedInIcon className="footer_icon" />,
      name: "Linkedin",
    },
    {
      link: "https://twitter.com/egorasmarket",

      img: <TwitterIcon className="footer_icon" />,
      name: "Twitter",
    },
    {
      link: "https://t.me/egorasmarket",

      img: <TelegramIcon className="footer_icon" />,
      name: "Telegram",
    },
    {
      link: "https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ",
      img: <YouTubeIcon className="footer_icon" />,
      name: "Youtube",
    },
  ];
  return (
    <div className="footerDiv">
      <section className="footerSection">
        <div className="container">
          <div className="footerArea">
            <div className="header_logo">
              <img src="/img/ella_logo.svg" alt="" className="header_img" />
              <span className="poweredBy">Powered by Egoras.</span>
            </div>
            <div className="footer_links_cont">
              {FooterLinks.map((data) => (
                <div className="footer_link1">
                  <a
                    href={data.link}
                    className="footer_link_img"
                    target="_blank"
                  >
                    {data.img}
                  </a>
                  {/* <div className="footer_link_txt">{data.name}</div> */}
                </div>
              ))}
            </div>
            <hr className="horizontal_rule" />
            <div className="footer_txt">
              ©️ 2022 Egoras Technologies LTD(RC - 1832671). All rights reserved
              . Egoras Technologies ltd is a licensed pawnbroker and
              moneylender. “Egoras” and “Egorasbank” are trademarks of Egoras
              Technologies Ltd. 282 Aba Road by Rumuokrushi junction, port
              Harcourt, Rivers state.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

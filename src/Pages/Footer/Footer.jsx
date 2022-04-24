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
            <span className="law_write_up">
              “Egoras” and “Egoras.com” are trademarks of Egoras Technologies
              Limited, a company duly registered with CAC with{" "}
              <span className="add_color">RC Number: 1832671. </span>
              Egoras.com is a platform used for the provision of financial
              services under a Multipurpose Co-operative License with
              registration number <span className="add_color">34052</span>. The
              Co-operative and Egoras Technologies Limited are duly registered
              legal entities in Nigeria.
              <br />
              <br /> By the Co-operative’s Bye Law, every member of the
              Co-operative shall subscribe to a minimum of one share and may
              subscribe to additional shares subject to 20% maximum holding in
              accordance with the provision of section 27 of the Nigerian
              Co-operative Societies Act. Members of the Co-operative have their
              shareholding represented in{" "}
              <a href="/egc_token" className="add_color">
                {" "}
                Egoras Credit (EGC)
              </a>
              . However, possession of EGC is not proof of membership.
            </span>
            <hr className="horizontal_rule" />
            <div className="footer_txt">
              ©️ 2022 Egoras Technologies LTD(RC - 1832671). All rights reserved
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import Media from "react-media";
import Icon from "../Icon/Icon";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">zypsy</a>
      </div>

      <Media queries={{ small: "(max-width: 599px)" }}>
        {matches =>
          matches.small ? (
            <Icon />
          ) : (
            <>
              <div className="nav">
                <a href="/">WHY ZYPSY</a>
                <a href="/">WORKS</a>
                <a href="/">TALENTS</a>
              </div>
              <div className="startProject">
                <a href="/">START A PROJECT</a>
              </div>
            </>
          )
        }
      </Media>
      {/* <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}
        >
          {matches => (
            <>
              {matches.small && <div>I am small!</div>}
              {matches.medium && <div>I am medium!</div>}
              {matches.large && <div>I am large!</div>}
            </>
          )}
        </Media> */}
    </header>
  );
};

export default Header;

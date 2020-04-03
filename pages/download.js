import Link from "next/link";
import { Button } from "antd";
import os from "os";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinux,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const Download = () => (
  <div className="container">
    <div className="navBar">
      <img alt="logo" src="gdLogo.png" className="logo" />
      <div className="buttons">
        <Link href="/">
          <div className="button" id="home">
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className="button">About</div>
        </Link>
        <Link href="/download">
          <div id="download" className="button">
            Download
          </div>
        </Link>
      </div>
      <div className="gradient"></div>
    </div>
    <div className="downloadContainer">
      <Button type="primary" className="downloadButton">
        Download
      </Button>
      <div>
        <p>Available for:</p>
        <FontAwesomeIcon
          icon={faWindows}
          size="2x"
          style={{ color: "white" }}
        />
        <FontAwesomeIcon icon={faApple} size="2x" style={{ color: "white" }} />
        <FontAwesomeIcon icon={faLinux} size="2x" style={{ color: "white" }} />
      </div>
    </div>

    <style jsx>{`
      .container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #355b75;
      }

      .gradient {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(
          180deg,
          #212b36 50.77%,
          rgba(33, 43, 54, 0) 100%
        );
      }

      .navBar {
        position: absolute;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .gradient {
        position: absolute;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(
          180deg,
          #212b36 50.77%,
          rgba(33, 43, 54, 0) 100%
        );
      }

      #download {
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 28px;
        color: #27ae60;
      }

      .logo {
        width: 54px;
        margin: 0 0 0 24px;
      }

      .button {
        margin: 10px;
      }

      .buttons {
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: white;
      }

      .buttons > div {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
      }

      .downloadContainer {
        z-index: 2;
        display: flex;
        flex-direction: column;
        color: white;
      }

      .downloadContainer > div {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .downloadContainer > p {
        font-weight: 700;
        width: 90px;
      }
    `}</style>
  </div>
);

export default Download;

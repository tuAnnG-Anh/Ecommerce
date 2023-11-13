import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="flex justify-between">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2023, made with&nbsp;
            {<HeartFilled />} by&nbsp;
            <a href="#oggy" className="font-weight-bold" target="_blank">
              Oggy&nbsp;
            </a>
            for a better web.
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul className="flex gap-6 justify-end">
              <li className="nav-item">
                <a href="#oggy" className="nav-link text-muted" target="_blank">
                  Oggy
                </a>
              </li>
              <li className="nav-item">
                <a href="#oggy" className="nav-link text-muted" target="_blank">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#oggy" className="nav-link text-muted" target="_blank">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#oggy"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;

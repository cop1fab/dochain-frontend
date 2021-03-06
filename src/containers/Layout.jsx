import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav/TopNav';
import { Link } from 'react-router-dom';
import './Layout.scss';
import illustration from '../assets/il1.png';
import a from '../assets/icons8-merge_files.png';
import b from '../assets/icons8-statistic_file.png';
import c from '../assets/icons8-change_user_male.png';
import d from '../assets/icons8-verified_account.png';

const Layout = ({ children, match }) => (
  <div>
    <div>
      <TopNav match={match} />

      <div className="landing">
        <div className="left">
          <div className="title">
            The platform <br /> that validates authenticity
          </div>
          <div className="subtitle">
            Save time, money and resources and check the authenticity of
            potential employees CV's. With Dochain you can now trust what people
            claim.
          </div>
          <Link to="/createBlock" class="btn primary text-white ">
            CREATE BLOCK
          </Link>
        </div>

        <div className="right">
          <img src={illustration} width="550px" alt="" />
        </div>
      </div>
    </div>

    <div className="services">
      <div className="left">
        <div>
          <div className="pad">
            <img src={a} width="40px" height="auto" alt="" />
            <div className="title">Online CV database</div>
          </div>
          <div className="pad">
            <img src={b} width="40px" height="auto" alt="" />
            <div className="title">
              All your information <br /> in one olace
            </div>
          </div>
        </div>

        <div>
          <div className="pad">
            <img src={c} width="40px" height="auto" alt="" />
            <div className="title">Access from any where</div>
          </div>
          <div className="pad">
            <img src={d} width="40px" height="auto" alt="" />
            <div className="title">
              Verification from relevant <br /> stakeholders
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="title">SERVICE</div>
        <div className="desc">
          We Provide Awesome <br />
          Services to our <br />
          Customers <br />
        </div>
        <div className="subtitle">
          We add the Convenience of having your CV digital <br />
          and laced with block chain authentication
        </div>
        <button class="btn outline text-primary ">MORE DETAILS</button>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  match: PropTypes.any,
};

Layout.defaultProps = {
  children: '',
  match: { params: {} },
};

export default Layout;

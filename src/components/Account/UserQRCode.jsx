import React from 'react';
import QRCode from '../common/QRCode/QRCode';

const UserQRCode = ({
  match: {
    params: { publicKey },
  },
}) => (
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div className="columns">
          <div className="column has-text-centered">
            <QRCode text={publicKey} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UserQRCode;

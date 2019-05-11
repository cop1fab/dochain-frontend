import React from 'react';
import QrCode from 'qrcode.react';

const QRCode = ({ text, size = 300 }) => <QrCode size={size} value={text} />;

export default QRCode;

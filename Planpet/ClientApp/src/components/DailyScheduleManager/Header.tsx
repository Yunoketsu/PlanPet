import React from 'react';

type Props = {
  apiMessage: string;
};

const Header: React.FC<Props> = ({ apiMessage }) => (
  <header style={{ background: '#e0f7fa', padding: '8px', marginBottom: '8px' }}>
    <strong>APIからのメッセージ:</strong> {apiMessage}
  </header>
);

export default Header;

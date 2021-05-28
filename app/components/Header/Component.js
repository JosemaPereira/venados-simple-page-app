import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { headerMessages } from './messages';
import { defaultConfig } from '../../providers';

const HeaderIntl = ({ intl }) => {
  const { banner } = defaultConfig;
  return (
    <header className="header">
      <div className="logo">
        <img src={banner.urlBanner} alt={banner.alt} />
      </div>
      <div className="title">
        <h1>{intl.formatMessage(headerMessages.hello)}</h1>
      </div>
    </header>
  );
};

HeaderIntl.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(HeaderIntl);

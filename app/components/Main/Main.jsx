import React from 'react';
import { injectIntl } from 'react-intl';
import { Header } from '../Header';
import { Content } from '../Content';
import { Footer } from '../Footer';
export const Main = injectIntl(() => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
));

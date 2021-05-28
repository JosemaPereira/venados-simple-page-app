import React from 'react';
import { injectIntl } from 'react-intl';

const FooterIntl = () => (
  <footer className="footer">
    <p>&copy;Josema Pereira 2020</p>
    <p>Este proyecto fue desarrollado para &copy;DaCodes</p>
    <p>
      Las imagenes y logotipos son pertenecientes a sus respectivos equipos y
      son usados sin fines lucrativos
    </p>
  </footer>
);

export default injectIntl(FooterIntl);

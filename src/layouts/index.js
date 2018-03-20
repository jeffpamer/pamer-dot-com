import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="¯\_(ツ)_/¯">
      <meta name="google-site-verification" content="U-MmlJpiJtURQs_IRhxEvWcrZRTYrMLrR-95dy3PRKM" />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

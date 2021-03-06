/**
 * @module components/theme/Unauthorized/Unauthorized
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */
const Unauthorized = ({ pathname }) => (
  <Container className="view-wrapper">
    <h1>
      <FormattedMessage id="Unauthorized" defaultMessage="Unauthorized" />
    </h1>
    <p className="description">
      <FormattedMessage
        id="You are trying to access a protected resource, please {login} first."
        defaultMessage="You are trying to access a protected resource, please {login} first."
        values={{
          login: (
            <Link to={`${pathname}/login`}>
              <FormattedMessage id="log in" defaultMessage="log in" />
            </Link>
          ),
        }}
      />
    </p>
    <p>
      <FormattedMessage
        id="If you are certain you have the correct web address but are encountering an error, please contact the {site_admin}."
        defaultMessage="If you are certain you have the correct web address but are encountering an error, please contact the {site_admin}."
        values={{
          site_admin: (
            <Link to="/contact-form">
              <FormattedMessage
                id="Site Administration"
                defaultMessage="Site Administration"
              />
            </Link>
          ),
        }}
      />
    </p>
    <p>
      <FormattedMessage id="Thank you." defaultMessage="Thank you." />
    </p>
  </Container>
);

export default Unauthorized;

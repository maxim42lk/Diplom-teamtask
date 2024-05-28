import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LinkifyReact from 'linkify-react';

import history from '../history';

const Linkify = React.memo(({ children, linkStopPropagation, ...props }) => {
  const handleLinkClick = useCallback(
    (event) => {
      if (linkStopPropagation) {
        event.stopPropagation();
      }

      if (!event.target.getAttribute('target')) {
        event.preventDefault();
        history.push(event.target.href);
      }
    },
    [linkStopPropagation],
  );

  const linkRenderer = useCallback(
    ({ attributes: { href, ...linkProps }, content }) => {
      let url;
      try {
        url = new URL(href, window.location);
      } catch (error) {} 

      const isSameSite = !!url && url.origin === window.location.origin;

      return (
        <a
          {...linkProps} 
          href={href}
          target={isSameSite ? undefined : '_blank'}
          rel={isSameSite ? undefined : 'noreferrer'}
          onClick={handleLinkClick}
        >
          {isSameSite ? url.pathname : content}
        </a>
      );
    },
    [handleLinkClick],
  );

  return (
    <LinkifyReact
      {...props} 
      options={{
        defaultProtocol: 'https',
        render: linkRenderer,
      }}
    >
      {children}
    </LinkifyReact>
  );
});

Linkify.propTypes = {
  children: PropTypes.string.isRequired,
  linkStopPropagation: PropTypes.bool,
};

Linkify.defaultProps = {
  linkStopPropagation: false,
};

export default Linkify;

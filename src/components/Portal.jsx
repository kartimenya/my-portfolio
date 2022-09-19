import { useEffect } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;

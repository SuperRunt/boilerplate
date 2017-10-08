import React from 'react';
import { render } from 'react-dom';
import DevTools from './DevTools';

export default function showDevTools(store){
  const isServer = typeof window === 'undefined';

  if(isServer){
    return false;
  }
  
  const windowFeatures = `menubar=no,location=no,
  resizable=yes,scrollbars=no,status=no`;

  const popup = window.open(null, 'Redux DevTools', windowFeatures);

  // Reload in case it already exist
  popup.location.reload();

  setTimeout(() => {
    popup.document.write('<div id="react-devtools-root"></div>');
    render(
      <DevTools store={store} width={'400px'}/>,
      popup.document.getElementById('react-devtools-root')
    );
  }, 16);
}

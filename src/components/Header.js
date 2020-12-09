import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavLink to="/" exact activeClassName="header__logo_active">
        <svg className="header__logo" id="a42862be-e57e-4fd6-97d7-53271f8fddfd" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.16 49.53"><path className="f3f8a0f0-49f1-4c7c-9383-30de61544266" d="M14,2.43V48.05H3.12a1.74,1.74,0,0,1-1.28-.45,1.75,1.75,0,0,1-.45-1.29,1.78,1.78,0,0,1,.93-1.8l.88-.45a.93.93,0,0,0,.27-.39A3.93,3.93,0,0,0,3.75,42V8.51a3.93,3.93,0,0,0-.28-1.7.93.93,0,0,0-.27-.39L2.32,6a1.78,1.78,0,0,1-.93-1.8,1.75,1.75,0,0,1,.45-1.29,1.74,1.74,0,0,1,1.28-.45H14Zm1.94,24.33V22.88a6.57,6.57,0,0,0,2-2,8.53,8.53,0,0,0,.95-2.94,5,5,0,0,1,.48-1.75,1,1,0,0,1,.86-.49,1,1,0,0,1,1,.84,7.18,7.18,0,0,1,.16,2V31.21a6.66,6.66,0,0,1-.24,2.17.89.89,0,0,1-.89.6,1,1,0,0,1-.83-.47,4.34,4.34,0,0,1-.48-1.57,10.68,10.68,0,0,0-1.12-3.54A3.53,3.53,0,0,0,15.93,26.76ZM16,2.43h9.3V14.26a3,3,0,0,1-.28,1.5.92.92,0,0,1-.87.47.87.87,0,0,1-.74-.3A3.41,3.41,0,0,1,23,14.7a14,14,0,0,0-2.57-5.92A6.84,6.84,0,0,0,16,6.34Zm0,45.62V44.44a7.88,7.88,0,0,0,2.48-.94,8,8,0,0,0,2-1.83,11.82,11.82,0,0,0,1.58-2.56,21.86,21.86,0,0,0,1.12-3.49,4.42,4.42,0,0,1,.53-1.46.89.89,0,0,1,.76-.38.91.91,0,0,1,.9.55,5.08,5.08,0,0,1,.25,1.92v11.8Z" transform="translate(-0.39 -0.42)"/><path className="f3f8a0f0-49f1-4c7c-9383-30de61544266" d="M46.38,36.35l-2.19,11.7H38.12L29.91,8.11a5.23,5.23,0,0,0-.35-1.22,1.52,1.52,0,0,0-.5-.55,2.81,2.81,0,0,1-1-.8,2,2,0,0,1-.23-1.1,2,2,0,0,1,.62-1.58,2.35,2.35,0,0,1,1.59-.43H40.34a7.79,7.79,0,0,1,1.32.07,1.19,1.19,0,0,1,.59.26,1.72,1.72,0,0,1,.39.67,2.37,2.37,0,0,1,.17.84A2,2,0,0,1,42,6a2.46,2.46,0,0,0-.82.88A3,3,0,0,0,41,8.21a5.22,5.22,0,0,0,.07.94Zm.88-4.78L46,25.29l2.65-14.07c.17-.89.26-1.44.28-1.64a4.59,4.59,0,0,0-.24-1.64,2.31,2.31,0,0,0-1.15-1.53L46.82,6a1.71,1.71,0,0,1-.9-1.71,1.84,1.84,0,0,1,.51-1.39,2,2,0,0,1,1.4-.48h5.66a2.16,2.16,0,0,1,1.38.3,1.83,1.83,0,0,1,.55,1.44,2.31,2.31,0,0,1-.17,1,1.66,1.66,0,0,1-.63.67l-1.18.8a4.91,4.91,0,0,0-1.42,2A15.35,15.35,0,0,0,51,12Z" transform="translate(-0.39 -0.42)"/><path className="f3f8a0f0-49f1-4c7c-9383-30de61544266" d="M69.66,1.53V5.24c-1.35.47-2,2-2,4.68V41A8.7,8.7,0,0,0,68,43.81a2.78,2.78,0,0,0,1.26,1.37V49a5.08,5.08,0,0,1-1.34-.16,10.67,10.67,0,0,1-1.63-.67,13.12,13.12,0,0,1-4.39-3.68,21.56,21.56,0,0,1-3.23-5.92,37.35,37.35,0,0,1-2-12.73,41.62,41.62,0,0,1,1.76-12.63,20.19,20.19,0,0,1,5-8.66,11.72,11.72,0,0,1,4.06-2.64A6.13,6.13,0,0,1,69.66,1.53ZM82,42.47a16.21,16.21,0,0,1-2.46,2.72,17.75,17.75,0,0,1-2.89,2.19,12.68,12.68,0,0,1-2.76,1.14,9.8,9.8,0,0,1-2.66.43V45.18a2.2,2.2,0,0,0,1.56-1.51,7.33,7.33,0,0,0,.4-2.64V31.27a3.76,3.76,0,0,0-.35-1.87A1,1,0,0,0,72.5,29c-.11-.05-.46-.18-1.06-.38a1.76,1.76,0,0,1-1.11-1.87,1.7,1.7,0,0,1,.52-1.34,2.22,2.22,0,0,1,1.53-.47h9.21a2,2,0,0,1,1.46.42,2,2,0,0,1,.43,1.45,2.32,2.32,0,0,1-.81,1.94,2.16,2.16,0,0,0-.58.87A6.73,6.73,0,0,0,82,31.07ZM71.55,5.17V1.56a15.46,15.46,0,0,1,6.18,2A2.33,2.33,0,0,0,78.84,4a.67.67,0,0,0,.57-.25,12.16,12.16,0,0,0,.79-1.42c.28-.55.63-.83,1-.83a.93.93,0,0,1,.91.52,3.94,3.94,0,0,1,.27,1.72v13c0,1.69-.43,2.54-1.29,2.54a1.06,1.06,0,0,1-1-.5,6.45,6.45,0,0,1-.59-2,28.43,28.43,0,0,0-1.25-4.36A24.19,24.19,0,0,0,76.6,8.55a6.91,6.91,0,0,0-2.12-2.46A6,6,0,0,0,71.55,5.17Z" transform="translate(-0.39 -0.42)"/><path className="f3f8a0f0-49f1-4c7c-9383-30de61544266" d="M99.54,2.43V48.05H88.67a1.57,1.57,0,0,1-1.73-1.74,1.79,1.79,0,0,1,.92-1.8l.89-.45a1.15,1.15,0,0,0,.27-.39,4,4,0,0,0,.27-1.7V8.51A4,4,0,0,0,89,6.81a1.15,1.15,0,0,0-.27-.39L87.86,6a1.79,1.79,0,0,1-.92-1.8,1.75,1.75,0,0,1,.45-1.29,1.74,1.74,0,0,1,1.28-.45H99.54Zm1.93,24.33V22.88a6.5,6.5,0,0,0,2-2,8.54,8.54,0,0,0,.94-2.94,5.13,5.13,0,0,1,.49-1.75,1,1,0,0,1,.85-.49,1,1,0,0,1,1,.84,7.18,7.18,0,0,1,.16,2V31.21a6.66,6.66,0,0,1-.24,2.17.89.89,0,0,1-.89.6.94.94,0,0,1-.83-.47,4.52,4.52,0,0,1-.49-1.57,10.45,10.45,0,0,0-1.12-3.54A3.49,3.49,0,0,0,101.47,26.76Zm.12-24.33h9.3V14.26a3.11,3.11,0,0,1-.28,1.5.93.93,0,0,1-.88.47.86.86,0,0,1-.73-.3,3.41,3.41,0,0,1-.44-1.23A14,14,0,0,0,106,8.78a6.82,6.82,0,0,0-4.39-2.44Zm0,45.62V44.44a7.79,7.79,0,0,0,2.48-.94,8,8,0,0,0,2-1.83,12.23,12.23,0,0,0,1.58-2.56,21,21,0,0,0,1.11-3.49,4.66,4.66,0,0,1,.53-1.46,1,1,0,0,1,1.67.17,5.08,5.08,0,0,1,.25,1.92v11.8Z" transform="translate(-0.39 -0.42)"/><path className="f3f8a0f0-49f1-4c7c-9383-30de61544266" d="M118.06,14.16,120.51,20V38a11.51,11.51,0,0,0,.54,3.84,5.51,5.51,0,0,0,1.72,2.47l.69.57a1.87,1.87,0,0,1,.6,1.51,1.84,1.84,0,0,1-.44,1.27,2,2,0,0,1-1.52.43h-5.33q-2.1,0-2.1-1.74a1.74,1.74,0,0,1,.22-1,5,5,0,0,1,1-1q2.2-1.77,2.21-6.45Zm9.67-11.73L140,33.31V48.05h-6.3L118,9a11.88,11.88,0,0,0-.83-1.77,2,2,0,0,0-.83-.74L115.5,6a1.21,1.21,0,0,1-.55-.6,2.19,2.19,0,0,1-.21-1A2.59,2.59,0,0,1,115,3.35a1.45,1.45,0,0,1,.55-.69,5.66,5.66,0,0,1,2.12-.23ZM140,28l-2.44-6V12.72A12.51,12.51,0,0,0,137,8.43a5.73,5.73,0,0,0-2-2.56,1.8,1.8,0,0,1-.67-.72,2.14,2.14,0,0,1-.19-1,1.85,1.85,0,0,1,.41-1.32,1.74,1.74,0,0,1,1.3-.42h5.77a1.79,1.79,0,0,1,1.54.53,2.11,2.11,0,0,1,.4,1.27,2.12,2.12,0,0,1-.22,1.06,4.5,4.5,0,0,1-1.05,1A5.48,5.48,0,0,0,140.44,9a12.69,12.69,0,0,0-.44,3.71Z" transform="translate(-0.39 -0.42)"/></svg>
      </NavLink>
    </header>
  );
}

export default Header; 
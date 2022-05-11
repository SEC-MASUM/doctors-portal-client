import React from 'react';

const PrimaryButton = ({children}) => {
    return (
      <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">
        {children}
      </button>
    );
};

export default PrimaryButton;
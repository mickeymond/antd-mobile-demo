import React from 'react';

type InputFieldWrapperProps = {
  label: string;
}

const InputFieldWrapper: React.FunctionComponent<InputFieldWrapperProps> = ({ children, label }) => {
  return (
    <React.Fragment>
      <span style={{ textTransform: 'uppercase' }}>{label}</span>
      <div style={{ border: '2px solid #E4F3FF', borderRadius: '4px' }}>
        {children}
      </div>
    </React.Fragment>
  );
}

export default InputFieldWrapper;
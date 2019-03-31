import React, { useState } from 'react';

const TestHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="test-hook">
      <button
        type="button"
        onClick={toggleAccordion}
      >
        {isOpen ? 'close' : 'Open'}
      </button>
      <p>{isOpen}</p>
      <div className="test-hook__draw">
        <p>this is the draw</p>
        <p>this is the draw</p>
        <p>this is the draw</p>
      </div>
    </div>
  );
};

export default TestHook;

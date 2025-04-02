import React, { useEffect, useRef } from 'react';
import './ReplyOptionsOverlay.css';

const ReplyOptionsOverlay = ({ replies, onSelect, onCancel }) => {
  const panelRef = useRef(null);
  const optionsContainerRef = useRef(null);
  
  useEffect(() => {
    const positionOverlay = () => {
      const modal = document.querySelector("div[role='dialog']");
      if (modal && panelRef.current) {
        // Get modal position and dimensions
        const modalRect = modal.getBoundingClientRect();
        
        // Calculate right position (we want it to the right of the modal)
        const rightPosition = window.innerWidth - (modalRect.left + modalRect.width + 20);
        
        // Position the panel to the right of the modal
        panelRef.current.style.position = 'fixed';
        panelRef.current.style.top = '120px'; // Position below the top of modal
        panelRef.current.style.right = `${rightPosition}px`; // Position to the right of the modal
        panelRef.current.style.zIndex = '10001'; // Higher than the modal backdrop
      }
    };
    
    positionOverlay();
    
    // Reposition on resize
    window.addEventListener('resize', positionOverlay);
    return () => window.removeEventListener('resize', positionOverlay);
  }, [replies.length]);
  
  return (
    <div className="overlay-container">
      <div className="overlay-panel" ref={panelRef}>
        <div className="overlay-header">Choose Your Reply</div>
        <div className="replies-box">
          <div className="options-container" ref={optionsContainerRef}>
            {replies.map((reply, index) => (
              <button 
                key={index}
                className="reply-option-button"
                onClick={() => onSelect(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
        <button className="cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ReplyOptionsOverlay;
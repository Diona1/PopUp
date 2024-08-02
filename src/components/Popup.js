import React, { useState } from "react";
import "./Popup.css";

function Popup(props) {
  const [fontColor, setFontColor] = useState('#444444');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [buttonColor, setButtonColor] = useState('#2072EF');
  const [buttonBorderColor, setButtonBorderColor] = useState('#2072EF');
  const [buttonMouseoverColor, setButtonMouseoverColor] = useState('#0053D1');

  const handleSave = () => {
    console.log({
      fontColor,
      backgroundColor,
      buttonColor,
      buttonBorderColor,
      buttonMouseoverColor,
    });
    props.setTrigger(false); 
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>Change Theme</button>
        <div className="popup-content">
          <h2 className="popup-title">Theme Color</h2>
          <div className="popup-body">
            <div className="color-settings">
              <div className="color-setting">
                <label htmlFor="font-color">Font Color:</label>
                <input
                  type="color"
                  id="font-color"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                />
                <span>{fontColor}</span>
              </div>
              <div className="color-setting">
                <label htmlFor="background-color">Background Color:</label>
                <input
                  type="color"
                  id="background-color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
                <span>{backgroundColor}</span>
              </div>
              <div className="color-setting">
                <label htmlFor="button-color">Button Color:</label>
                <input
                  type="color"
                  id="button-color"
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                />
                <span>{buttonColor}</span>
              </div>
              <div className="color-setting">
                <label htmlFor="button-border-color">Button Border Color:</label>
                <input
                  type="color"
                  id="button-border-color"
                  value={buttonBorderColor}
                  onChange={(e) => setButtonBorderColor(e.target.value)}
                />
                <span>{buttonBorderColor}</span>
              </div>
              <div className="color-setting">
                <label htmlFor="button-mouseover-color">Button Mouseover Color:</label>
                <input
                  type="color"
                  id="button-mouseover-color"
                  value={buttonMouseoverColor}
                  onChange={(e) => setButtonMouseoverColor(e.target.value)}
                />
                <span>{buttonMouseoverColor}</span>
              </div>
            </div>
            <div className="popup-actions">
              <button type="button" className="cancel-button" onClick={() => props.setTrigger(false)}>Cancel</button>
              <button type="button" className="save-button" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;

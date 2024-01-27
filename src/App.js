import React, { useState } from "react";
import "./style/app.css";
import sound from "./soundeffect/sound.mp3";
const App = () => {
  const [runSound, setRunSound] = useState(false);
  const [code, setCode] = useState("");
  document.onkeydown = (e) => {
    // Key
    e.preventDefault();
    setCode(e.code);
    // SoundEffect
    setRunSound(true);
    // Reset
    setTimeout(() => {
      setCode("");
      setRunSound(false);
    }, 100);
  };
  return (
    <div className="keyboard_body">
      <div className="container">
        {runSound && (
          <audio autoPlay>
            <source src={sound} type="audio/mpeg" />
          </audio>
        )}
        <div className="left_part">
          <table>
            <tbody>
              <tr>
                <td className={code === "Escape" ? "active" : ""}>ESC</td>
                <td className="empty"></td>
                <td className={code === "F1" ? "active" : ""}>F1</td>
                <td className={code === "F2" ? "active" : ""}>F2</td>
                <td className={code === "F3" ? "active" : ""}>F3</td>
                <td className={code === "F4" ? "active" : ""}>F4</td>
                <td className="empty"></td>
                <td className={code === "F5" ? "active" : ""}>F5</td>
                <td className={code === "F6" ? "active" : ""}>F6</td>
                <td className={code === "F7" ? "active" : ""}>F7</td>
                <td className={code === "F8" ? "active" : ""}>F8</td>
                <td className="empty"></td>
                <td className={code === "F9" ? "active" : ""}>F9</td>
                <td className={code === "F10" ? "active" : ""}>F10</td>
                <td className={code === "F11" ? "active" : ""}>F11</td>
                <td className={code === "F12" ? "active" : ""}>F12</td>
              </tr>
              <tr>
                <td className={code === "Backquote" ? "active" : ""}>~</td>
                <td className={code === "Digit1" ? "active" : ""}>1</td>
                <td className={code === "Digit2" ? "active" : ""}>2</td>
                <td className={code === "Digit3" ? "active" : ""}>3</td>
                <td className={code === "Digit4" ? "active" : ""}>4</td>
                <td className={code === "Digit5" ? "active" : ""}>5</td>
                <td className={code === "Digit6" ? "active" : ""}>6</td>
                <td className={code === "Digit7" ? "active" : ""}>7</td>
                <td className={code === "Digit8" ? "active" : ""}>8</td>
                <td className={code === "Digit9" ? "active" : ""}>9</td>
                <td className={code === "Digit0" ? "active" : ""}>0</td>
                <td className={code === "Minus" ? "active" : ""}>-</td>
                <td className={code === "Equal" ? "active" : ""}>+</td>
                <td
                  colSpan={3}
                  className={code === "Backspace" ? "active" : ""}
                >
                  Back
                </td>
              </tr>
              <tr>
                <td colSpan={2} className={code === "Tab" ? "active" : ""}>
                  TAB
                </td>
                <td className={code === "KeyQ" ? "active" : ""}>Q</td>
                <td className={code === "KeyW" ? "active" : ""}>W</td>
                <td className={code === "KeyE" ? "active" : ""}>E</td>
                <td className={code === "KeyR" ? "active" : ""}>R</td>
                <td className={code === "KeyT" ? "active" : ""}>T</td>
                <td className={code === "KeyY" ? "active" : ""}>Y</td>
                <td className={code === "KeyU" ? "active" : ""}>U</td>
                <td className={code === "KeyI" ? "active" : ""}>I</td>
                <td className={code === "KeyO" ? "active" : ""}>O</td>
                <td className={code === "KeyP" ? "active" : ""}>P</td>
                <td className={code === "BracketLeft" ? "active" : ""}>[</td>
                <td className={code === "BracketRight" ? "active" : ""}>]</td>
                <td
                  colSpan={2}
                  className={code === "Backslash" ? "active" : ""}
                >
                  |
                </td>
              </tr>
              <tr>
                <td colSpan={2} className={code === "KeyQ" ? "active" : ""}>
                  CAPSLK
                </td>
                <td className={code === "KeyA" ? "active" : ""}>A</td>
                <td className={code === "KeyS" ? "active" : ""}>S</td>
                <td className={code === "KeyD" ? "active" : ""}>D</td>
                <td className={code === "KeyF" ? "active" : ""}>F</td>
                <td className={code === "KeyG" ? "active" : ""}>G</td>
                <td className={code === "KeyH" ? "active" : ""}>H</td>
                <td className={code === "KeyJ" ? "active" : ""}>J</td>
                <td className={code === "KeyK" ? "active" : ""}>K</td>
                <td className={code === "KeyL" ? "active" : ""}>L</td>
                <td className={code === "Semicolon" ? "active" : ""}>;</td>
                <td className={code === "Quote" ? "active" : ""}>'</td>
                <td colSpan={4} className={code === "Enter" ? "active" : ""}>
                  ENTER
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className={code === "ShiftLeft" ? "active" : ""}
                >
                  SHIFT
                </td>
                <td className={code === "KeyZ" ? "active" : ""}>Z</td>
                <td className={code === "KeyX" ? "active" : ""}>X</td>
                <td className={code === "KeyC" ? "active" : ""}>C</td>
                <td className={code === "KeyV" ? "active" : ""}>V</td>
                <td className={code === "KeyB" ? "active" : ""}>B</td>
                <td className={code === "KeyN" ? "active" : ""}>N</td>
                <td className={code === "KeyM" ? "active" : ""}>M</td>
                <td className={code === "Comma" ? "active" : ""}>&#x276E;</td>
                <td className={code === "Period" ? "active" : ""}>&#x276F;</td>
                <td className={code === "Slash" ? "active" : ""}>/</td>
                <td
                  colSpan={3}
                  className={code === "ShiftRight" ? "active" : ""}
                >
                  SHIFT
                </td>
              </tr>
              <tr>
                <td className={code === "ControlLeft" ? "active" : ""}>CTRL</td>
                <td className={code === "MetaLeft" ? "active" : ""}>
                  <i className="fa-brands fa-windows"></i>
                </td>
                <td className={code === "AltLeft" ? "active" : ""}>ALT</td>
                <td colSpan={10} className={code === "Space" ? "active" : ""}>
                  SPACE
                </td>
                <td className={code === "AltRight" ? "active" : ""}>ALT</td>
                <td className={code === "ContextMenu" ? "active" : ""}>
                  <i className="fa-solid fa-table-list"></i>
                </td>
                <td className={code === "ControlRight" ? "active" : ""}>
                  CTRL
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="center_part">
          <table>
            <tbody>
              <tr>
                <td className={code === "LaunchApp2" ? "active" : ""}>
                  <i className="fa-solid fa-calculator"></i>
                </td>
                <td className={code === "ScrollLock" ? "active" : ""}>SCRLK</td>
                <td className={code === "Pause" ? "active" : ""}>PAUSE</td>
              </tr>
              <tr>
                <td className={code === "Insert" ? "active" : ""}>INS</td>
                <td className={code === "Home" ? "active" : ""}>HOME</td>
                <td className={code === "PageUp" ? "active" : ""}>PGUP</td>
              </tr>
              <tr>
                <td className={code === "Delete" ? "active" : ""}>DEL</td>
                <td className={code === "End" ? "active" : ""}>END</td>
                <td className={code === "PageDown" ? "active" : ""}>PGDN</td>
              </tr>
              <tr>
                <td colSpan={3} className="redragon">
                  REDRAGON
                </td>
              </tr>
              <tr>
                <td className="empty"></td>
                <td className={code === "ArrowUp" ? "active" : ""}>&#x2191;</td>
                <td className="empty"></td>
              </tr>
              <tr>
                <td className={code === "ArrowLeft" ? "active" : ""}>
                  &#x2190;
                </td>
                <td className={code === "ArrowDown" ? "active" : ""}>
                  &#x2193;
                </td>
                <td className={code === "ArrowRight" ? "active" : ""}>
                  &#x2192;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right_part">
          <table>
            <tbody>
              <tr>
                <td className={code === "NumLock" ? "active" : ""}>NUM</td>
                <td className={code === "NumpadDivide" ? "active" : ""}>/</td>
                <td className={code === "NumpadMultiply" ? "active" : ""}>*</td>
                <td className={code === "NumpadSubtract" ? "active" : ""}>-</td>
              </tr>
              <tr>
                <td className={code === "Numpad7" ? "active" : ""}>7</td>
                <td className={code === "Numpad8" ? "active" : ""}>8</td>
                <td className={code === "Numpad9" ? "active" : ""}>9</td>
                <td rowSpan={2}>+</td>
              </tr>
              <tr>
                <td className={code === "Numpad4" ? "active" : ""}>4</td>
                <td className={code === "Numpad5" ? "active" : ""}>5</td>
                <td className={code === "Numpad6" ? "active" : ""}>6</td>
              </tr>
              <tr>
                <td className={code === "Numpad1" ? "active" : ""}>1</td>
                <td className={code === "Numpad2" ? "active" : ""}>2</td>
                <td className={code === "Numpad3" ? "active" : ""}>3</td>
                <td
                  rowSpan={2}
                  className={code === "NumpadEnter" ? "active" : ""}
                >
                  ENTER
                </td>
              </tr>
              <tr>
                <td colSpan={2} className={code === "Numpad0" ? "active" : ""}>
                  0
                </td>
                <td className={code === "NumpadDecimal" ? "active" : ""}>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;

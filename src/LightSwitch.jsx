import React, { useContext, useEffect, useReducer, useState } from "react";
import { ThemeContext } from "./CartBodyArea";

const Light = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // console.log(theme); // deBug確認Provider有連動
  // const [lighting, setLight] = useState(false);
  // if (lighting) {
  //   setTheme("bulb-light");
  //   setLight(false);
  // } else {
  //   setTheme("bulb-dark");
  //   setLight(true);
  // }

  const initailState = { isOn: false };

  const lightReducer = (state, action) => {
    switch (action.type) {
      case "Toggle":
        return { isOn: !state.isOn };
      case "Turn_On":
        return { isOn: true };
      case "Turn_Off":
        return { isOn: false };
      default:
        throw new Error();
    }
  };
  function LightSwith() {
    const [lightState, dispatch] = useReducer(lightReducer, initailState);
    // 當燈泡開啟 body的主題要變換
    useEffect(() => {
      if (lightState.isOn) {
        setTheme("bulb-light");
      } else {
        setTheme("bulb-dark");
      }
    }, [theme]);
    return (
      <div className="bulb">
        <h1 className="text-xl">Light Switch</h1>
        <img
          src={
            lightState.isOn
              ? "/public/cart/lightbulb-light-solid.svg"
              : "/public/cart/lightbulb-dark-solid.svg"
          }
          alt="燈泡區域"
        />

        <button
          type="button"
          style={{ border: "1px gray solid", borderRadius: "10px" }}
          onClick={() => {
            dispatch({ type: "Toggle" });
          }}
        >
          Toggle
        </button>
        <button
          type="button"
          style={{ border: "1px gray solid", borderRadius: "10px" }}
          onClick={() => {
            dispatch({ type: "Turn_On" });
          }}
        >
          Turn On
        </button>
        <button
          type="button"
          style={{ border: "1px gray solid", borderRadius: "10px" }}
          onClick={() => {
            dispatch({ type: "Turn_Off" });
          }}
        >
          Turn Off
        </button>
      </div>
    );
  }
  return (
    <div className="light-area">
      <LightSwith />
    </div>
  );
};

export default Light;

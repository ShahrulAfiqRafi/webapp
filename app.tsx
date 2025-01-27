import Spline from '@splinetool/react-spline';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { Component, useState, useEffect } from 'react';

export default function App() {
  const [state, setState] = useState({isPaneOpen: false});
  console.log('Unclicked!');

  function onSplineMouseDown(e) {
    if (e.target.name === 'Station1') {
      console.log('I have been clicked!');
      setState({ isPaneOpen: true });
    }
    else{

    }
  }

  return (
    <div>
      <button onClick={() => setState({ isPaneOpen: true })}>
        Click me to open right pane!
      </button>

      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
      </SlidingPane>

      <Spline
        scene="https://prod.spline.design/j8bcswslSH6eBVvQ/scene.splinecode"
        onSplineMouseDown={onSplineMouseDown}
      />
    </div>
  );
}

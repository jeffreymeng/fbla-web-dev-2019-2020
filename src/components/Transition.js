import React, { useEffect, useRef, useState } from "react"
import { CSSTransition, Transition as ReactTransition } from 'react-transition-group'

// Forces a reflow of the DOM
// see https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215
// see https://stackoverflow.com/questions/21664940/force-browser-to-trigger-reflow-while-changing-css
const forceReflow = node => console.log("Force reflow", node.offsetHeight);

const Transition = ({ show, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, children }) => {
  const enterClasses = enter?.split(' ') || []
  const enterFromClasses = enterFrom?.split(' ') || []
  const enterToClasses = enterTo?.split(' ') || []
  const leaveClasses = leave?.split(' ') || []
  const leaveFromClasses = leaveFrom?.split(' ') || []
  const leaveToClasses = leaveTo?.split(' ') || []

  const [state, setState] = useState("hidden");
  const ref = useRef();
  const transitionEndCallbackRef = useRef();

  useEffect(() => {
    if (show) setState("enter");
    else if (state !== "hidden") setState("exit");
  }, [show]);

  useEffect(() => {
    if (ref.current == null) return;

    // console.log(state);

    if (state === "enter") {
      ref.current.classList.add(...enterClasses, ...enterFromClasses);
      setState("entering");
    } else if (state === "entering") {
      forceReflow(ref.current);
      ref.current.classList.remove(...enterFromClasses)
      ref.current.classList.add(...enterToClasses)
      transitionEndCallbackRef.current = () => setState("entered");
    } else if (state === "entered") {
      ref.current.classList.remove(...enterToClasses, ...enterClasses)
    } else if (state === "exit") {
      ref.current.classList.add(...leaveClasses, ...leaveFromClasses)
      setState("exiting");
    } else if (state === "exiting") {
      forceReflow(ref.current);
      ref.current.classList.remove(...leaveFromClasses)
      ref.current.classList.add(...leaveToClasses)
      transitionEndCallbackRef.current = () => setState("exited");
    } else if (state === "exited") {
      ref.current.classList.remove(...leaveToClasses, ...leaveClasses);
      setState("hidden");
    }
  }, [state]);

  useEffect(() => {
    if (!ref.current) return;

    // console.log("Adding transition listener");

    ref.current.addEventListener('transitionend', e => {
      if (e.target === ref.current) {
        transitionEndCallbackRef.current();
      }
    }, false);
  }, [ref.current]);

  // console.log("RENDER");

  if (state === "hidden") return null;

  return React.cloneElement(
    children,
    { ref }
  );
}

export default Transition;
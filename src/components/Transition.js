import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames";

// Forces a reflow of the DOM
// see https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215
// see https://stackoverflow.com/questions/21664940/force-browser-to-trigger-reflow-while-changing-css
const forceReflow = node => node.offsetWidth;

const Transition = ({ show, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, children, className }) => {
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
      forceReflow(ref.current);
      setState("entering");
    } else if (state === "entering") {
      transitionEndCallbackRef.current = () => setState("entered");
    } else if (state === "entered") {
    } else if (state === "exit") {
      forceReflow(ref.current);
      setState("exiting");
    } else if (state === "exiting") {
      transitionEndCallbackRef.current = () => setState("exited");
    } else if (state === "exited") {
      setState("hidden");
    }
  }, [state]);

  useEffect(() => {
    if (!ref.current) return;

    // console.log("Adding transition listener");

    ref.current.addEventListener('transitionend', e => {
      if (e.target === ref.current) {
        // console.log(e);
        if (transitionEndCallbackRef.current) transitionEndCallbackRef.current();
      }
    }, false);
  }, [ref.current]);

  // console.log("RENDER", state);

  if (state === "hidden") return null;

  const computedClassName = classNames(
    className,
    {
      [enter]: state === "enter" || state === "entering",
      [enterFrom]: state === "enter",
      [enterTo]: state === "entering",
    },
    {
      [leave]: state === "exit" || state === "exiting",
      [leaveFrom]: state === "exit",
      [leaveTo]: state === "exiting"
    }
  );

  return (
    <div className={computedClassName} ref={ref}>
      {children}
    </div>
  );
}

export default Transition;
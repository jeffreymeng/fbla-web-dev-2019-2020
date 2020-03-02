import React, { useCallback, useEffect, useRef } from "react"

const ClickAwayListener = ({ children, onClickAway, ...props }) => {
  const ref = useRef();

  const onClick = useCallback(e => {
    if (ref.current.contains(e.target)) {
      return;
    }
    onClickAway();
  }, [ref]);

  useEffect(() => {
    if (document != null) {
      document.addEventListener("mousedown", onClick, false);
    }
    return () => document.removeEventListener("mousedown", onClick, false);
  }, []);


  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
}

export default ClickAwayListener;
import React from "react"
import { CSSTransition, Transition as ReactTransition } from 'react-transition-group'

function Transition({ show, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, children }) {
  const enterClasses = enter?.split(' ') || []
  const enterFromClasses = enterFrom?.split(' ') || []
  const enterToClasses = enterTo?.split(' ') || []
  const leaveClasses = leave?.split(' ') || []
  const leaveFromClasses = leaveFrom?.split(' ') || []
  const leaveToClasses = leaveTo?.split(' ') || []

  return (
    <ReactTransition
      unmountOnExit
      in={show}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false)
      }}
      onEnter={(node) => {
        node.classList.add(...enterClasses, ...enterFromClasses)
        console.log("ENTER", new Date(), node.classList);
      }}
      onEntering={(node) => {
        node.classList.remove(...enterFromClasses)
        node.classList.add(...enterToClasses)
        console.log("ENTERING", new Date(), node.classList);
      }}
      onEntered={(node) => {
        node.classList.remove(...enterToClasses, ...enterClasses)
        console.log("ENTERED", new Date(), node.classList);
      }}
      onExit={(node) => {
        node.classList.add(...leaveClasses, ...leaveFromClasses)
        console.log("EXIT", new Date(), node.classList);
      }}
      onExiting={(node) => {
        node.classList.remove(...leaveFromClasses)
        node.classList.add(...leaveToClasses)
        console.log("EXITING", new Date(), node.classList);
      }}
      onExited={(node) => {
        node.classList.remove(...leaveToClasses, ...leaveClasses)
        console.log("EXITED", new Date(), node.classList);
      }}
    >
      {state => children}
    </ReactTransition>
  )
}

export default Transition;
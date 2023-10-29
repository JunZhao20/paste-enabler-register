// Once the paste event is triggered it will stop any further propagation of the event
const pasteEnabler = function(e) {
  e.stopImmediatePropagation()
}
// Detects paste event to trigger pasteEnabler which will allow you to paste
document.addEventListener(
  //waiting for paste event
  "paste",
  pasteEnabler,
  // captures paste event at the start
  true
  );
  

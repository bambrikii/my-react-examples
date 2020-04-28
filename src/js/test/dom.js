// https://medium.com/@Yodairish/write-jest-tests-for-webpack-project-823ccda3156
function fakeDOMLoaded() {
  const fakeEvent = document.createEvent('Event');
  fakeEvent.initEvent('DOMContentLoaded', true, true);
  window.document.dispatchEvent(fakeEvent);
}

export const fakeDiv = function () {
  const fakeElement = document.createElement("div");
  return fakeElement
};
export default fakeDOMLoaded;

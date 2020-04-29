import fakeDOMLoaded, {fakeDiv} from "./dom.js";

describe('In first module', () => {
  it('should actually create a Node in createNode', () => {
    const newNode = fakeDiv();
    expect(newNode.nodeType).toBe(document.ELEMENT_NODE);
  })
});

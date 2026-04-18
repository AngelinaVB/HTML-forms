export default function initPopover() {
  const db = new WeakMap();

  const elements = [...document.querySelectorAll('[data-popover-content]')];

  const initElement = (element) => {
    element.addEventListener('click', () => togglePopover(element));
  };

  for (const element of elements) {
    initElement(element);
  }

  const openPopover = (element) => {
    const popover = createPopover(element);

    document.body.append(popover);

    db.set(element, popover);
  };

  const createElement = (tagName, attrs, ...children) => {
    const element = Object.assign(document.createElement(tagName), attrs);
    element.append(...children);
    return element;
  };

  const createPopover = (element) => {
    const title = element.dataset.popoverTitle;
    const content = element.dataset.popoverContent;

    const container = createElement('div', { className: 'popover' }, createElement('div', { className: 'popover__title' }, title), createElement('div', { className: 'popover__content' }, content));

    return container;
  };

  const closePopover = (element) => {
    const popover = db.get(element);
    popover.remove();

    db.delete(element);
  };

  const togglePopover = (element) => {
    if (db.has(element)) {
      closePopover();
      return;
    }
    openPopover();
  };
}

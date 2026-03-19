export class Tooltip {
  constructor(tooltip) {
    this.tooltip = tooltip;
  }

  onButton(e) {
    e.preventDefault();
    const popoverButton = this.tooltip.querySelector('.tooltip');
    if (popoverButton.classList.contains('active')) {
      popoverButton.classList.remove('active');
    } else {
      popoverButton.classList.add('active');
    }
  }

  bind() {
    const button = this.tooltip.querySelector('.btn');
    button.addEventListener('click', (e) => this.onButton(e));
  }
}

import Tooltip from './tooltip';

const popover = document.querySelector('.popover');

const tooltip = new Tooltip(popover);

tooltip.bind();

import { Tooltip } from './tooltip.js';

const popover = document.querySelector('.popover');

const tooltip = new Tooltip(popover);

tooltip.bind();

import formatStylish from './formatters/formatStylish.js';
import formatPlain from './formatters/formatPlain.js';
import formatJson from './formatters/formatJson.js';

export default (format, innerPresentation) => {
  switch (format) {
    case 'json':
      return formatJson(innerPresentation);
    case 'plain':
      return formatPlain(innerPresentation);
    case 'stylish':
      return formatStylish(innerPresentation);
    default:
      return new Error('format not found');
  }
};

const classNames = (...args: Array<string | Record<string, boolean>>): string => args
  .map(arg => (
    typeof arg === 'object'
      ? arg && Object.keys(arg).filter(className => arg[className]).join(' ')
      : arg
  ))
  .filter(className => className)
  .join(' ');

export default classNames;

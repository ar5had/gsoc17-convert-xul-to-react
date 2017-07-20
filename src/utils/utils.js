(function() {
  window.underlineAccessKey = (str, key) => {
    const index = str.indexOf(key);
    if (key.length > 1) {
      return str;
    } else if (index === -1) {
      return `${str}(${key.toUpperCase()})`;
    } else {
      return str.slice(0, index) + "<u>" + key + "</u>" + str.slice(index + 1);
    }
  };
})();

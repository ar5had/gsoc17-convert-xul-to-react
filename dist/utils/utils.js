function underlineAccessKey(str, key) {
  const index = str.indexOf(key);
  if (index < 0 || key.length > 1) {
    return str;
  } else {
    return str.slice(0, index) + "<u>" + key + "</u>" + str.slice(index + 1);
  }
}

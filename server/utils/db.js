const filterUndefinedProperties = unfilteredObject => {
  const filteredObj = Object.keys(unfilteredObject).reduce((obj, key) => {
    return typeof unfilteredObject[key] !== 'undefined' ? Object.assign(obj, {
      [key]: unfilteredObject[key]
    }) : obj;
  }, {});

  return Object.keys(filteredObj).length ? filteredObj : false;
};

module.exports = {
  filterUndefinedProperties
};
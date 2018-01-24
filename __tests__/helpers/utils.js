const pluralize = require('pluralize');

const getFileForReducer = (srcPath, reducers, reducerFiles) => {
  return reducers.map(reducer => {
    return reducerFiles.map(file => {
      return `${srcPath}/${reducer}/${file}.js`;
    });
  });
};

const getFilePath = ({ srcPath, reducerName, single = false, filename }) => {
  const reducer = single ? reducerName : pluralize(reducerName);
  const basePath = `${srcPath}/modules/${reducer}`;
  return `${basePath}/${filename}.js`;
};

module.exports = {
  getFileForReducer,
  getFilePath
};

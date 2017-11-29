const getFileForReducer = (srcPath, reducers, reducerFiles) => {
  return reducers.map(reducer => {
    return reducerFiles.map(file => {
      return `${srcPath}/${reducer}/${file}.js`;
    });
  });
};

module.exports = {
  getFileForReducer
};

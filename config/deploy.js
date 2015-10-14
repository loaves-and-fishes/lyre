module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'lyre',
      key: process.env.PAGEFRONT_KEY
    }
  };
};

// pages.11tydata.js
module.exports = {
  permalink: (data) => {
    return data.page.filePathStem.replace("/pages", "") + "/";
  },
};

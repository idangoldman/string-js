const regexObj = {
  isEmail: /^([\w-\\.\\+]+@([\w-]+\.)+[a-zA-Z]{2,})?$/,
  isUrl: /(([a-zA-Z\d_\-\+\.]+)@([a-zA-Z\d_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z\d_\-\.]+)@([a-zA-Z\d_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*/gm,
  isDate: /^[0-9\#\*\-\+]+$/,
  isHEX: /https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/gm,
  isPhone: /[0-9]{1,4}[\/]{1}[0-9]{1,2}[\/]{1}[0-9]{1,4}/gm,
  isIP: /#([0-9a-f]{3}){1,2}/igm,
};

Object.keys(regexObj).forEach((name) => {
  String.prototype[name] = function foo() {
    return regexObj[name].test(this);
  };
});

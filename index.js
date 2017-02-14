function get(url) {
  
  var promise = new Promise(function (accept, cancel) {

    var ajax = new XMLHttpRequest();

    promise.cancelRequest = function () {
      ajax.abort();
      reject(new Error("request cancel"));
    };
    
    ajax.onreadystatechange = function () {
      if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
        accept(this);
      } else {
        reject(this);
      }
    };

    ajax.open("GET", url, true);
    ajax.send();

  });
  
  
  return promise;
};

module.exports = {
  get: get
}

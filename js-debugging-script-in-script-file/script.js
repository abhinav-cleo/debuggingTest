(function () {
  /**
   * Created by abhinavnathgupta on 03/03/17.
   */
  "use strict";
  document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('anchorID').onclick = function () {
      var a = 12;
      console.log(a);
      alert('Hello');
    }
  });
})();
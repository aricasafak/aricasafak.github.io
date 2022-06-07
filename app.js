"use strict";
let obj = {
   a: 1,
   b: 2,
   c: function() {
      console.log("inner",this);
      let a = () => {
         console.log("level2", this);
      }
      a();
   }
}



obj.c();
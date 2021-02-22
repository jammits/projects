let _ = {
    clamp(cv,lb,ub){
        if(cv >= lb && cv <= ub){
            return cv;
        }

        else if (cv < lb){
            return lb;
        }

        else if (cv > ub){
            return ub;
        }
    },

    "inRange": function (num, sv, end) {
      if (end == undefined){
          end = sv;
          sv = 0;
      }

      if(sv > end){
          let temp = end;
          end = sv;
          sv = temp;
      }

      let isInRange = sv <= num && num < end;

      return isInRange;
    },

    words(str){
        let word = str.split(' ');
        return word;
    },

    pad(str,len){
        if(len < str.length){
            return str;
        }

        let pad_start = Math.floor((len - str.length) / 2);
        let pad_end = len - str.length - pad_start;

        let paddedString = ' '.repeat(pad_start) + str + ' '.repeat(pad_end);

        return paddedString;

    },

    has(obj,key){
        if (obj[key] == undefined){
            return false;
        }

        else{
            return true;
        }
    },

    invert(obj){
        nObj ={};

        for (const prop in obj){
            let originalValue = obj[prop];
            nObj = {originalValue : prop};
        }

        return nObj;
    },

    findKey(obj, pred){
        for (const key in obj){
            value = obj[key];
            predicateReturnValue = pred(value);
            if(predicateReturnValue == true){
                return key;
            }
        }
        return undefined;
    },

    drop(arr,num){
        if (num == undefined){
            num = 1;
        }
        return arr.slice(arr.length - num, arr.length);
    },

    dropWhile(arr,pred){
        const cb = (element, index) => {
             return !pred(element, index, arr);
        }

        let dropNum = arr.findIndex(cb);
        let dropArr = this.drop(arr,dropNum);
        return dropArr;
    },

    chunk(arr,size){
        if (size == undefined){
            size = 1;
        }

        let cArr = [];

        for (let i = 0; i < arr.length; i += size){
            let cArrs = arr.slice(i, i+size);
            cArr.push(cArrs);
        }
        return cArr;



    }

};




// Do not write or modify code below this line.
module.exports = _;





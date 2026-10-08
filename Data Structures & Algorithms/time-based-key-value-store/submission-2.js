class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
             this.keyStore.set(key,[{value, timestamp}]);
        } else {
            this.keyStore.get(key).push({value, timestamp});
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)){
            return "";
        } else {
            let res = '';
            let arr = this.keyStore.get(key);
            let l = 0, r = arr.length - 1;
            while ( l <= r ){
                let m = Math.floor((l+r)/2);
                if (arr[m].timestamp <= timestamp) {
                    res = arr[m].value;
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
            return res;
        }
    }
}

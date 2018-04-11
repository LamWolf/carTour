module.exports = {
    add: () => {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + parseInt(arguments[i]);
        }
        return sum;
    },
    maxLuggage: (cap, adultNo, childNo, childSeat) => {
        const p_no = (function(an, cn, csn) {
            if (cn == csn) {
                return (an + cn * 1.5);
            }
            return (an + csn * 1.5 + cn - csn);

        })(adultNo - 0, childNo - 0, childSeat);
        const rs = Math.floor(cap - 0 - p_no);
        return rs;
    },
    formatMoney: str => {
        str += '';
        return str.split('').reverse().join('')
            .replace(/(\d{3}(?=\d)(?!\d+\.|$))/g, '$1,')
            .split('')
            .reverse()
            .join('');
    },
    getWeek: str => {
        return ('周' + [ '日', '一', '二', '三', '四', '五', '六' ][new Date(str.substr(0, 10)).getDay()]);
    },
    getModel: str => {
        let model = '';
        const arr = str.split(',');
        if (arr[0]) {
            model = model + arr[0];
        }
        if (arr[1]) {
            model = model + ',' + arr[1];
        }
        if (arr[2]) {
            model = model + ',' + arr[2];
        }
        return model;
    },
    carImg: (carType, seatType) => {
        let name = '';
        if (carType == 1) {
            name = 'jincou';
        } else if (carType == 2) {
            name = 'shushi';
        } else if (carType == 3) {
            name = 'haohua';
        } else if (carType == 4) {
            name = 'shehua';
        }
        return name + '' + seatType;
    }
};

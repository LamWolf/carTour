module.exports = {
    sub: data => {
        const len = data.length;
        if (len > 100) {
            return data.substr(0, 50) + '...';
        }
        return data;
    },
    floor: data => {
        return Math.floor(data);
    }
};

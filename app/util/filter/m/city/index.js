module.exports = {
    priceInfo: price => {
        if (!price) {
            return '';
        }
        const infoleft = price.replace(/起\/人/, '<span>起/人');
        const infoRight = infoleft + '</span>';
        return infoRight.replace(/¥/, '<small>¥</small>');
    },
    getImgRule: (w, h) => {
        const imgRule = `x-oss-process=image/resize,m_fill,limit_0,w_${w},h_${h}/format,jpg/interlace,1/quality,q_85`;
        return imgRule;
    },
};

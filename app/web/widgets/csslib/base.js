import React, { StyleSheet, Dimensions } from 'react-native';
const { width, height, scale } = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    html: {
        MsTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        WebkitTapHighlightColor: 'transparent',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        fontFamily: 'PingFangSC-Regular,Noto Sans CJK SC, Source Han Sans CNArial,Helvetica,sans-serif'
    },
    body: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        fontFamily: 'PingFangSC-Regular,Noto Sans CJK SC, Source Han Sans CNArial,Helvetica,sans-serif'
    },
    section: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal',
        display: 'block'
    },
    footer: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal',
        display: 'block'
    },
    nav: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal',
        display: 'block'
    },
    em: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    mark: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal',
        backgroundColor: 'transparent'
    },
    p: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    span: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    ul: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    li: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    ol: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    h1: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    h2: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    h3: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    h4: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal'
    },
    input: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        WebkitTapHighlightColor: 'transparent',
        lineHeight: 'normal'
    },
    textarea: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        listStyle: 'none',
        fontStyle: 'normal',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        WebkitTapHighlightColor: 'transparent',
        overflow: 'auto'
    },
    article: {
        display: 'block'
    },
    aside: {
        display: 'block'
    },
    details: {
        display: 'block'
    },
    figcaption: {
        display: 'block'
    },
    figure: {
        display: 'block',
        marginTop: 1,
        marginRight: 40,
        marginBottom: 1,
        marginLeft: 40
    },
    header: {
        display: 'block'
    },
    hgroup: {
        display: 'block'
    },
    main: {
        display: 'block'
    },
    menu: {
        display: 'block'
    },
    summary: {
        display: 'block'
    },
    audio: {
        display: 'inline-block',
        verticalAlign: 'baseline'
    },
    canvas: {
        display: 'inline-block',
        verticalAlign: 'baseline'
    },
    progress: {
        display: 'inline-block',
        verticalAlign: 'baseline'
    },
    video: {
        display: 'inline-block',
        verticalAlign: 'baseline'
    },
    'audio:not([controls])': {
        display: 'none',
        height: 0
    },
    '[hidden]': {
        display: 'none'
    },
    template: {
        display: 'none'
    },
    img: {
        border: 0
    },
    a: {
        backgroundColor: 'transparent',
        textDecoration: 'none'
    },
    'a:active': {
        outline: 0
    },
    'a:hover': {
        outline: 0
    },
    'abbr[title]': {
        borderBottom: '1px dotted'
    },
    b: {
        fontWeight: 'bold'
    },
    strong: {
        fontWeight: 'bold'
    },
    dfn: {
        fontStyle: 'italic'
    },
    small: {
        fontSize: '80%'
    },
    sub: {
        fontSize: '75%',
        lineHeight: 0,
        position: 'relative',
        verticalAlign: 'baseline',
        bottom: '-0.25em'
    },
    sup: {
        fontSize: '75%',
        lineHeight: 0,
        position: 'relative',
        verticalAlign: 'baseline',
        top: '-0.5em'
    },
    'svg:not(:root)': {
        overflow: 'hidden'
    },
    hr: {
        boxSizing: 'content-box',
        height: 0
    },
    pre: {
        overflow: 'auto',
        fontFamily: 'monospace, monospace',
        fontSize: 1
    },
    code: {
        fontFamily: 'monospace, monospace',
        fontSize: 1
    },
    kbd: {
        fontFamily: 'monospace, monospace',
        fontSize: 1
    },
    samp: {
        fontFamily: 'monospace, monospace',
        fontSize: 1
    },
    button: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        WebkitTapHighlightColor: 'transparent',
        overflow: 'visible',
        textTransform: 'none',
        WebkitAppearance: 'button',
        cursor: 'pointer'
    },
    optgroup: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        WebkitTapHighlightColor: 'transparent',
        fontWeight: 'bold'
    },
    select: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        WebkitTapHighlightColor: 'transparent',
        textTransform: 'none'
    },
    'html input[type="button"]': {
        WebkitAppearance: 'button',
        cursor: 'pointer'
    },
    'input[type="reset"]': {
        WebkitAppearance: 'button',
        cursor: 'pointer'
    },
    'input[type="submit"]': {
        WebkitAppearance: 'button',
        cursor: 'pointer'
    },
    'button[disabled]': {
        cursor: 'default'
    },
    'html input[disabled]': {
        cursor: 'default'
    },
    'button::-moz-focus-inner': {
        border: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    'input::-moz-focus-inner': {
        border: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    'input[type="checkbox"]': {
        boxSizing: 'border-box',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    'input[type="radio"]': {
        boxSizing: 'border-box',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    'input[type="number"]::-webkit-inner-spin-button': {
        height: 'auto'
    },
    'input[type="number"]::-webkit-outer-spin-button': {
        height: 'auto'
    },
    'input[type="search"]': {
        WebkitAppearance: 'textfield',
        boxSizing: 'content-box'
    },
    'input[type="search"]::-webkit-search-cancel-button': {
        WebkitAppearance: 'none'
    },
    'input[type="search"]::-webkit-search-decoration': {
        WebkitAppearance: 'none'
    },
    fieldset: {
        border: '1px solid #c0c0c0',
        marginTop: 0,
        marginRight: 2,
        marginBottom: 0,
        marginLeft: 2,
        paddingTop: '0.35em',
        paddingRight: '0.625em',
        paddingBottom: '0.75em',
        paddingLeft: '0.625em'
    },
    legend: {
        border: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    table: {
        borderCollapse: 'collapse',
        borderSpacing: 0
    },
    td: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    th: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
    '*': {
        boxSizing: 'border-box'
    },
    '*:before': {
        boxSizing: 'border-box'
    },
    '*:after': {
        boxSizing: 'border-box'
    },
    container: {
        maxWidth: 640,
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto'
    }
});

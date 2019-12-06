import React from 'react';
import { createUseStyles } from 'react-jss';
import { mobileBreakpoint } from 'config/constants';

const useStyles = createUseStyles({
    '@global': {
        /* eslint-disable no-multi-str */
        'html, body, div, span, applet, object, iframe,\
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,\
        a, abbr, acronym, address, big, cite, code,\
        del, dfn, em, img, ins, kbd, q, s, samp,\
        small, strike, strong, sub, sup, tt, var,\
        b, u, i, center,\
        dl, dt, dd, ol, ul, li,\
        fieldset, form, label, legend,\
        table, caption, tbody, tfoot, thead, tr, th, td,\
        article, aside, canvas, details, embed,\
        figure, figcaption, footer, header, hgroup,\
        main, menu, nav, output, ruby, section, summary,\
        time, mark, audio, video': {
            margin: 0,
            padding: 0,
            border: 0,
            verticalAlign: 'baseline',
        },
        /* HTML5 display-role reset for older browsers */
        'article, aside, details, figcaption, figure,\
        footer, header, hgroup, main, menu, nav, section': {
            display: 'block',
        },
        /* eslint-enable no-multi-str */

        '*, *::before, *::after': {
            boxSizing: 'border-box',
        },
    },
    container: {
        display: 'block',
        margin: '30px auto',
        width: 'calc(100vw - 40px)',
        [`@media (min-width: ${mobileBreakpoint}px)`]: {
            width: '80vw',
        },
    },
});

export const PageContainer = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};

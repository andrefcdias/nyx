import { style, globalStyle } from '@vanilla-extract/css';

export const headerStyle = style({
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#673AB7',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
    width: '100%',
    zIndex: 50
})
globalStyle(`${headerStyle} nav`, {
    display: 'flex',
    alignItems: 'stretch'
})
globalStyle(`${headerStyle} a`, {
    display: "flex",
    alignItems: "center",
    padding: '0 15px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    textDecoration: 'none',
    color: '#FFF',
    willChange: 'background-color',
})
globalStyle(`${headerStyle} nav a:hover, ${headerStyle} nav a:active`, {
    backgroundColor: 'rgba(0,0,0,0.2)'
})
export const activeStyle = style({})
globalStyle(`${headerStyle} nav a${activeStyle}`, {
    backgroundColor: 'rgba(0,0,0,0.4)'
})

export const titleStyle = style({
    margin: 0,
    padding: '0 15px',
    fontSize: '24px',
    lineHeight: '56px',
    fontWeight: 400,
    color: '#FFF'
})
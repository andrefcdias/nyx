import { style, globalStyle } from '@vanilla-extract/css';

export const headerStyle = style({
    position: 'fixed',
    background: '#717D84',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
    width: '100%',
    zIndex: 50
})

export const titleStyle = style({
    margin: 0,
    padding: '0 15px',
    fontSize: '24px',
    lineHeight: '56px',
    fontWeight: 400,
    color: '#FFF'
})
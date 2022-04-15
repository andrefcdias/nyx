import { style, globalStyle } from '@vanilla-extract/css'

globalStyle('html', {
    background: '#FAFAFA',
    fontFamily: "'Helvetica Neue', arial, sans-serif",
    fontWeight: 400,
    color: '#444',
})

export const mainContainerStyle = style({
    paddingTop: '76px',
    paddingLeft: '20px',
    paddingRight: '20px',
})

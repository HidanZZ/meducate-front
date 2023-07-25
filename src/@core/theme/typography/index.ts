// ** Theme Type Import
import { Theme } from '@mui/material/styles'

const Typography = (theme: Theme) => {
  return {
    fontFamily: "'Plus Jakarta Sans', sans-serif;",
    h1: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: '2.75'
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: '2.25'
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '1.75'
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.3125rem',
      lineHeight: '1.6'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.6'
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.2'
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 400
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334'
    },
    body2: {
      fontSize: '0.75rem',
      letterSpacing: '0rem',
      fontWeight: 400,
      lineHeight: '1'
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 400
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400
    },

    caption: {
      letterSpacing: '0.4px',
      color: theme.palette.text.secondary
    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary
    }
  }
}

export default Typography

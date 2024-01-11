import React, { FC } from 'react'
import {Theme} from '@mui/material'
import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles()((_theme: Theme) =>({
    root:{}
}));
export interface longTermProps {
    text?: string
}

const longTerm: FC<longTermProps> = ( props ) => {
const { classes } = useStyles();

  return (
    <div>
     longTerm
    </div>
  )
}
export default longTerm;
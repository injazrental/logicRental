import React, { FC } from 'react'
import {Theme} from '@mui/material'
import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles()((_theme: Theme) =>({
    root:{}
}));
export interface shortTermProps {
    text?: string
}

const shortTerm: FC<shortTermProps> = ( props ) => {
const { classes } = useStyles();

  return (
    <div>
     shortTerm
    </div>
  )
}
export default shortTerm;
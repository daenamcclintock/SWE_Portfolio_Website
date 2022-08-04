import React from 'react'
import { MobileButtonBack, MobileButtonFront } from './index'

const MobileButton = (props) => (
  <MobileButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <MobileButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</MobileButtonFront>
  </MobileButtonBack>
);

export default MobileButton
import React, { ReactNode } from 'react';
import style from './button.module.scss'

interface ButtonProps {
  children: ReactNode;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
import React, { Component } from 'react';
import './btns.css';

export class Btns extends Component {
  //props - атрибуты, которые есть у тэга в момент создания
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const text = 'Add comment';
    const onClick = this.props.onClick;
    const children = this.props.children;
    // const {clickHandler} = this.props;



    console.log(this.props.className);
    const className = this.props.className + ' btn';

    return (
      //{clickHandler} this.onClick.bind(this)
      <button onClick={onClick} className={className}>
        {/*{text}
          так как есть props, то мы можем вывести соответственно свое название кнопки у каждой
        */
        }
        {/*{this.props.value}
        мы заменили кнопки на 2 обычных тега btn, =>
        */}

        {children}
      </button>
    )
  }
}
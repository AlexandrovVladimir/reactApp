import React, { Component } from 'react';
import './commentForm.css';
import { Btns } from "../btns/btns";

export class CommentForm extends Component {

 submitForm() {
   console.log('form submitted');
 }

  onSubmit(event) {
    event.preventDefault();
  }

 render() {
   return (
     <form action="" className='comment-form' onSubmit={this.onSubmit}>
       <div className="comment-form__row">
         <input type="text" className='comment-form__author' />
       </div>
       <div className="comment-form__row">
         <textarea name="" id="" cols="30" rows="10" className="comment-form__text" />
       </div>
       <div className="comment-form__row comment-form__row_buttons">
         {/*<input type="submit" className='comment-form__submit' value='add'/>*/}
         {/*<Btns*/}
          {/*value='add comment'*/}
          {/*test='test add comment'*/}
         {/*/>*/}
         {/*<Btns*/}
           {/*value='reset form'*/}
           {/*test='test reset form'*/}
         {/*/>
          заменим кнопки, чтоб использовать this.props.children(переписали через другой вид)
         */}

         <Btns type='success' className="btn_success" clickHandler={this.submitForm.bind(this)}>
           <span>icon-</span>
           <span>add</span>
         </Btns>
         <Btns type='danger' className="btn_danger">
           <span>reset</span>
         </Btns>


       </div>
     </form>
   )
 }
}
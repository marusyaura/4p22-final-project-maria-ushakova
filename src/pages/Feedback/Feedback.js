import { useState } from 'react';
import './Feedback.css';

const FeedbackPage = () => {
const [ email, setEmail ] = useState('')
const [ emailDirty, setEmailDirty ] = useState(false)
const [ emailError, setEmailError ] = useState('Email не может быть пустым')

const blurHandler = (event) => {
  switch (event.target.name) {
    case 'email':
      setEmailDirty(true)
      break
  }
}

    return (
        <>
         <form className='formmain'>
        <div className="form__heading">
        <h2>Обратная связь</h2>
      </div>
      <div className="form__input">
        <div className="form-input__email">
          <label className="form-input-email__label" htmlFor="email">* Email</label>
          {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
          <input onBlur={event => blurHandler(event)} className="form-input__input" id="email" htmlFor="email" type="email" placeholder="Введите email"/>
        </div>
          <div className="form-input__radio"> 
            <div className="form-input-radio__gender">Пол</div>
            <div className="form-input-radio__box">
            <input className="form-input-radio__input" id="radio1" type="radio" name="gender" value="man"></input>
            <label className="form-input-radio__label" htmlFor="radio1">Мужчина</label>
            </div>
            <div className="form-input-radio__box">
            <input className="form-input-radio__input" id="radio2" type="radio" name="gender" value="woman"></input>
            <label className="form-input-radio__label" htmlFor="radio2">Женщина</label>
            </div>
        </div>
          <div className="form-input__textarea">
            <label className="form-input-textarea_label"  htmlFor="textarea">Ваше обращение</label>
            <textarea className="form-input-textarea_input" id="textarea" htmlFor="textarea" placeholder="Введите обращение..."></textarea>
          </div>
          <div className="form-input__file">
                <div className="form-input-file_label">Вставьте фото</div>
                <input className="form-input__file" type="file" name="photo" accept="image/*,image/jpeg" />
            </div>
           <div className="form-input__checkbox">
                <input id="checkbox" type="checkbox"></input>
                <label className="form-inputcheckboxlabel" htmlFor="checkbox">Я согласен получить ответ на указанную почту</label> 
           </div>
          <button onClick={(event) => {
                           event.preventDefault()}} 
                           className='formButton' id="submit">Отправить</button>
       </div>
       </form>
       </>
)
};

export default FeedbackPage;
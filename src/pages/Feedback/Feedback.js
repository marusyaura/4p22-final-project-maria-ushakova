import { useEffect, useState } from 'react';
import './Feedback.css';

function FeedbackPage() {

const [ email, setEmail ] = useState('')
const [ name, setName] = useState('')
const [ textarea, setTextarea ] = useState('')

const [ emailError, setEmailError ] = useState('error')
const [ nameError, setNameError] = useState('error')
const [ textareaError, setTextareaError ] = useState('error')

const clickFeedback = (event)=>{
  if (emailError+nameError+textareaError) {
      event.preventDefault();
  } else {
      console.log({Email: email, Name: name, Text: textarea});
  }
}

const clickMailValue = (event)=>{

  setEmail(event.target.value)    }

const clickTextValue = (event)=>{

  setTextarea(event.target.value)    }
   
useEffect(()=>{
      const mask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (String(email) === ''){
        setEmailError('Поле обязательно для заполнения')
          } else if (!(mask.test(String(email).toLowerCase()))){
            setEmailError('Email введён некорректно');
          } else setEmailError('');

      if (String(name) === ''){
          setNameError('Поле обязательно для заполнения')
      } else setNameError('');

      if (String(textarea) === ''){
        setTextareaError('Поле обязательно для заполнения')
      } else setTextareaError('');

}, [email, name, textarea])


    return (
        <>
         <form className='formmain'>
        <div className="form__heading">
        <h2>Обратная связь</h2>
      </div>
      <div className="form__input">
        <div className="form-input__email">
          <label className="form-input-email__label" htmlFor="text">Имя</label>
          <div className='form-input-email__error' id="name-error">{nameError}</div>
          <input className="form-input__input" value={name} id="name" htmlFor="text" type="text" placeholder="Введите ФИО" onChange={(event)=>setName(event.target.value)}/>
        </div>
        <div className="form__input">
        <div className="form-input__email">
          <label className="form-input-email__label" htmlFor="email">Email</label>
          <div className='form-input-email__error' id="email-error">{emailError}</div>
          <input className="form-input__input" value={email} id="email" htmlFor="email" type="email" placeholder="Введите email" onChange={clickMailValue}/>
        </div>
        </div>
          <div className="form-input__radio"> 
            <div className="form-input-radio__gender">Пол</div>
            <div className="form-input-radio__box">
            <input className="form-input-radio__input" id="radio1" type="radio" name="gender" value="man" defaultChecked></input>
            <label className="form-input-radio__label" htmlFor="radio1">Мужчина</label>
            </div>
            <div className="form-input-radio__box">
            <input className="form-input-radio__input" id="radio2" type="radio" name="gender" value="woman"></input>
            <label className="form-input-radio__label" htmlFor="radio2">Женщина</label>
            </div>
        </div>
          <div className="form-input__textarea">
            <label className="form-input-textarea_label"  htmlFor="textarea">Ваше обращение</label>
            <div className='form-input-email__error' id="textarea-error">{textareaError}</div>
            <textarea className="form-input-textarea_input" value={textarea} id="textarea" htmlFor="textarea" placeholder="Введите обращение..." onChange={clickTextValue}></textarea>
          </div>
          <div className="form-input__file">
                <div className="form-input-file_label">Вставьте фото</div>
                <input className="form-input__file" type="file" name="photo" accept="image/*,image/jpeg" />
            </div>
           <div className="form-input__checkbox">
                <input id="checkbox" type="checkbox" value="true"></input>
                <label className="form-inputcheckboxlabel" htmlFor="checkbox">Я согласен получить ответ на указанную почту</label> 
           </div>
          <button onClick={clickFeedback} 
                           className='formButton' id="submit">Отправить</button>
       </div>
       </form>
       </>
)}

export default FeedbackPage;
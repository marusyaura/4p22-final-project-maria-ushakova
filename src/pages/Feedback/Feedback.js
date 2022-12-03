import { useEffect, useState } from 'react';
import './Feedback.css';

const FeedbackPage = () => {

const [ email, setEmail ] = useState('')
const [ name, setName] = useState('')
const [ textarea, setTextarea ] = useState('')


const [ emailDirty, setEmailDirty ] = useState(false)
const [ nameDirty, setNameDirty] = useState(false)
const [ textareaDirty, setTextareaDirty ] = useState(false)


const [ emailError, setEmailError ] = useState('Поле не должно оставаться пустым')
const [ nameError, setNameError] = useState('Поле не должно оставаться пустым')
const [ textareaError, setTextareaError ] = useState('Поле не должно оставаться пустым')

const [gender, setGender] = useState('мужчина')

const [checked, setChecked] = useState(true)

const chengeGender = (event) => { 
  setGender(event.target.value);
 }

const chengeCheckbox = (event) => {
   setChecked(!checked);
}
  
const emailHandler = (e) => {
  setEmail(e.target.value)
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
        setEmailError('Некорректный e-mail')
} else {
  setEmailError('')
}
}

const nameHandler = (e) => {
  setName(e.target.value)
  if(e.target.value.length < 2) {
    setNameError('Поле должно содержать более 1 символа')
    if(!e.target.value) {
      setNameError('Поле не должно оставаться пустым')
    }
  } else {
    setNameError('')
  }
}

const textareHandler = (e) => {
  setTextarea(e.target.value)
  if(e.target.value.length < 2) {
    setTextareaError('Поле должно содержать более 1 символа')
    if(!e.target.value) {
      setTextareaError('Поле не должно оставаться пустым')
    }
  } else {
    setTextareaError('')
  }
}

const blurHandler = (e) => {
  switch (e.target.id) {
          case 'name':
           setNameDirty(true)
            break
          case 'email':
           setEmailDirty(true)
            break
          case 'textarea':
          setTextareaDirty(true)
            break
  }
}

const clickFeedback = (event) => {
  if (emailError+nameError+textareaError) {
      event.preventDefault();
      event.stopPropagation();

  } else {
    event.preventDefault();
    event.stopPropagation();

      console.log({Email: email, ФИО: name, Обращение: textarea, Пол: gender, Согласие: checked});
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
          <label className="form-input-email__label" htmlFor="text">Имя</label>
          {(nameDirty && nameError) && <div className='form-input-email__error'>{nameError}</div>}
          <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className="form-input__input" id="name" htmlFor="text" type="text" placeholder="Введите ФИО"/>
        </div>
        <div className="form__input">
        <div className="form-input__email">
          <label className="form-input-email__label" htmlFor="email">Email</label>
          {(emailDirty && emailError) && <div className='form-input-email__error'>{emailError}</div>}
          <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="form-input__input" id="email" htmlFor="email" type="email" placeholder="Введите email"/>
        </div>
        <div className="form-input__radio"> 
            <div className="form-input-radio__gender">Пол</div>
            <div className="form-input-radio__box">
            <input className="form-input-radio__input" id="radio1" type="radio" name="gender" value="мужской"
             checked={gender == 'мужской' ? true : false}
             onChange={chengeGender}></input>
            <label className="form-input-radio__label" htmlFor="radio1">Мужчина</label>
            </div>
            <div className="form-input-radio__box">
            <input className="form-input-radio__input" id="radio2" type="radio" name="gender" value="женский" 
            checked={gender == 'женский' ? true : false}
            onChange={chengeGender}></input>
            <label className="form-input-radio__label" htmlFor="radio2">Женщина</label>
            </div>
        </div>
          <div className="form-input__textarea">
            <label className="form-input-textarea_label"  htmlFor="textarea">Ваше обращение</label>
            {(textareaDirty && textareaError) && <div className='form-input-email__error' style={{color:'red'}}>{textareaError}</div>}
            <textarea onChange={e => textareHandler(e)} value={textarea} onBlur={e => blurHandler(e)} className="form-input-textarea_input" id="textarea" htmlFor="textarea" placeholder="Введите обращение..."></textarea>
          </div>
          <div className="form-input__file">
                <div className="form-input-file_label">Вставьте фото</div>
                <input className="form-input__file" type="file" name="photo" accept="image/*,image/jpeg" />
            </div>
           <div className="form-input__checkbox">
                <input id="checkbox" type="checkbox" value="true" checked={checked} onChange={chengeCheckbox}></input>
                <label className="form-inputcheckboxlabel" htmlFor="checkbox">Я согласен получить ответ на указанную почту</label> 
           </div>
           </div>
          <button onClick={clickFeedback} className='formButton' type="button">Отправить</button>
       </div>
       </form>
       </>
)}

export default FeedbackPage;
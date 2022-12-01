import './Enter.css';

function EnterPage() {
    return (
        <>
        <form className='form'>
        <div className='form__heading'>
          <h2>Вход</h2>
        </div>
        <div className='form__input'>
          <div className='form-input__email'>
            <label className='form-input-email__label' for="email">Email</label>
            <input className='form-input__input' id="email" name="email" type="email" placeholder="Введите email"/>
          </div>
          <div className='form-input__password'>
            <label className='form-input-password__label' for="password">Пароль</label>
            <input className='form-input__input' id="password" name="password" type="password" placeholder="Введите пароль"/>
          </div>
            <button className='formButton'>Войти</button>
         </div>
  </form>
  </>
)
};

export default EnterPage;
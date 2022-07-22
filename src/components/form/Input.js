import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return(
    <div className={styles.form_control}>
      <labal htmlFor={name}>{text}</labal>
      <input type={text} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
    </div>
  )
}

export default Input
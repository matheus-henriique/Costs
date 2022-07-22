import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
  return(
    <div className={styles.form_control}>
      <labal htmlFor={name}>{text}</labal>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''} >
        <options>Selecione uma opção</options>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
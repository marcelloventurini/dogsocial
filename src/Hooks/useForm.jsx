import React from 'react'

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Use um email válido.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Use apenas números'
  }
}

function useForm(dataType) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    if (dataType === false) return true
    if (value.length === 0) {
      setError('Preencha um valor.')

      return false
    } else if (validation[dataType]
      && !validation[dataType].regex.test(value)) {
      setError(validation[dataType].message)

      return false
    } else {
      setError(null)

      return true
    }
  }
  
  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm

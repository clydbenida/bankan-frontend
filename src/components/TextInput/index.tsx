import PropType from 'prop-types'

const TextInput = (props: any) => {
  return <input type={props.type} placeholder={props.placeholder ?? "Type something..."} className="text-input" />
}

TextInput.propTypes = {
  type: PropType.oneOf(['text', 'password']),
  placeholder: PropType.string
}

export default TextInput
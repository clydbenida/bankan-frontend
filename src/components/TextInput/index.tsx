import PropType from 'prop-types'

const TextInput = (props: any) => {
  return <input type={props.type} placeholder={props.placeholder ?? "Type something..."} className="text-input" {...props} />
}

TextInput.propTypes = {
  type: PropType.oneOf(['text', 'password']),
  placeholder: PropType.string,
  ref: PropType.any,
  onChange: PropType.func,
  value: PropType.string
}

export default TextInput
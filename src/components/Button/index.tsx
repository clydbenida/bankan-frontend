import PropType from 'prop-types'
const Button = (props: any) => {
  const onClickHandler = (e: any) => props.onClick(e)
  let buttonClass = ""
  switch (props.type) {
    case 'primary': 
      buttonClass = "button-primary"
      break;
    case 'success': 
      buttonClass = "button-success"
      break;
    case 'neutral': 
      buttonClass = "button-neutral"
      break;
    case 'error': 
      buttonClass = "button-error"
      break;
    case 'warning': 
      buttonClass = "button-warning"
      break;
    default: 
      buttonClass = ""
  }

  return (
    <button className={buttonClass} onClick={onClickHandler}>{props.children}</button>
  )
}

Button.propTypes = {
  type: PropType.oneOf(['primary', 'success', 'neutral', 'error', 'warning']),
  children: PropType.oneOfType([PropType.string, PropType.node]),
  onClick: PropType.func.isRequired
}

export default Button
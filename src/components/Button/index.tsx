import PropType from 'prop-types'
const Button = (props: any) => {
  switch (props.type) {
    case 'primary': 
    return (
      <button className="button-primary">
        {props.children}
      </button>
    )
    default: 
    return (
      <button>
        {props.children}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropType.oneOf(['primary', 'success', 'neutral', 'error', 'warning']),
  children: PropType.oneOfType([PropType.string, PropType.node])
}

export default Button
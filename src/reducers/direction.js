const defaultDirection = 'forward'

const direction = (state = defaultDirection, action) => {
  
  switch (action.type) {
    case 'UPDATE':
      return action.direction || ''
    default:
      return state
  }
}

export default direction

// rounds number to the upper multiple of the target number
function multipleOf(number, target) {
  if (number < target) {
    return target
  }

  return (Math.ceil(number / target) * target)
}

export default multipleOf

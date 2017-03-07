// rounds number to the upper multiple of the target number
function multipleOf(number, target) {
  return (Math.ceil(number / target) * target)
}

export default multipleOf

export const generateWords = (number, cbk) => {
  const lastNum = number % 10
  if (number <= 21) {
    if (number > 1 && number <= 4) {
      cbk('человека тусанут')
    } else {
      cbk('человек тусанёт')
    }
  } else if (number > 21) {
    if (lastNum > 1 && lastNum <= 4) {
      cbk('человека тусанут')
    } else {
      cbk('человек тусанёт')
    }
  }
}

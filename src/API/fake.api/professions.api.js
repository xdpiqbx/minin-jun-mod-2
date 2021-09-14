export const professions = {
  doctor: { _id: '67rdca3eeb7f6fgeed471818', name: 'Доктор' },
  waiter: { _id: '67rdca3eeb7f6fgeed471820', name: 'Официант' },
  physics: { _id: '67rdca3eeb7f6fgeed471814', name: 'Физик' },
  engineer: { _id: '67rdca3eeb7f6fgeed471822', name: 'Инженер' },
  actor: { _id: '67rdca3eeb7f6fgeed471824', name: 'Актер' },
  cook: { _id: '67rdca3eeb7f6fgeed471829', name: 'Повар' }
}
export function fetchAll() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(professions)
    }, Math.random() * 1000)
  })
}

export default { fetchAll }

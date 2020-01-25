const db = {
  animals: [],
  users: [
    {
      id: '1',
      login: 'mojadmin',
      role: 'admin',
      password: 'hasloadmina' // should be hash
    },
    {
      id: '2',
      login: 'mojuser',
      role: 'user',
      password: 'haslousera' // should be hash
    },
  ]
}

module.exports = db
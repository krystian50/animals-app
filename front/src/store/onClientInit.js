export default store => {
  const token = localStorage.getItem('access_token')

  if (!token) {
    return
  }

  try {
    store.dispatch('auth/setUser', token)
  } catch (error) {
    alert('Session expired. You are logout')

    localStorage.removeItem('access_token')
  }
}

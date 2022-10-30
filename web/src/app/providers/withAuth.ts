// TODO init auth

export const auth = () => {

}

// no auth => auth page (profile)
// check localStorage
// if true => make api request

// Init auth middleware
router.beforeEach(async (guard) => {
  if (initRequest == false) {
    // await fetch()

    if (result === false) {
      // clear storage
      // move to 403 page if not permissions
    }
  }

  return true;
})

// fetch middleware / axios interceptions
if (401 === result) {
  // try generate new token
  // if false => login / dialog window auth
  // if false => clear storage, move to 403 page if not permissions?
}

import Controller from '@ember/controller';

export default class UsersUserController extends Controller {

  userSorted = filterBy('user', 'active', true)

  actions = {
    archiveUser(isChecked) {
      if (isChecked)
      {
        user.active = 'true'
      }
      else
      {
        user.active = 'false'
        }
    }
  }
}

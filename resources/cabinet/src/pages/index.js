import layoutGuest from './layouts/Guest'
import layoutError from './layouts/Error'
import layoutEmpty from './layouts/Empty'

import main from './requests/Encrypt'
import decrypt from './requests/Decrypt'
import notFound from './errors/NotFound'

export default {
  layoutGuest,
  layoutError,
  layoutEmpty,
  main,
  notFound,
  decrypt
}

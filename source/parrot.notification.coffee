do ->

  ## -- Private ----------------------------------------------------------------

  _Notification = {}

  ## -- Public -----------------------------------------------------------------

  parrot.notification =
    getOrUpdate: (name, updateOptions=undefined) ->
      if updateOptions?
        for option of updateOptions
          _Notification[name][option] = updateOptions[option]
      _Notification[name]

    add: (opts) ->
      name = opts.name
      delete opts.name
      _Notification[name] = opts
      @[name] = require('fn-partial')(@getOrUpdate, name)
      this

    show: (name, options) ->
      if arguments.length is 1 and typeof name is 'object'
        options = name
        name = undefined

      _createNotification = (opts) ->
        try
          Notification.requestPermission()
          title = opts.title
          delete opts.title
          new Notification title, opts
        catch e
          console.log e
          throw new Error "Notification API is not available."

      return _createNotification options unless name?
      notification = @getOrUpdate name, options
      _createNotification notification

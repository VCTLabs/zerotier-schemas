# Install
`npm install --global zerotier-schemas`

# Command Line
`cat "/Library/Application Support/ZeroTier/One/local.conf" | zerotier-schemas localconf`
or
`zerotier-schemas localconf /Library/Application\ Support/ZeroTier/One/local.conf`

# Node API
`var { network, member, localconf } = require('zerotier-schemas')`
`var { error, value } = network.validate('{}')`

Uses [joi!](https://github.com/hapijs/joi), so check those docs for what `validate` return

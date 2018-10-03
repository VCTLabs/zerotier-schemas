
# Install
`npm install --global zerotier-schemas`

# Command Line
- `cat "/Library/Application Support/ZeroTier/One/local.conf" | zerotier-schemas localconf`
- `zerotier-schemas localconf /var/lib/zerotier-one/local.conf`
- `curl "http://localhost:9993/controller/network/${NWID}/member/${MEMBID}" -H "X-ZT1-AUTH: ${TOKEN}" | zerotier-schemas member`


# Node API
```javascript
var { network, member, localconf } = require('zerotier-schemas')
var { error, value } = network.validate('{}')
```

Uses [joi](https://github.com/hapijs/joi), so check those docs for what `validate` returns

# What is this for?
- [ZeroTierOne](https://github.com/zerotier/ZeroTierOne/tree/master/service)
- [ZeroTier Controllers](https://github.com/zerotier/ZeroTierOne/tree/master/controller)

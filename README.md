# alt:V WebView Logging system

Created by Ravenous, forked from Dzeknjak's [Chat](https://github.com/jovanivanovic/altv-os-chat)
. 

---
![logs](https://i.imgur.com/XRtdNIo.png)
# Description

Simple logging system for alt:V that helps visualize better what's going on with your server.

## Installing Dependencies / Installation

-   [NodeJS 13+](https://nodejs.org/en/download/current/)
-   An Existing or New Gamemode
-   General Scripting Knowledge

Afterwards, simply add the name of this resource to your `server.cfg` resource section.

`resources: [ altv-log, ... ]`

Then simply clone this repository into your main server resources folder.

Ensure your `package.json` includes this property:

```
"type": "module"
```

# Usage

To use this you first need to add it as a dependency to any resource you want to use in. Pick the resource you want to use and add this to your `resource.cfg`

`deps: [altv-log]`

Now either on the server or client side, import log and then you can start logging. The logs will display in the bottom right corner of the game but also in the respective consoles on client/server.

```javascript
import log from 'altv-log'

log('Hello World')
```


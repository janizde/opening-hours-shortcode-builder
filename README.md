# Opening Hours Shortcode Builder

## Options

The shortcode builder can be given initial options, such as the available sets that the user can choose among.
These options are contained in an option object whose JSON representation is then base64 encoded and set as the hash portion in the url.  

```json
{
  "sets": {
    "0": "First Set",
    "3": "Second Set"
  },
  "shortcode": "op-is-open"
}
```

The URL then looks like

```
https://domain.com/path/to/shortcode/builder#eyJzZXRzIjp7IjAiOiJGaXJzdCBTZXQiLCIzIjoiU2Vjb25kIFNldCJ9fQ==eyJzZXRzIjp7IjAiOiJGaXJzdCBTZXQiLCIzIjoiU2Vjb25kIFNldCJ9LCJzaG9ydGNvZGUiOiAib3AtaXMtb3BlbiJ9
```

|Name|Type|Description|
|-----|-----|-----|
|`sets`|`object<string, string>`|Object mapping set it to set name. The specified sets will be used as selectable presets fpr the set id|
|`shortcode`|`string`|String containing the initial shortcode id. Possible values are `op-overview`, `op-is-open`, `op-holidays` or `op-irregular-openings`|

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

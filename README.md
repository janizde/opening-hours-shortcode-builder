# Opening Hours Shortcode Builder

## Options

The shortcode builder can be given initial options, such as the available sets that the user can choose among.
These options are contained in an option object whose JSON representation is then base64 encoded and set as the hash portion in the url.  

```json
{
  "sets": {
    "0": "First Set",
    "3": "Second Set"
  }
}
```

The URL then looks like `https://domain.com/path/to/shortcode/builder#eyJzZXRzIjp7IjAiOiJGaXJzdCBTZXQiLCIzIjoiU2Vjb25kIFNldCJ9fQ==`

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

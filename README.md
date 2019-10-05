# Tinyspec Cloud CLI
<img src="tinyspec-cloud-logo.png" width="165" title="tinyspec" alt="tinyspec-cloud" />

[![NPM version](https://img.shields.io/npm/v/tinyspec-cloud.svg)](https://npmjs.com/package/tinyspec-cloud)

This CLI allows you to deploy your OpenAPI specification to [**Tinyspec Cloud**](https://tinyspec.cloud) and then
access its auto-generated versions in different formats (HTML, PDF, YAML, JSON).


### Demo
https://wearable-coach.tinyspec.cloud/dev

### Quick Start

```bash
npm i -g tinyspec-cloud

tinyspec-cloud --name my-project
```

**Result example:**
> 🎉 Congratulations!
>
> Your project **my-project** is created in **Tinyspec Cloud**.
>
> In a couple of minutes it will be published to these URLs:
>
>     https://my-project.tinyspec.cloud
>     https://my-project.tinyspec.cloud/index.pdf
>     https://my-project.tinyspec.cloud/openapi.yaml
>     https://my-project.tinyspec.cloud/openapi.json
>     https://my-project.tinyspec.cloud/build.log
>
> Please store your access key: `XkRTlERUICxnaATXBAH4E9oTwlvD`.
>
> If you lose your key, you won't be able to publish updates to your project.

### Usage
```
Options:
  --name    | -n  Project Name (required)
  --version | -v  Project Version
  --key     | -k  Project Secret Key (required for subsequent calls)
  --source  | -s  Source OpenAPI specification file in YAML or JSON format [default: "openapi.yaml"]
  --help    | -h  Show help
```
You can also set the same options using **environment variables** prefixed by `TINYSPEC_` or in a **config file** `tinyspec.json` located in a directory where you run `tinyspec-cloud`.

### More info:
- [Tinyspec repository](https://github.com/Ajaxy/tinyspec)
- [tinyspec.cloud](https://tinyspec.cloud)

# ChartQuery CLI

Official command-line interface for the [ChartQuery](https://www.chartquery.com) chart and QR code API.

Generate chart images, diagrams, barcodes, QR codes and thermal labels on demand. PNG, SVG or PDF output.

Every documented endpoint is a command — **20 commands** — and `request` reaches any other path. JSON responses are pretty-printed; files (images, PDFs…) are saved with `-o`.

## Requirements

- Node.js 20 or newer
- a ChartQuery [API key](https://app.chartquery.com)

## Install

```sh
npm install --global @chartquery/cli
chartquery --help
```

Or run it without installing:

```sh
npx @chartquery/cli --help
```

## Configure your API key

The CLI reads the key from the environment; it does not load `.env` files.

```sh
export CHARTQUERY_API_KEY="YOUR_API_KEY"
```

PowerShell:

```powershell
$env:CHARTQUERY_API_KEY = "YOUR_API_KEY"
```

## Usage

```sh
chartquery chart-ai --prompt 'Monthly revenue 2026 as a bar chart: Jan 10, Feb 14, Mar 18'
```

Parameters use the names of the [API reference](https://app.chartquery.com/openapi) as flags: `--full-page` and `--full_page` are equivalent. Boolean flags can be bare (`--flag`) or explicit (`--flag=false`); array parameters accept commas or repeated flags.

```sh
chartquery chart-ai --help     # parameters of one command
chartquery endpoints                # every command and its HTTP path
chartquery endpoints search         # filter the list
```

### Save files

```sh
chartquery qrcode --data https://chartquery.com --format png -o qrcode.png
```

Binary responses are never written to a terminal: pass `-o <file>`, or `-o -` to pipe them.

### JSON parameters

```sh
echo '{"prompt": "Monthly revenue 2026 as a bar chart: Jan 10, Feb 14, Mar 18"}' | chartquery chart-ai --params -
chartquery chart-ai --params params.json --compact
```

Flags override values read with `--params`.

### Any endpoint

```sh
chartquery request get /v1/usage
chartquery request post /v1/some/new/endpoint --params body.json
```

### Pipe into jq

```sh
chartquery chart-ai --prompt 'Monthly revenue 2026 as a bar chart: Jan 10, Feb 14, Mar 18' | jq .
```

## Exit codes

| Code | Meaning                                                                             |
| ---- | ----------------------------------------------------------------------------------- |
| `0`  | Success.                                                                            |
| `1`  | The API returned an error (details on standard error) or the network failed.        |
| `2`  | Invalid usage: unknown command or parameter, missing API key or required parameter. |

## Commands

| Command          | HTTP                          | Description                                                                                                              |
| ---------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `barcode`        | GET / POST `/v1/barcode`      | Generate a barcode image via GET. Output: SVG (default) or PNG. Supports 25+ formats: EAN-13, Code 128, ITF-14, GS1-128… |
| `chart`          | GET / POST `/v1/chart`        | Render a Chart.js image via GET. Pass the full chart object as URL-encoded JSON in query. Prefer format png for ChatGPT… |
| `chart-ai`       | GET / POST `/v1/chart/ai`     | Describe a chart in plain English via GET and get a rendered image back. Powered by AI.                                  |
| `chart-render`   | GET `/v1/chart/render/{id}`   | Render a previously saved chart by ID. Public, no API key required. Supports URL overrides for templates (?data1=, ?lab… |
| `chart-view`     | GET `/v1/chart/view/{id}`     | View a previously saved chart as an interactive HTML page. Public, no API key required. Iframe-embeddable.               |
| `diagram`        | GET / POST `/v1/diagram`      | Render a diagram via GET. Use type (mermaid, d2, …), query (source code), and format=png for ChatGPT. POST uses diagram… |
| `diagram-ai`     | GET / POST `/v1/diagram/ai`   | Describe a diagram in plain English via GET and get a rendered image back. Powered by AI.                                |
| `diagram-render` | GET `/v1/diagram/render/{id}` | Render a previously saved diagram by ID. Public, no API key required. Supports ?format= and ?query= overrides.           |
| `diagram-view`   | GET `/v1/diagram/view/{id}`   | View a previously saved diagram as an HTML page. Public, no API key required. Iframe-embeddable with inline SVG renderi… |
| `jobs`           | GET `/v1/jobs/{id}`           | Poll the status, progress (0–100) and result of a job started with is_async=true. Polling is free. Poll until status is… |
| `label`          | GET / POST `/v1/label`        | Preview a thermal label via GET. Pass the same label object as a URL-encoded JSON string in query. Inside that JSON, te… |
| `label-compile`  | POST `/v1/label/compile`      | Compile a label to printer commands (tsc, zpl, epl, …). POST width, language, and elements. Text uses content and size…  |
| `label-convert`  | POST `/v1/label/convert`      | Convert printer commands from one language to another. POST source, from, and to. from is the source language (tsc, zpl… |
| `label-parse`    | POST `/v1/label/parse`        | Parse printer commands into structured elements. POST source and language (tsc, zpl, epl, …).                            |
| `label-render`   | GET `/v1/label/render/{id}`   | Render a previously saved label by ID. Public, no API key required. Supports ?format= override.                          |
| `label-validate` | POST `/v1/label/validate`     | Validate printer commands. POST source (the raw commands) and language (tsc, zpl, epl, …).                               |
| `label-view`     | GET `/v1/label/view/{id}`     | View a previously saved label as an HTML page. Public, no API key required. Iframe-embeddable with inline SVG rendering. |
| `qrcode`         | GET / POST `/v1/qrcode`       | Generate a styled QR code via GET. Output: SVG (default) or PNG. Supports dot styles, gradients, custom corners and all… |
| `stats`          | GET `/v1/stats`               | Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per a… |
| `usage`          | GET `/v1/usage`               | Return this account's Chartquery usage and credit balance. No body. Requires an API key.                                 |

## Built on the SDK

The CLI uses the official [Node.js SDK](https://github.com/chartquery/chartquery-node) (`@chartquery/sdk`). Use the SDK directly for programmatic access.

## License

MIT — see [LICENSE](LICENSE).

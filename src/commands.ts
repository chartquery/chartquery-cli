// Generated from the ChartQuery OpenAPI document. Do not edit by hand.

import type { CommandDefinition } from "./types.js";

export const COMMANDS: readonly CommandDefinition[] = [
  {
    command: "barcode",
    operation: "barcode",
    path: "/v1/barcode",
    methods: ["GET", "POST"],
    summary: "Barcode",
    description:
      "Generate a barcode image via GET. Output: SVG (default) or PNG. Supports 25+ formats: EAN-13, Code 128, ITF-14, GS1-128, postal codes and more.",
    params: [
      {
        name: "data",
        type: "string",
        required: true,
        description: "The data to encode in the barcode. Examples by type:",
      },
      {
        name: "type",
        type: "string",
        required: false,
        description: "Barcode format. Default: code128.",
        enum: [
          "code128",
          "code39",
          "code39ext",
          "code93",
          "code93ext",
          "ean13",
          "ean8",
          "ean5",
          "ean2",
          "upca",
          "upce",
          "itf",
          "itf14",
          "codabar",
          "msi",
          "pharmacode",
          "code11",
          "gs1-128",
          "gs1-databar",
          "gs1-databar-limited",
          "gs1-databar-expanded",
          "identcode",
          "leitcode",
          "postnet",
          "planet",
          "plessey",
        ],
        default: "code128",
      },
      {
        name: "height",
        type: "number",
        required: false,
        description:
          "Bar height in pixels. Default: 80. Typical values: 50 (compact), 80 (standard), 100–120 (tall labels). Example: ?height=100",
      },
      {
        name: "color",
        type: "string",
        required: false,
        description:
          "Bar color as a CSS color string. Default: #000. Examples: ?color=%231e293b (dark slate), ?color=%230f172a (near black), ?color=%237c3aed (purple), ?color=%23dc2626 (red). Use %23 to URL-encode the #…",
      },
      {
        name: "show_text",
        type: "boolean",
        required: false,
        description:
          "Show human-readable text below the bars. Example: ?show_text=true. Combine with font_size and text_align for print labels.",
      },
      {
        name: "text_position",
        type: "string",
        required: false,
        description:
          "Position of the human-readable text label. Default: bottom. Example: ?text_position=top",
        enum: ["bottom", "top"],
        default: "bottom",
      },
      {
        name: "text_align",
        type: "string",
        required: false,
        description:
          "Horizontal alignment of the text label. Default: center. Example: ?text_align=left",
        enum: ["center", "left", "right"],
        default: "center",
      },
      {
        name: "font_size",
        type: "number",
        required: false,
        description:
          "Font size of the text label in pixels. Default: 14. Example: ?font_size=12",
      },
      {
        name: "font_family",
        type: "string",
        required: false,
        description:
          "Font family of the text label. Default: monospace. Examples: ?font_family=monospace, ?font_family=sans-serif, ?font_family=Arial",
      },
      {
        name: "bar_width",
        type: "number",
        required: false,
        description:
          "Width multiplier per module (bar). Default: 2. Increase for wider, more scannable barcodes. Example: ?bar_width=3",
      },
      {
        name: "bar_gap",
        type: "number",
        required: false,
        description:
          "Extra horizontal spacing between bars in pixels. Default: 0. Example: ?bar_gap=1",
      },
      {
        name: "background",
        type: "string",
        required: false,
        description:
          "Background fill color. Default: #fff. Use transparent for no background. Example: ?background=%23f8fafc",
      },
      {
        name: "margin",
        type: "number",
        required: false,
        description:
          "Uniform margin around the barcode in pixels. Default: 10. Overridden per side by margin_top/bottom/left/right. Example: ?margin=6",
      },
      {
        name: "margin_top",
        type: "number",
        required: false,
        description:
          "Top margin in pixels (overrides margin). Example: ?margin_top=4",
      },
      {
        name: "margin_bottom",
        type: "number",
        required: false,
        description:
          "Bottom margin in pixels (overrides margin). Example: ?margin_bottom=4",
      },
      {
        name: "margin_left",
        type: "number",
        required: false,
        description:
          "Left margin in pixels (overrides margin). Example: ?margin_left=8",
      },
      {
        name: "margin_right",
        type: "number",
        required: false,
        description:
          "Right margin in pixels (overrides margin). Example: ?margin_right=8",
      },
      {
        name: "rotation",
        type: "number",
        required: false,
        description:
          "Rotate the barcode by 0, 90, 180 or 270 degrees. Default: 0. Use 90 or 270 for vertical label orientation. Example: ?rotation=90",
      },
      {
        name: "bearer_bars",
        type: "boolean",
        required: false,
        description:
          "Add horizontal bearer bars above and below the barcode. Required for ITF-14. Default: false. Example: ?bearer_bars=true",
      },
      {
        name: "unit",
        type: "string",
        required: false,
        description:
          "Measurement unit for dimensions. Default: px. Use mm, in or cm for print-ready output. Example: ?unit=mm",
        enum: ["px", "mm", "in", "cm"],
        default: "px",
      },
      {
        name: "aria_label",
        type: "string",
        required: false,
        description:
          "Accessible label added as aria-label on the SVG element. Improves screen reader support. Example: ?aria_label=EAN-13+barcode+for+product+4006381333931",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description:
          "SVG <title> element for tooltip and accessibility. Example: ?title=Product+Barcode",
      },
      {
        name: "desc",
        type: "string",
        required: false,
        description:
          "SVG <desc> element for extended accessibility description. Example: ?desc=EAN-13+encoding+GTIN+for+Nivea+cream+75ml",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description:
          "Output format. Default: svg. Use png to get a raster image. SVG is lossless and scalable; PNG is pixel-based and suitable for email, PDF or messaging. Example: ?format=png",
        enum: ["svg", "png"],
        default: "svg",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry with watermark. Paid plan: 6-month expiry, no b…",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "chart",
    operation: "chart",
    path: "/v1/chart",
    methods: ["GET", "POST"],
    summary: "Chart",
    description:
      "Render a Chart.js image via GET. Pass the full chart object as URL-encoded JSON in query. Prefer format png for ChatGPT. POST sends the same object as a JSON body, not query.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full chart config as URL-encoded JSON. Pass ?version= or ?v= separately to pin the chart version.",
      },
      {
        name: "version",
        type: "string",
        required: false,
        description:
          'Chart.js version to use. Alias: ?v=. Only v4.x is supported. Defaults to the installed version (4.5.1). Example: "4", "4.5", "4.5.1". The installed version is always returned in the X-ChartJS-Version…',
        default: "4.5.1",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "If true, persist the result and return share URLs instead of an image. Leave false to get the image.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "chart-ai",
    operation: "chart_ai",
    path: "/v1/chart/ai",
    methods: ["GET", "POST"],
    summary: "Chart AI",
    description:
      "Describe a chart in plain English via GET and get a rendered image back. Powered by AI.",
    params: [
      {
        name: "prompt",
        type: "string",
        required: true,
        description:
          "Describe your chart in plain English (max 1000 chars). Be specific: mention chart type, data topic, colors, style.",
      },
      {
        name: "raw_data",
        type: "string",
        required: false,
        description:
          "Raw data for the chart. URL-encoded string, CSV, or JSON. AI will parse and structure it.",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description: "Override the chart title generated by AI.",
      },
      {
        name: "subtitle",
        type: "string",
        required: false,
        description: "Override the chart subtitle.",
      },
      {
        name: "legend",
        type: "string",
        required: false,
        description: 'Legend position or visibility. Use "false" to hide.',
        enum: ["top", "bottom", "left", "right", "chartArea", "false"],
        default: "top",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: 'Output format. Default: "png".',
        enum: ["png", "svg"],
        default: "png",
      },
      {
        name: "width",
        type: "number",
        required: false,
        description: "Image width in pixels (50–4000). Default: 1200.",
      },
      {
        name: "height",
        type: "number",
        required: false,
        description: "Image height in pixels (50–4000). Default: 600.",
      },
      {
        name: "background",
        type: "string",
        required: false,
        description: "Background color as a hex value. Default: #ffffff.",
      },
      {
        name: "device_pixel_ratio",
        type: "number",
        required: false,
        description: "Device pixel ratio for the rendered image. Default: 1.",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry with watermark. Paid plan: 6-month expiry, no b…",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "chart-render",
    operation: "chart_render",
    path: "/v1/chart/render/{id}",
    methods: ["GET"],
    summary: "Chart Render",
    description:
      "Render a previously saved chart by ID. Public, no API key required. Supports URL overrides for templates (?data1=, ?labels=, ?title=…).",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The chart ID returned in the X-Chart-Render-URL header when saving a chart. Format: cq-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description: "Override the chart title.",
      },
      {
        name: "labels",
        type: "string",
        required: false,
        description: "Override X-axis labels. Comma-separated.",
      },
      {
        name: "data1",
        type: "string",
        required: false,
        description:
          "Override first dataset values. Comma-separated numbers. Use data2, data3… for additional datasets.",
      },
      {
        name: "width",
        type: "string",
        required: false,
        description: "Override output width in pixels (50–4000).",
      },
      {
        name: "height",
        type: "string",
        required: false,
        description: "Override output height in pixels (50–4000).",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "Override output format.",
        enum: ["png", "svg"],
        default: "png",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "chart-view",
    operation: "chart_view",
    path: "/v1/chart/view/{id}",
    methods: ["GET"],
    summary: "Chart View",
    description:
      "View a previously saved chart as an interactive HTML page. Public, no API key required. Iframe-embeddable.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The chart ID returned in the X-Chart-View-URL header when saving a chart. Format: cq-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry with watermark. Paid plan: 6-month expiry, no b…",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "diagram",
    operation: "diagram",
    path: "/v1/diagram",
    methods: ["GET", "POST"],
    summary: "Diagram",
    description:
      "Render a diagram via GET. Use type (mermaid, d2, …), query (source code), and format=png for ChatGPT. POST uses diagram_type and diagram_source instead.",
    params: [
      {
        name: "type",
        type: "string",
        required: true,
        description: "Diagram language.",
        enum: [
          "mermaid",
          "graphviz",
          "plantuml",
          "d2",
          "svgbob",
          "nomnoml",
          "blockdiag",
          "seqdiag",
          "actdiag",
          "nwdiag",
          "bpmn",
          "erd",
          "excalidraw",
          "ditaa",
          "vega",
          "vegalite",
          "wavedrom",
          "wireviz",
          "c4plantuml",
          "structurizr",
          "tikz",
          "pikchr",
          "umlet",
          "symbolator",
          "packetdiag",
          "rackdiag",
          "bytefield",
          "dbml",
        ],
        default: "mermaid",
      },
      {
        name: "query",
        type: "string",
        required: true,
        description: "Diagram source code (URL-encoded).",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description:
          "Use png so ChatGPT can display the image. svg is for download or infinite scale.",
        enum: ["svg", "png", "jpeg", "pdf"],
        default: "svg",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "If true, persist the result and return share URLs instead of an image. Leave false to get the image.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "diagram-ai",
    operation: "diagram_ai",
    path: "/v1/diagram/ai",
    methods: ["GET", "POST"],
    summary: "Diagram AI",
    description:
      "Describe a diagram in plain English via GET and get a rendered image back. Powered by AI.",
    params: [
      {
        name: "prompt",
        type: "string",
        required: true,
        description:
          "Describe your diagram in plain English (max 1000 chars). Be specific: mention the diagram type, key entities, and relationships.",
      },
      {
        name: "diagram_type",
        type: "string",
        required: false,
        description:
          'Preferred diagram language. AI chooses if omitted. Examples: "mermaid", "d2", "plantuml", "graphviz".',
        enum: ["mermaid", "d2", "plantuml", "graphviz"],
        default: "mermaid",
      },
      {
        name: "output_format",
        type: "string",
        required: false,
        description: 'Output format. Default: "svg".',
        enum: ["svg", "png", "jpeg", "pdf"],
        default: "svg",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry. Paid plan: 6-month expiry.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "diagram-render",
    operation: "diagram_render",
    path: "/v1/diagram/render/{id}",
    methods: ["GET"],
    summary: "Diagram Render",
    description:
      "Render a previously saved diagram by ID. Public, no API key required. Supports ?format= and ?query= overrides.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The diagram ID returned in the X-Diagram-Render-URL header when saving a diagram. Format: cq-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "Override output format.",
        enum: ["svg", "png", "jpeg", "pdf"],
        default: "svg",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description: "Override the diagram source code (URL-encoded).",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry with watermark. Paid plan: 6-month expiry, no b…",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "diagram-view",
    operation: "diagram_view",
    path: "/v1/diagram/view/{id}",
    methods: ["GET"],
    summary: "Diagram View",
    description:
      "View a previously saved diagram as an HTML page. Public, no API key required. Iframe-embeddable with inline SVG rendering.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The diagram ID returned in the X-Diagram-View-URL header when saving a diagram. Format: cq-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry with watermark. Paid plan: 6-month expiry, no b…",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "jobs",
    operation: "jobs",
    path: "/v1/jobs/{id}",
    methods: ["GET"],
    summary: "Jobs",
    description:
      "Poll the status, progress (0–100) and result of a job started with is_async=true. Polling is free. Poll until status is terminal: CompletedJob, Error, NotFound or BadRequest.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "The job_id returned by an endpoint called with is_async=true.",
      },
    ],
  },
  {
    command: "label",
    operation: "label",
    path: "/v1/label",
    methods: ["GET", "POST"],
    summary: "Label Preview",
    description:
      "Preview a thermal label via GET. Pass the same label object as a URL-encoded JSON string in query. Inside that JSON, text items use content and size (1-10), not text or fontSize. Prefer format=png for ChatGPT.",
    params: [
      {
        name: "format",
        type: "string",
        required: false,
        description:
          "Use png so ChatGPT can display the image. svg is for download or infinite scale.",
        enum: ["svg", "png"],
        default: "svg",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "If true, persist the result and return share URLs instead of an image. Leave false to get the image.",
        default: false,
      },
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full label config as URL-encoded JSON. Must include width and elements. Text items use content and size (1-10), not text or fontSize.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "label-compile",
    operation: "label_compile",
    path: "/v1/label/compile",
    methods: ["POST"],
    summary: "Label Compile",
    description:
      'Compile a label to printer commands (tsc, zpl, epl, …). POST width, language, and elements. Text uses content and size (1-10), not text or fontSize. No barcode element. Example: {"width":40,"height":30,"unit":"mm","language":"zpl","element…',
    params: [
      {
        name: "width",
        type: "number",
        required: true,
        description:
          "Label width. Required. Default unit is mm. Example: 40. Do not send query instead of width.",
      },
      {
        name: "height",
        type: "number",
        required: false,
        description:
          "Label height in the same unit. Example: 30. Omit for receipt / continuous mode.",
      },
      {
        name: "unit",
        type: "string",
        required: false,
        description:
          "Measurement unit for width and height. Default mm. Use mm unless you are working in printer dots.",
        enum: ["mm", "inch", "dot"],
        default: "mm",
      },
      {
        name: "dpi",
        type: "number",
        required: false,
        description: "Printer DPI. Default 203.",
      },
      {
        name: "gap",
        type: "number",
        required: false,
        description: "Gap between labels in mm. Ignored for receipts.",
      },
      {
        name: "speed",
        type: "number",
        required: false,
        description: "Print speed, 1-18.",
      },
      {
        name: "density",
        type: "number",
        required: false,
        description: "Print darkness, 0-15.",
      },
      {
        name: "direction",
        type: "number",
        required: false,
        description: "Print direction. 0 = normal, 1 = reversed.",
        default: 1,
      },
      {
        name: "copies",
        type: "number",
        required: false,
        description: "Number of copies. Minimum 1.",
      },
      {
        name: "printer",
        type: "string",
        required: false,
        description: "Printer profile id (tsc-te210, zebra-zd420, …).",
      },
      {
        name: "elements",
        type: "array",
        required: true,
        description:
          'Required array. Text items need type=text, content, and size (1-10 magnification). Do not use text, fontSize, or type=barcode. Positions x/y are in dots. Example item: {"type":"text","content":"Order…',
        items: "object",
      },
      {
        name: "language",
        type: "string",
        required: true,
        description:
          "Required printer language. Example: zpl or tsc. Do not omit.",
        enum: [
          "tsc",
          "zpl",
          "epl",
          "cpcl",
          "dpl",
          "sbpl",
          "escpos",
          "starprnt",
          "ipl",
        ],
        default: "tsc",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "label-convert",
    operation: "label_convert",
    path: "/v1/label/convert",
    methods: ["POST"],
    summary: "Label Convert",
    description:
      "Convert printer commands from one language to another. POST source, from, and to. from is the source language (tsc, zpl, epl, …). to is the target (tsc, zpl, escpos, …).",
    params: [
      {
        name: "source",
        type: "string",
        required: true,
        description: "Raw printer commands to convert. Also send from and to.",
      },
      {
        name: "from",
        type: "string",
        required: true,
        description: "Source language.",
        enum: ["tsc", "zpl", "epl", "cpcl", "dpl", "sbpl", "ipl"],
        default: "tsc",
      },
      {
        name: "to",
        type: "string",
        required: true,
        description: "Target language.",
        enum: [
          "tsc",
          "zpl",
          "epl",
          "cpcl",
          "dpl",
          "sbpl",
          "escpos",
          "starprnt",
          "ipl",
        ],
        default: "tsc",
      },
      {
        name: "dpi",
        type: "number",
        required: false,
        description: "Override DPI on the converted output.",
      },
      {
        name: "speed",
        type: "number",
        required: false,
        description: "Override print speed, 1-18.",
      },
      {
        name: "density",
        type: "number",
        required: false,
        description: "Override print darkness, 0-15.",
      },
      {
        name: "copies",
        type: "number",
        required: false,
        description: "Override copies. Minimum 1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "label-parse",
    operation: "label_parse",
    path: "/v1/label/parse",
    methods: ["POST"],
    summary: "Label Parse",
    description:
      "Parse printer commands into structured elements. POST source and language (tsc, zpl, epl, …).",
    params: [
      {
        name: "source",
        type: "string",
        required: true,
        description: "Raw printer commands to parse. Also send language.",
      },
      {
        name: "language",
        type: "string",
        required: true,
        description: "Language of the source commands. Example: tsc or zpl.",
        enum: ["tsc", "zpl", "epl", "cpcl", "dpl", "sbpl", "ipl"],
        default: "tsc",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "label-render",
    operation: "label_render",
    path: "/v1/label/render/{id}",
    methods: ["GET"],
    summary: "Label Render",
    description:
      "Render a previously saved label by ID. Public, no API key required. Supports ?format= override.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description: "",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "Override output format.",
        enum: ["svg", "png"],
        default: "svg",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "label-validate",
    operation: "label_validate",
    path: "/v1/label/validate",
    methods: ["POST"],
    summary: "Label Validate",
    description:
      "Validate printer commands. POST source (the raw commands) and language (tsc, zpl, epl, …).",
    params: [
      {
        name: "source",
        type: "string",
        required: true,
        description: "Raw printer commands to validate. Also send language.",
      },
      {
        name: "language",
        type: "string",
        required: true,
        description: "Language of the source commands. Example: tsc or zpl.",
        enum: ["tsc", "zpl", "epl", "cpcl", "dpl", "sbpl", "ipl"],
        default: "tsc",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "label-view",
    operation: "label_view",
    path: "/v1/label/view/{id}",
    methods: ["GET"],
    summary: "Label View",
    description:
      "View a previously saved label as an HTML page. Public, no API key required. Iframe-embeddable with inline SVG rendering.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description: "",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "qrcode",
    operation: "qrcode",
    path: "/v1/qrcode",
    methods: ["GET", "POST"],
    summary: "QR Code",
    description:
      "Generate a styled QR code via GET. Output: SVG (default) or PNG. Supports dot styles, gradients, custom corners and all QR versions.",
    params: [
      {
        name: "data",
        type: "string",
        required: true,
        description: "Data to encode in the QR code. Examples:",
      },
      {
        name: "size",
        type: "number",
        required: false,
        description:
          "Output size in pixels (width = height). Default: 200. Examples: ?size=200 (thumbnail), ?size=300 (standard), ?size=400 (large), ?size=600 (poster). For print, use the unit param with mm/cm instead.",
      },
      {
        name: "ec_level",
        type: "string",
        required: false,
        description:
          "Error correction level. Default: M. Higher levels allow more damage/obscuring before the code becomes unreadable.",
        enum: ["L", "M", "Q", "H"],
        default: "M",
      },
      {
        name: "dot_type",
        type: "string",
        required: false,
        description:
          "Module (dot) shape. Default: square. Controls the visual style of each QR code module.",
        enum: [
          "square",
          "rounded",
          "dots",
          "diamond",
          "classy",
          "classy-rounded",
          "extra-rounded",
          "vertical-line",
          "horizontal-line",
          "small-square",
          "tiny-square",
        ],
        default: "square",
      },
      {
        name: "color",
        type: "string",
        required: false,
        description:
          "Module color as CSS hex. Default: #000. Examples: ?color=%236366f1 (indigo), ?color=%23dc2626 (red), ?color=%23059669 (green), ?color=%230891b2 (teal). Use %23 to URL-encode #. For gradient objects,…",
      },
      {
        name: "shape",
        type: "string",
        required: false,
        description:
          "Overall QR code shape. Default: square. Use circle to clip the entire QR into a circle: great for profile/avatar-style codes. Example: ?shape=circle&dot_type=dots",
        enum: ["square", "circle"],
        default: "square",
      },
      {
        name: "dot_size",
        type: "number",
        required: false,
        description:
          "Module size ratio between 0.1 and 1. Default: 1 (full). Values below 1 add spacing between modules for a lighter look. Example: ?dot_size=0.85",
      },
      {
        name: "background",
        type: "string",
        required: false,
        description:
          "Background color. Default: #fff. Set to transparent for no background. Example: ?background=%230f172a for dark background. Use %23 to encode #.",
      },
      {
        name: "margin",
        type: "number",
        required: false,
        description:
          "Quiet zone width in modules around the QR code. Default: 4. Minimum recommended by the QR standard: 4. Example: ?margin=2 (compact) or ?margin=6 (extra padding).",
      },
      {
        name: "version",
        type: "number",
        required: false,
        description:
          "QR version from 1 to 40 (determines grid size and data capacity). Leave unset for auto-selection based on data length and ec_level. Example: ?version=5",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description:
          "Encoding mode. Default: auto (best mode selected for the data). Use numeric for digits-only, alphanumeric for uppercase + digits, byte for arbitrary text/UTF-8. Example: ?mode=numeric",
        enum: ["auto", "numeric", "alphanumeric", "byte"],
        default: "auto",
      },
      {
        name: "mask",
        type: "number",
        required: false,
        description:
          "Mask pattern from 0 to 7. Default: auto (best mask selected to minimize visual patterns). Only set manually if you need a deterministic output. Example: ?mask=3",
      },
      {
        name: "unit",
        type: "string",
        required: false,
        description:
          "Measurement unit for the size param. Default: px. Use mm, in or cm with the size param for print-ready output. Example: ?size=50&unit=mm",
        enum: ["px", "mm", "in", "cm"],
        default: "px",
      },
      {
        name: "xml_declaration",
        type: "boolean",
        required: false,
        description:
          'Prepend an XML declaration (<?xml version="1.0" encoding="UTF-8"?>) to the SVG output. Useful when the SVG will be used as a standalone XML file. Default: false. Example: ?xml_declaration=true',
      },
      {
        name: "aria_label",
        type: "string",
        required: false,
        description:
          "Accessible label added as aria-label on the SVG element. Example: ?aria_label=QR+code+linking+to+chartquery.com",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description:
          "SVG <title> element shown as a browser tooltip and used by screen readers. Example: ?title=ChartQuery+Website",
      },
      {
        name: "desc",
        type: "string",
        required: false,
        description:
          "SVG <desc> element for extended accessibility description. Example: ?desc=Scan+to+visit+https://chartquery.com",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description:
          "Output format. Default: svg. Use png to get a raster image. SVG is lossless and scalable; PNG is pixel-based and suitable for email, PDF or messaging. Example: ?format=png",
        enum: ["svg", "png"],
        default: "svg",
      },
      {
        name: "share",
        type: "boolean",
        required: false,
        description:
          "Set share=true to persist the config and receive JSON instead of an image: { id, render_url, view_url, embed_url, expires_in }. Free plan: 3-day expiry with watermark. Paid plan: 6-month expiry, no b…",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stats",
    operation: "stats",
    path: "/v1/stats",
    methods: ["GET"],
    summary: "Stats",
    description:
      "Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.",
    params: [
      {
        name: "engine",
        type: "string",
        required: false,
        description:
          "API family to check, for example chart. Provide at least engine or path.",
      },
      {
        name: "path",
        type: "string",
        required: false,
        description:
          "Specific endpoint to check, for example /v1/chart. If you also pass engine, use an endpoint from that API.",
      },
    ],
  },
  {
    command: "usage",
    operation: "usage",
    path: "/v1/usage",
    methods: ["GET"],
    summary: "Usage",
    description:
      "Return this account's Chartquery usage and credit balance. No body. Requires an API key.",
    params: [],
  },
];

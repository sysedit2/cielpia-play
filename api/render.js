export default function handler(req, res) {
  const code = req.query.code || "";
  const decoded = decodeURIComponent(code);

  const html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>CIELPIA Render</title>
    </head>
    <body style="margin:0;padding:0;">
      ${decoded}
    </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(html);
}

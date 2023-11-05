let today = new Date();
let date = today.toDateString();

module.exports = {
	dest: "resume-martins-luters.pdf",
	stylesheet: ['style.css'],
	pdf_options: {
		margin: {
			top: "5mm",
			right: "12mm",
			bottom: "10mm",
			left: "12mm"
		},
		headerTemplate: " ",
		footerTemplate: `
		<style>
		section.footer {
			margin: 0 auto;
			font-size: 6px;
			color: #dae0e5;
			text-align: center;
		}
		.footer img { vertical-align:middle; }
		.footer span { vertical-align:middle; }
		.footer code {
		  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;
		}
		</style>
		<section class='footer'>
			<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkdpdEh1YiIgcm9sZT0iaW1nIgp2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QKd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiCnJ4PSIxNSUiCmZpbGw9IiMxODE3MTciLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzM1IDQ5OWMxNCAwIDEyIDE3IDEyIDE3SDE2NXMtMi0xNyAxMi0xN2MxMyAwIDE2LTYgMTYtMTJsLTEtNDRjLTcxIDE2LTg2LTM0LTg2LTM0LTEyLTMwLTI4LTM3LTI4LTM3LTI0LTE2IDEtMTYgMS0xNiAyNiAyIDQwIDI2IDQwIDI2IDIyIDM5IDU5IDI4IDc0IDIyIDItMTcgOS0yOCAxNi0zNS01Ny02LTExNi0yOC0xMTYtMTI2IDAtMjggMTAtNTEgMjYtNjktMy02LTExLTMyIDMtNjcgMCAwIDIxLTcgNzAgMjYgNDItMTIgODYtMTIgMTI4IDAgNDktMzMgNzAtMjYgNzAtMjYgMTQgMzUgNiA2MSAzIDY3IDE2IDE4IDI2IDQxIDI2IDY5IDAgOTgtNjAgMTIwLTExNyAxMjYgMTAgOCAxOCAyNCAxOCA0OGwtMSA3MGMwIDYgMyAxMiAxNiAxMnoiLz48L3N2Zz4=" height="10" alt="GitHub logo"/>
			<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9Im5wbSIgcm9sZT0iaW1nIgp2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QKd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiCnJ4PSIxNSUiCmZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNjYjM4MzciIHN0cm9rZS13aWR0aD0iMjIiIGQ9Im0yMzQgMzExaDIxM3YtMTEySDY1djExMmgxMTNWMjEwbS0xMiAxMjNoOTBNMTMzIDIzMnY2OG0xMTItNjh2NDVtNDUtNjd2OTBtNjctNjh2NjhtNDUtNjh2NjgiLz48L3N2Zz4=" height="10" alt="npm logo"/>
			<span><code>This PDF is generated using https://github.com/martinsluters/resume and md-to-pdf npm package on ${date}.</code></span>
		</section>`
	}
};
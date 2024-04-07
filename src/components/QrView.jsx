import React, { useRef, useState } from "react";
import QRCode from "qrcode.react";
// import html2canvas from "html-to-canvas";
import * as html2canvas from "html-to-image";
import download from "downloadjs";

export const QrView = () => {
  const [url, setURL] = useState("https://www.quizprotecso.com");
  const [urlCode, setURLCode] = useState(true);

  const qrCodeRef = useRef(null);
  const qrCodeRefSmall = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(url);
    // setURLCode(true);
  };
  console.log(html2canvas);

  const handleDownload = (e) => {
    e.preventDefault();
    html2canvas
      .toCanvas(qrCodeRef.current)
      .then((canvas) => {
        // Convertir el canvas a una imagen base64
        const qrCodeUrl = canvas.toDataURL("image/png");

        // Descargar la imagen
        download(qrCodeUrl, "qrcode_protecsoXL.png");
        html2canvas
          .toCanvas(qrCodeRefSmall.current)
          .then((canvas) => {
            // Convertir el canvas a una imagen base64
            const qrCodeUrl = canvas.toDataURL("image/png");

            // Descargar la imagen
            download(qrCodeUrl, "qrcode_protecsoSM.png");
          })
          .catch((error) => {
            console.error("Error al generar QR Code:", error);
          });
      })
      .catch((error) => {
        console.error("Error al generar QR Code:", error);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold">QrView</h2>
        <div className="flex flex-col justify-center items-center gap-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[400px] border-solid border-[1px] border-slate-600 rounded-xl p-4"
          >
            <label
              htmlFor="urlcode"
              className="font-bold text-black text-xl mb-3 block"
            >
              Ingrese la URL
            </label>
            <input
              className="w-full p-2 rounded-sm mb-3 border-[1px] border-solid border-slate-600 text-black"
              id="urlcode"
              type="url"
              required
              value={url}
              onChange={(e) => setURL(e.target.value)}
              placeholder="url"
            />
            <button
              type="submit"
              className="font-bold text-white text-md w-full bg-red-600 rounded-md py-2 text-center"
            >
              Generar QR
            </button>
          </form>
          <button
            type="button"
            className="font-bold text-white text-md w-[120px] bg-red-600 rounded-md py-2 text-center"
            onClick={handleDownload}
          >
            download
          </button>
          <div>
            <div ref={qrCodeRef}>
              <QRCode value={url} size={1000} />
            </div>
            <br />
            <div ref={qrCodeRefSmall} className="w-fit">
              <QRCode value={url} size={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

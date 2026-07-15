"use client";

import { useEffect } from "react";

export default function DoctoraliaWidget() {
  useEffect(() => {
    const id = "zl-widget-s";
    if (!document.getElementById(id)) {
      const js = document.createElement("script");
      js.id = id;
      js.src = "//platform.docplanner.com/js/widget.js";
      const fjs = document.getElementsByTagName("script")[0];
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        document.head.appendChild(js);
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <a 
        id="zl-url" 
        className="zl-url" 
        href="https://www.doctoralia.com.mx/david-ernesto-hernandez-torres/cirujano-general/ciudad-de-mexico" 
        rel="nofollow" 
        data-zlw-doctor="david-ernesto-hernandez-torres" 
        data-zlw-type="big_with_calendar" 
        data-zlw-opinion="false" 
        data-zlw-hide-branding="true" 
        data-zlw-saas-only="true" 
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Cargando calendario de citas de Doctoralia...
      </a>
    </div>
  );
}

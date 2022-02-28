import React from "react";
import { SvgIcon } from "@mui/material";

export default function MeloLogo(props) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 139.25 142.04"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M69.62,0C31.17,0,0,31.8,0,71s31.17,71,69.62,71,69.63-31.8,69.63-71S108.08,0,69.62,0Zm0,115c-23.8,0-43.1-19.69-43.1-44s19.3-44,43.1-44,43.11,19.68,43.11,44S93.43,115,69.62,115Z"
        style={{ fill: "#ef3b36" }}
      />
    </SvgIcon>
  );
}

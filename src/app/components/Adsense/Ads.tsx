import React from "react";
import { Adsense } from "@ctrl/react-adsense";

export default function Ads({ clientId, slot }: {clientId: string, slot: string}) {
  return (
    <div className="text-center adsbygoogle my-3">
      <Adsense
        client={`ca-pub-${clientId}`}
        slot={slot}
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}

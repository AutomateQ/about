"use client";

export default function CalendlyEmbed() {
  // Replace this URL with your actual Calendly link
  const calendlyUrl = "https://calendly.com/automateq/discovery";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <iframe
        src={`${calendlyUrl}?embed_domain=automateq.io&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1`}
        title="Book a discovery call"
        className="w-full"
        style={{ height: "650px", border: "none" }}
      />
    </div>
  );
}

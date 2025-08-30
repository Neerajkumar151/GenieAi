import React from "react";

const logoUrls = [
  "https://imgs.search.brave.com/BqmCoXiZB7Ip4ksPkq9DtJz_Tw9jT0chmd64w0Rfzt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96b25l/LXd3dy1kb3QtcjF2/YTZhYTl4LXN1cGFi/YXNlLnZlcmNlbC5h/cHAvX25leHQvaW1h/Z2U_dXJsPS9pbWFn/ZXMvY3VzdG9tZXJz/L2xvZ29zL2xpZ2h0/L21lbmRhYmxlYWku/cG5nJnc9Mzg0MCZx/PTc1",
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
];

const CompanyMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Scrolling logos with mask fade */}
      <div className="flex animate-marquee gap-16 mask-fade">
        {[...logoUrls, ...logoUrls].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Company logo"
            className="h-10 w-auto mx-8 opacity-90 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyMarquee;

import Image from "next/image";

export default function PageLoader({ label = "Loading" } = {}) {
  return (
    <div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      <div className="page-loader__glow" aria-hidden="true" />
      <div className="page-loader__grain" aria-hidden="true" />

      <div className="page-loader__inner">
        <div className="page-loader__logo-wrap">
          <Image
            src="/images/FMP-Flooring-fiNAL-lOGO-White-1-227x300.png"
            alt="FMP Flooring"
            width={227}
            height={300}
            priority
            className="page-loader__logo"
          />
        </div>

        <div className="page-loader__bar" aria-hidden="true">
          <span className="page-loader__bar-fill" />
        </div>

        <p className="page-loader__text">
          loading
          <span className="page-loader__dots">
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
}

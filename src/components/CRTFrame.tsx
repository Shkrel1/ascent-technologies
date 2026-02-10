interface Props {
  label?: string;
  children: React.ReactNode;
}

export default function CRTFrame({ label, children }: Props) {
  return (
    <div className="crt-frame">
      {label && <div className="crt-frame__label">{label}</div>}
      <div className="crt-frame__screen">
        {children}
        <div className="crt-frame__scanlines" aria-hidden="true" />
        <div className="crt-frame__vignette" aria-hidden="true" />
      </div>
      <div className="crt-frame__led" aria-hidden="true" />
    </div>
  );
}

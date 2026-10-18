import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import GoogleMaps from "../icons/google-maps.tsx";
import Logo from "../icons/logo.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="font-dm text-2xl lg:text-3xl text-primary-200 tracking-wide">
            Sala Okolicznościowa <br />
            <span className="text-primary-100">Zwierzyniec</span>
          </a>
          <p className="tracking-tight text-base lg:text-[18px] lg:leading-[28px] font-jost text-text-gray">
            Eleganckie przyjęcia okolicznościowe i wesela. Wszystkie potrawy przygotowujemy na miejscu we własnej kuchni.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href="https://www.facebook.com/p/Okoliczno%C5%9Bciowa-Sala-w-Zwierzy%C5%84cu-61573813744817/">
              <Facebook />
            </a>
            <a href="https://maps.app.goo.gl/ATD7JSrNUnzq5Uit5">
              <GoogleMaps />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">

          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Nawigacja
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              O nas
            </a>
            <a
              href="/"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Oferta
            </a>
            <a
              href="/events"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Uroczystości
            </a>
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Kontakt
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Kontakt
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Zwierzyniec 11
              <br />05 - 250 Radzymin
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              sala.zwierzyniec@wp.pl
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              789 337 275
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;

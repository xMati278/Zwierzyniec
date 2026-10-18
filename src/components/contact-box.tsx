import Facebook from "../icons/facebook.tsx";
import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-[#D8B38A] text-white rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        <div className="w-[52px] h-[52px] rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#CDA274] flex-shrink-0">
          <Mail />
        </div>
        <span>sala.zwierzyniec@wp.pl</span>
      </h5>

      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        <div className="w-[52px] h-[52px] rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#CDA274] flex-shrink-0">
          <Phone />
        </div>
        <span>789 337 275</span>
      </h5>
    </div>
  );
};

export default ContactInfo;
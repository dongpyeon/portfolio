import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import  myprofile from "../../../public/images/Profile/myprofile.jpg";
import { DataProps } from "@/types";
import Image from "next/image";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div>
          <Image
            src="/images/Profile/myprofile.jpg"
            alt="myprofile"
            width="200"
            height="200"
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-soli "
          />
          <h1 className="leading-[1.15]">
            {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
            안녕하세요,
            <br /> 개발자를 꿈꾸는{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
          <div className="flex gap-1">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;

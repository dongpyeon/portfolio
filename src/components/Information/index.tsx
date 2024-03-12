import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import { DataProps } from "@/types";
import Image from "next/image";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8"> {/* 여기서 flex 및 items-center를 사용하여 이미지와 내용을 수평으로 정렬합니다 */}
        <div>
          <Image
            src="/images/Profile/myprofile.jpg"
            alt="myprofile"
            width="230"
            height="230"
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-soli"
          />
        </div>
        <div>
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

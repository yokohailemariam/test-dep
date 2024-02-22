import { CategoryType } from "@/lib/types";
import { BrightLogo } from "@/lib/utils/assets";
import Image from "next/image";
import Link from "next/link";

const Categories: React.FC<CategoryType> = ({ title, id, imageUrl }) => {
  return (
    <Link
      href={`/category/${Number(id)}`}
      className="w-full p-2 group"
      key={id}
    >
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl">
        <Image
          src={imageUrl || BrightLogo}
          alt={title}
          className="w-full h-36 md:h-48  object-cover rounded-xl transition-all duration-300 group-hover:scale-110"
          width={100}
          height={100}
          blurDataURL={BrightLogo}
        />
      </div>
      <div className="p-1 md:p-2">
        <h3 className="text-sm md:text-xl mb-2 line-clamp-2 group-hover:text-blue-900 transition-all duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Categories;

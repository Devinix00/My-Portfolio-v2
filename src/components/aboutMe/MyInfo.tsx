import { Link } from "react-router-dom";
import { aboutMe } from "../../constants/aboutMe";

export default function MyInfo() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12">
      {aboutMe.map((el) => (
        <div className="flex gap-2 md:gap-4">
          <div>{el.icon}</div>
          <section className="flex flex-col gap-1">
            <p className="text-xl font-semibold">{el.title}</p>
            {el.isLink ? (
              <Link to={el.content} target="_BLANK">
                <p className="md:w-[75%] hover:underline lg:w-full whitespace-normal text-sm text-ellipsis overflow-hidden text-blue_light">
                  {el.content}
                </p>
              </Link>
            ) : (
              <p className="text-sm">{el.content}</p>
            )}
          </section>
        </div>
      ))}
    </div>
  );
}

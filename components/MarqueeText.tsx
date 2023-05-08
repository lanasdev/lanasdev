import cn from "classnames";

const MarqueeText = ({ text = "Lorem ipsum dolor sit amet." }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="block translate-x-[calc(-25%+20vw)] animate-marquee">
        {[...Array(10)].map((u, i) => (
          <span key={i} className=" whitespace-nowrap px-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;

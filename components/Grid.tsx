import { FaLocationArrow } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="max-w-4xl mx-auto">
                {[{
                    title: "The Dawn of Innovation",
                    description: "Explore the birth of groundbreaking ideas and inventions.",
                    header: <Skeleton />,
                    icon: <FaLocationArrow />,
                }].map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default Grid;
import { FaLocationArrow } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid;
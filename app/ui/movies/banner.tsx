import { createImageUrl } from "@/app/lib/utils"
import styles from '@/app/ui/movies/banner.module.css'
import Favorite from "@/app/ui/movies/card/favorite";
import Rate from "@/app/ui/movies/card/rate";
import { ibmPlexSans } from "@/app/ui//fonts";
import { BannerProps } from "@/app/lib/definitions";

export default function Banner({
    imagePath,
    title,
    description,
    rate
}: BannerProps) {
    const imgSrc = createImageUrl('original', imagePath)

    return (
        <section
            className={styles.banner}
            style={{ backgroundImage: `url(${imgSrc})` }}
        >
            <div className={styles.banner__container}>
                <div className={styles.banner__container__information}>
                    <article
                        style={ibmPlexSans.style}
                    >
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {description}
                        </p>
                    </article>
                    <div className={styles.banner__container__information__actions}>
                        <Favorite />
                        <Rate
                            value={rate}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
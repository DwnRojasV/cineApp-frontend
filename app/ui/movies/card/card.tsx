import { createImageUrl, formatDate } from '@/app/lib/utils';
import { inter, ibmPlexSans } from '@/app/ui/fonts';
import Image from 'next/image'
import Rate from '@/app/ui/movies/card/rate';
import styles from '@/app/ui/movies/card/card.module.css'
import Favorite from '@/app/ui/movies/card/favorite';

export function Card({
    posterPath,
    imgAlt = "",
    title = "Title",
    date = "1900-01-01"
}: {
    posterPath: string,
    imgAlt: string,
    title: string,
    date: string
}) {
    const strings = {
        rating: 'Rating',
        favorites: 'Favorites',
    }
    const height = 223;
    const width = 200;
    const widthSrc = 342
    const imgSrc: string = createImageUrl(widthSrc, posterPath)
    console.log(imgSrc);


    return <div className={`${inter.className} ${styles.card}`}>
        <Image
            src={imgSrc}
            alt={imgAlt}
            height={height}
            width={width}
            className={styles.card__image}
        />
        <article className={styles.card__information}>
            <h3 className={ibmPlexSans.className}>
                {title}
            </h3>
            <p>{formatDate(date)}</p>
            <footer className={styles.card__information__footer}>
                <div className={styles.card__information__footer__container}>
                    <span>{strings.rating}</span>
                    <Rate
                        value={0.704}
                        size={25}
                    />
                </div>
                <div className={styles.card__information__footer__container}>
                    <span>{strings.favorites}</span>
                    <Favorite/>
                </div>
            </footer>
        </article>
    </div>
}

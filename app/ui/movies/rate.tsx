"use client"
import { RateProps } from "@/app/lib/definitions"
import { calculateFontSize, getColor } from "@/app/lib/utils";
import { useState, useEffect } from "react"
import styles from './rate.module.css'
import { ibmPlexSans } from "@/app/ui/fonts";

export default function Rate({
    size = 100,
    value = 0
}: RateProps) {
    const strokeWidth = size * 0.05
    const isDecimal = value <= 1;
    const initialValue = isDecimal ? Math.round(value * 100) : Math.round(value);
    const [rating, setRating] = useState(initialValue);

    useEffect(() => {
        const updatedValue = isDecimal ? Math.round(value * 100) : Math.round(value);
        setRating(updatedValue)
    }, [value, isDecimal])

    const radius = (size - strokeWidth) / 2;
    const circunference = 2 * Math.PI * radius;
    const progress = isDecimal
        ? value * circunference
        : (value / 100) * circunference;
    const center = size / 2;
    const strokeOpacity = 0.5
    const fontSize = calculateFontSize(size, 0.33)

    return (
        <div className={styles.rating}>
            <div className={styles.rating__container}>
                <svg
                    width={size}
                    height={size}
                    className={styles.rating__container__svg}
                >
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={getColor(rating, strokeOpacity)}
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={getColor(rating, 1)}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circunference}
                        strokeDashoffset={circunference - progress}
                        className={styles.rating__container__svg__progress}
                    />
                </svg>
                <span
                    className={styles.rating__container__porcentage}
                    style={{ ...ibmPlexSans.style, fontSize: `${fontSize}px` }}>
                    {`${rating}%`}
                </span>

            </div>
        </div>
    )
}
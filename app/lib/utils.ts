
export function createImageUrl(imageHeight: number | string, imageWidth: number | string, path: string) {
    const { TMDB_IMAGE_HOST } = process.env;
    return `${TMDB_IMAGE_HOST}w${imageWidth}_and_h${imageHeight}bestv2${path}`
}

export function formatDate(date: string) {
    const oldDate = new Date(date);
    const month = oldDate.toLocaleDateString('en-Us', { month: 'long' });
    const day = oldDate.getUTCDate();
    const year = oldDate.getUTCFullYear()
    const newDate = `${month} ${day}, ${year}`
    return newDate;
}

export function getColor(
    value: number = 0,
    opacity: number = 1
) {
    if (value >= 70) return `rgba(var(--succes), ${opacity})`;
    if (value >= 50) return `rgba(var(--warning), ${opacity})`;
    return `rgba(var(--danger), ${opacity})`
}

export function calculateFontSize(size: number, porcentage: number) {
    return size * porcentage
}
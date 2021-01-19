import React from 'react'

export const Format = ( number ) => `${number.toLocaleString('de-DE')} ₫`

export default function formatPrice(props) {
    const { price } = props
    return <>{`${price.toLocaleString('de-DE')} ₫`}</>
}

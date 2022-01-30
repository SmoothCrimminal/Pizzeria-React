import React from 'react'
import wrongAddress from '../../img/404.jpg'
import { Image } from 'react-bootstrap'

export function Handle404() {
    return (
        <Image src={wrongAddress} width='100%' height='100%'></Image>
    )
}

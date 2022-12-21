import { useState, useEffect } from "react"
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKEyboard"
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
}


export const TextureSelector = () => {
    const [visible, setVisitable] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
        }
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if(pressedTexture) {
            console.log('pressed', pressedTexture[0]);
            setTexture(pressedTexture[0])
        }
    },[setTexture, dirt,grass,glass,wood,log])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisitable(false)
        }, 2000)
        setVisitable(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    },[activeTexture])

    return visible && (
        <div className='absolute center texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
    )
}
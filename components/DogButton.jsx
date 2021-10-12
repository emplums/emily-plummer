
import React, {useState, useEffect} from 'react'
import Button from  './Button'
import styled from 'styled-components'

const StyledImage = styled.img`
    max-width: 500px;
    max-height: 500px;
`


const DogButton = ({isHalloween}) => {
    const [dogUrl, setDogUrl] = useState('')
    const getDog = async () => {
        if (isHalloween) {
            console.log(isHalloween)
            const randomNumber = Math.floor(Math.random() * 6) + 1
            return setDogUrl(`/dog-halloween-${randomNumber}.jpg`)
        }
        console.log('hi')
        const dogResponse = await fetch(`https://dog.ceo/api/breed/husky/images/random`)
        const dogData = await dogResponse.json();
        setDogUrl(dogData.message)
    }

    const clearDogs = () => setDogUrl('')

    useEffect(() => clearDogs(), [isHalloween])
    return (
        <>
            <Button onClick={getDog} style={{display: 'block', margin: '4px'}}>get a dog</Button>
            {dogUrl.length > 1 && <Button onClick={clearDogs} style={{display: 'block', margin: '4px'}}>no more dogs please</Button>}
            {dogUrl.length > 1 && <StyledImage src={dogUrl}  alt= "a dog"/>}
        </>
    )
}

export default DogButton
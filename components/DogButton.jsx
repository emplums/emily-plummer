
import React, {useState} from 'react'
import Button from  './Button'

const DogButton = ({isHalloween}) => {
    const dogBreed = isHalloween ? 'borzoi' : 'husky'
    const [dogUrl, setDogUrl] = useState('')
    const getDog = async () => {
        const dogResponse = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        const dogData = await dogResponse.json();
        console.log(dogData)
        setDogUrl(dogData.message)
    }

    const clearDogs = () => setDogUrl('')
    return (
        <>
            <Button onClick={getDog} style={{display: 'block', margin: '4px'}}>get a dog</Button>
            {dogUrl.length > 1 && <Button onClick={clearDogs} style={{display: 'block', margin: '4px'}}>no more dogs please</Button>}
            {dogUrl.length > 1 && <img src={dogUrl}  alt= "a dog"/>}
        </>
    )
}

export default DogButton
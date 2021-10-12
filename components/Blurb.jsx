import React, {useState} from 'react'
import styled from 'styled-components'
import {Text, DogButton, Link} from '.'

const calcTime = (type, diff) => {
    const divisorMap = {
        'miliseconds': diff,
        'seconds': Math.floor(diff / 1000),
        'minutes': Math.floor((diff / 1000) / 60),
        'hours': Math.floor(((diff / 1000) / 60) / 60),
        'days': Math.floor((((diff / 1000) / 60) / 60) / 24),
        'months': Math.floor(((((diff / 1000) / 60) / 60) / 24) / 30),
        'years': Math.floor((((((diff / 1000) / 60) / 60) / 24) / 30) / 12)
    }
    return divisorMap[type].toLocaleString()
}

const getExperience = (timeType) => {
    const dStarted = new Date(2014,9,1).getTime();
    const dNow = Date.now();
    const difference = dNow - dStarted;
    return calcTime(timeType, difference)
    
}

const StyledBlurb = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 45px;
    margin-top: 20px;
`

const StyledSelect = styled.select`
    margin-left: 2px;
`

const TimeSelect = ({value, onChange}) => {
    return (
        <StyledSelect name="time" value={value} onChange={(e) => onChange(e)} id="time-select">
            <option value="years">years</option>
            <option value="months">months</option>
            <option value="days">days</option>
            <option value="hours">hours</option>
            <option value="seconds">seconds</option>
            <option value="miliseconds">miliseconds</option>
        </StyledSelect>
    )
}

const Blurb = ({themeName}) => {
    const [timeType, setTimeType] = useState('years')
    const handleChange = (e) => {
        setTimeType(e.target.value)
    }
    const isHalloween = themeName === 'halloween'

    return (
        <StyledBlurb>
            <Text>I am a Senior Software Engineer</Text>
            <Text>I specialize in Design Systems & Front End Engineering</Text>
            <Text>I have {getExperience(timeType)} <TimeSelect value={timeType} onChange={handleChange}/> of experience</Text>
            <Text>I&apos;ve worked as a Design Systems Engineer at GitHub, and a Front End Engineer at Buffer, Opal, and Experts Exchange.</Text>
            <Text>I love community, and in the past I founded and ran <Link href="https://donutjs.club">Donut.js</Link> (a tech meetup) and <Link href="https://plantconf.com">PlantConf</Link> (a parody tech conference about plants).</Text>

            {isHalloween && 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AxcM3nCsglA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }

            <DogButton isHalloween={isHalloween}/>
        </StyledBlurb>
    )
}

export default Blurb
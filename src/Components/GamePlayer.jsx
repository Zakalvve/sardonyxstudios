import React, { useState } from 'react';
import UnityGameEmbed from './UnityGameEmbed';
import Button from './UI/Button';

const GamePlayer = ({config}) => {
    const [play, setPlay] = useState(false);

    const handleClickPlay = () => {
        setPlay(true);
    }

    const style = play ? 'relative flex flex-col bg-black w-full' : 'flex bg-black w-full aspect-video items-center';

    return (
        <div className={style}>
            {play ? (
                <UnityGameEmbed className='w-full relative' config={config} />
            ) : (<Button className='max-h-12 mx-auto' onClick={handleClickPlay}>Play</Button>)}
        </div>
    );
}
export default GamePlayer;
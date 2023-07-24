import React from 'react';
import './Project.css';
import { Icon } from '@iconify/react';
const Project = () => {
    return (
        <section>
        <div className='box' style={{background:'black'}}>
        <div className='container'style={{background:'black'}}>
            <h1 >Project</h1>
            <div className='portfolio-contant'>
                <div className='row'>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/022/606/145/small/robot-in-headphones-generative-ai-free-photo.jpeg' alt=''></img>
                    <div className='layer'>
                        <h2>Robotfrinds</h2>

                        <a href='https://sujatakuma.github.io/Robotfrinds/'><Icon icon="bx:link-external" /></a>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://cutewallpaper.org/28/desktop-wallpaper-turns-black/27682358.jpg' alt=''></img>
                    <div className='layer'>
                    <h2>Background Generator</h2>

                        <a href='https://sujatakuma.github.io/backg.github.io'><Icon icon="bx:link-external" /></a>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/025/185/938/small/birthday-cake-ablaze-with-candles-sweet-indulgence-generated-by-ai-photo.jpg' alt=''></img>
                    <div className='layer'>
                        

                        <h2>Cake website</h2>
                        

                        <a href='https://sujatakuma.github.io/spcele/'><Icon icon="bx:link-external" /></a>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K6gK-wz3VjkoaxgU7ZfAmE0LXLyz0nMsC1zHW4dSHE8XcpVm6Fpw6qHzydVdsNSNE4Q&usqp=CAU' alt=''></img>
                    <div className='layer'>
                        <h2>Clock</h2>

                        <a href='https://sujatakuma.github.io/www-watch.github.io/'><Icon icon="bx:link-external" /></a>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY89aOORkEqgzjqKj_GvqTSIr-Fpb5vEDvIw&usqp=CAU' alt=''></img>
                    <div className='layer'>
                        <h2>Calculator</h2>

                        <a href='https://sujatakuma.github.io/Calculator/'><Icon icon="bx:link-external" /></a>
                    </div>
                </div>
                <div className='row'>
                    <img src="https://c4.wallpaperflare.com/wallpaper/246/462/453/laptop-macbook-iphone-apple-wallpaper-preview.jpg" alt=''></img>
                    <div className='layer'>
                        <h2>Samrat Restaurant</h2>

                        <a href='https://sujatakuma.github.io/resturent.github.io/'><Icon icon="bx:link-external" /></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Project

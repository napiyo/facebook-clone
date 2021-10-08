import React from 'react'
import './stylesheets/HomeFeed.css';
import HomeReels from './HomeReels'
import CreatePost from './CreatePost';
import Post from './Post';
export default function HomeFeed() {
    return (
        <div className='HomeFeed'>
                <HomeReels  />
                <CreatePost />
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
        </div>
    )
}

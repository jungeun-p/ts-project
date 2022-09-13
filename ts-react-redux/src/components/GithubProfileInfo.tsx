import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileProps = {
    name: string;
    thumbnail: string;
    bio: string;
    blog: string;
}

const GithubProfileInfo = ({ name, thumbnail, bio, blog }: GithubProfileProps) => {
    return (
        <div className="GithubProfileInfo">
            <div className="profile-head">
                <img src={thumbnail} alt="user thumbnail"/>
                <div className="name">{name}</div>
            </div>
            <p>{bio}</p>
            <div>{blog !== '' && <a href={blog}>blog</a>}</div>
        </div>
    );
};

export default GithubProfileInfo;
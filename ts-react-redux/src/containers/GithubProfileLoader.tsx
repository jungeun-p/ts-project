import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GithubProfileInfo from '../components/GithubProfileInfo';
import GithubUsernameForm from '../components/GithubUsernameForm';
import { RootState } from '../modules';
import { getUserProfileAsync, getUserProfileThunk } from '../modules/github';

const GithubProfileLoader = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.Github.userProfile);
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileAsync.request(username));
    }
    return (
        <>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
            {loading && <p style={{ textAlign: 'center' }}>loading...</p>}
            {error && <p style={{ textAlign: 'center'}}>error!</p>}
            {data && <GithubProfileInfo bio={data.bio} blog={data.blog} name={data.name} thumbnail={data.avatar_url} />}
        </>
    );
};

export default GithubProfileLoader;
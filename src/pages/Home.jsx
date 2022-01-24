import React from 'react';
import { useNavigate } from 'react-router';
import { useQuery } from '../utils/Hooks';


function Home(props) {

    const navigate = useNavigate();
    const query = useQuery();

    const likePost = (post_id)=>{
        let from = {
            pathname: '/signin',
            search: '?post='+query.get('post')
        }
        navigate('/signin', { state:{ search:'?post='+query.get('post'), from:'like'} });
    }

    return (
        <div>
            <button onClick={()=>likePost(1)}>Like the post</button>
        </div>
    );

}

export default Home;
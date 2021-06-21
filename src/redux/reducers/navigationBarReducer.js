import Svg from "../../Components/Svg/Svg";

const initialState = {
    navList: [
        {id: 1, text: 'My profile', count: 0, finishItem: false, icon: <Svg name='profile'/>},
        {id: 2, text: 'News', count: 23, finishItem: false, icon: <Svg name='news'/>},
        {id: 3, text: 'Messages', count: 10, finishItem: false, icon: <Svg name='messages'/>},
        {id: 4, text: 'Friends', count: 2, finishItem: false, icon: <Svg name='friends'/>},
        {id: 5, text: 'Communities', count: 0, finishItem: false, icon: <Svg name='communities'/>},
        {id: 6, text: 'Photos', count: 0, finishItem: false, icon: <Svg name='photos'/>},
        {id: 7, text: 'Music', count: 0, finishItem: false, icon: <Svg name='music'/>},
        {id: 8, text: 'Videos', count: 0, finishItem: false, icon: <Svg name='videos'/>},
        {id: 9, text: 'Clips', count: 0, finishItem: false, icon: <Svg name='clips'/>},
        {id: 10, text: 'Games', count: 0, finishItem: true, icon: <Svg name='games'/>},
        {id: 11, text: 'Mini Apps', count: 0, finishItem: false, icon: <Svg name='miniApps'/>},
        {id: 12, text: 'VK pay', count: 0, finishItem: false, icon: <Svg name='vkPay'/>},
        {id: 13, text: 'Jobs', count: 4990, finishItem: true, icon: <Svg name='jobs'/>},
        {id: 14, text: 'Market', count: 9090, icon: <Svg name='market'/>},
        {id: 15, text: 'Bookmarks', count: 0, finishItem: false, icon: <Svg name='bookmarks'/>},
        {id: 16, text: 'Files', count: 1000, finishItem: false, icon: <Svg name='files'/>}

    ]
}

const navigationBarReducer = (state = initialState, action) => {
    return state;
}


export default navigationBarReducer;
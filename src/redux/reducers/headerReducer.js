const SEARCH_FRIENDS = 'SEARCH-FRIENDS';

const img = 'https://sun6-21.userapi.com/s/v1/if1/zA4OCU9To5-AIfv9RcmTPS_cMdT_zurXTvKRVP2aUXwHyhn4Fl2TdaY8Q59Asm2mrI5YqcGy.jpg?size=50x0&quality=96&crop=256,157,290,290&ava=1';
const initialState = {
    profileImg: img,
    profileName: 'Dmitry',
    profileSurname: 'Deryugin',
    notificationsCounter: 0,
    maxShowFriend: 7,
    friends: [
        {id: 1, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: 'Tver'},
        {id: 2, avatar: img, name: 'asdfsd', surname: 'petrov', studyPlace: 'Sbp', city: ''},
        {id: 3, avatar: img, name: 'Vasdfasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'asdfsdf', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'asdfsd', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
        {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},

    ],
    foundFriends: {
        showResults: false,
        friends: [
            {id: 1, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: 'Tver'},
            {id: 2, avatar: img, name: 'Oleg', surname: 'petrov', studyPlace: 'Sbp', city: ''},
            {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
            {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
            {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
            {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},
            {id: 3, avatar: img, name: 'Vasia', surname: 'Vasia', studyPlace: '', city: ''},]
    }
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FRIENDS:

            if (!action.subtext) {
                return {
                    ...state,
                    foundFriends: {
                        showResults: false,
                        friends: state.friends.slice(0, state.maxShowFriend)
                    }
                }
            }
            let foundFriends = [];
            let counter = state.maxShowFriend;

            for (let friend of state.friends) {
                if (counter === 0) {
                    break;
                }
                if (friend.name.toLowerCase().search(action.subtext) !== -1
                    && friend.surname.toLowerCase().search(action.subtext) !== 1) {
                    counter--;
                    foundFriends.push(friend);
                }
            }

            return {
                ...state,
                foundFriends: {
                    showResults: true,
                    friends: foundFriends
                },
            }
        default:
            return state;
    }
}

export const searchFriends = (subtext) => {
    return {type: SEARCH_FRIENDS, subtext: subtext.toLowerCase()}
}

export default headerReducer
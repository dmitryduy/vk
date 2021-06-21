const imgs = [
    'https://sun6-20.userapi.com/s/v1/if2/GR_lp66XPhnUq4h5zSaqajSrkYS5ge3mbgfoKbnBegypXFyi-P7c9o0PyVEkY-e4yzek-N99CfcozWyNwDBr5TTV.jpg?size=100x0&quality=96&crop=1,473,1212,1212&ava=1',
    'https://sun6-23.userapi.com/s/v1/if1/-rMLw--7HctT4WVi0JGNFo8L9xJTQYtBtzDObCa-y9cgvDR7Ex0SLPBNYIYmK50fJ5dfzaxE.jpg?size=100x0&quality=96&crop=280,360,884,884&ava=1',
    'https://sun6-21.userapi.com/s/v1/ig2/QUc8NqbfSslOHBBBUhresRJdmHDTbPUO4lWpc5BDnVxrj7ap2x6_FDLExbHF0uC9P8fs1FwOU37iWsGjnahyVX1L.jpg?size=100x0&quality=96&crop=2,2,489,489&ava=1',
    'https://sun6-23.userapi.com/s/v1/ig2/L0TndmnaU2WOaOv72m1ZWJXTN1-DhDCO0c3YAR3ESPQqsXEwIXvUfrTQQk19rmgLJog9EtqxRoZOFqvauS_exQGO.jpg?size=100x0&quality=96&crop=277,1,945,945&ava=1',
    'https://sun6-21.userapi.com/s/v1/ig2/oy1hFdF8_aSWWiVJ1SjH6lqEzAimv9yREY5pey9eYl3caIH6d7687Wo52iLLKXYpqw76zCnVp_sKkuscZZ2BW4RD.jpg?size=100x0&quality=96&crop=0,62,579,579&ava=1',
    'https://sun6-20.userapi.com/s/v1/ig2/OE7pLuMCzz1G_4PScaawjw0QHZ5jiLoNr-TqzRWZa5qdMVSW8eNjYhhzXcALbhJvBKGjRSI_T1SB_N8cxQjNg73r.jpg?size=100x0&quality=96&crop=128,259,600,600&ava=1',
    'https://sun6-21.userapi.com/s/v1/ig1/Ty9Z_kNsIa0w4MhMqDsy32Fr7AK9L_aWHk3ScfTVfvRNVClRr5Nk_psS9-u6hAbKw7V5CZcg.jpg?size=100x0&quality=96&crop=49,0,480,480&ava=1',
    'https://sun6-23.userapi.com/s/v1/ig2/M6zTqPEb2eOxr4_igvt27bYCrv579Yt13kDyHkR4m7Dl-FvSy1HIgznw9fz2uBplnQUtpjaT-MTkU-E8JfXJt71l.jpg?size=50x0&quality=95&crop=0,0,2000,2000&ava=1',
];

const initialState = {
    dialogs: [
        {
            id: 1,
            type: 'dialog',
            name: 'Олег Петров',
            avatar: imgs[0],
            messages: [
                {id: 1, message: 'привет'},
                {id: 1, message: 'Как дела?'},
                {id: 0, message: 'хорошо'}
            ],
            time: '5:40pm',
            muted: false,
            messagesCount: 0
        },
        {
            id: 2,
            type: 'dialog',
            name: 'Петя Орлов',
            avatar: imgs[1],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 1, message: 'Ничего так'}
            ],
            time: '5:40pm',
            muted: false,
            messagesCount: 1
        },
        {
            id: 3,
            type: 'dialog',
            name: 'Вася Пупкин',
            avatar: imgs[2],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 3, message: 'Как дела?'},
                {id: 3, message: 'Пошел отсюда'}
            ],
            time: '5:40pm',
            muted: false,
            messagesCount: 2
        },
        {
            id: 4,
            type: 'chat',
            name: 'Клуб анонимных алкаголиков',
            avatar: imgs[3],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 3, message: 'Как дела?'},
                {id: 2, message: 'Я уже бросил'}
            ],
            time: '5:40pm',
            muted: true,
            messagesCount: 20000
        },
        {
            id: 5,
            type: 'dialog',
            name: 'Вениамин Простой',
            avatar: imgs[4],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 3, message: 'Как дела?'},
                {id: 1, message: 'А как же'}
            ],
            time: '5:40pm',
            muted: false,
            messagesCount: 0
        },
        {
            id: 6,
            type: 'dialog',
            name: 'Premius',
            avatar: imgs[5],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 3, message: 'Как дела?'},
                {id: 6, message: 'Я знаю, что я даун'}
            ],
            time: '5:40pm',
            muted: false,
            messagesCount: 0
        },
        {
            id: 7,
            type: 'chat',
            name: 'Rare View',
            avatar: imgs[6],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 3, message: 'Как дела?'},
                {id: 1, message: 'Круто'}
            ],
            time: '5:40pm',
            muted: false,
            messagesCount: 5
        },
        {
            id: 8,
            type: 'dialog',
            name: 'White House',
            avatar: imgs[7],
            messages: [
                {id: 0, message: 'привет'},
                {id: 0, message: 'Как дела?'},
                {id: 3, message: 'Как дела?'},
                {id: 8, message: 'Я так и знал, что премиус даун'}
            ],
            time: '5:40pm',
            muted: true,
            messagesCount: 1
        }
    ]

}


const messagesReducer = (state = initialState, action) => {
    return state;
}

export default messagesReducer;
import { loadRouteLocation } from "vue-router";

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),//2654654654324
            date: new Date().toDateString(),// sat,23,jul
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 1000,//2654654654324
            date: new Date().toDateString(),// sat,23,jul
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 2000,//2654654654324
            date: new Date().toDateString(),// sat,23,jul
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            picture: null, //https://
        },
    ]
})

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Minim nulla culpa pariatur excepteur do sunt consequat non laborum ea elit.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Ex et reprehenderit sit ut culpa quis mollit in officia velit do commodo ipsum occaecat.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Qui aliquip proident et elit aliqua.',
            picture: null,
        },
        {
            id: new Date().getTime() + 3000,
            date: new Date().toDateString(),
            text: 'Velit sit laboris in esse incididunt.',
            picture: null,
        },
    ]
});

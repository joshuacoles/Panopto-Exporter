require('./src').run({
    baseUrl: 'URL',
    credentials: {
        username: 'username',
        password: 'password'
    },
    copyrightAttribution: 'something'
}, [
    {
        targetID: 'algebra',
        folderID: 'folder-id',
    }
])

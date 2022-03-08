let post = {
    title:'How to copy objects in JS',
    tags:['js','react','nextjs'],
    // date: new Date(),
    author:{
        name:'snehal',
        email:'test@test.com'
    },
 };

let newPost = {
    ...post,
    tags: {
        ...post.tags
    },
    author: {
        ...post.author
    },
}
newPost.title = 'I love js'
newPost.tags[0] = 'web-programming'
newPost.author.name = 'Anvi';
console.log(post);
console.log(newPost)
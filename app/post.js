import { PrismaClient } from '@prisma/client'
import { marked } from "marked";
const prisma = new PrismaClient();



export async function getPost(slug){
    //setup our prisma connection
    await prisma.$connect();

    // we will find the first database entry that matches the passed slug
   const foundSlug = await prisma.posts.findFirst({
        where: {
            slug: slug
        }
    })
    let id = foundSlug.id
    //let's extract the title 
    let title = foundSlug.title;
    // using marked, we are going to convert the markdown into HTML so the blog post can render as entered in Markdown. 
    let html = marked(foundSlug.markdown)
    // we need to cleanup our database connection
    prisma.$disconnect();

    // let's send back the slug, the title, and our markdown converted to html 
    return { id, slug, title, html};
}

//when we edit the post we want to return different data including the ID field
export async function getPostEdit(slug){
    //setup our prisma connection
    await prisma.$connect();

    // we will find the first database entry that matches the passed slug
   const foundSlug = await prisma.posts.findFirst({
        where: {
            slug: slug
        }
    })
    let id = foundSlug.id
    //let's extract the title 
    let title = foundSlug.title;
    // since we are editing and not rendering we want to pull the original markdown value stored in the db
    let markdown = foundSlug.markdown
    // we need to cleanup our database connection
    prisma.$disconnect();

    // let's send back the slug, the title, and our markdown converted to html 
    return { id, slug, title, markdown};
}

export async function createPost(post){
    //Prisma connection 
    await prisma.$connect()
    // prisma create
    await prisma.posts.create({
        data: {
            title: post.title,
            slug: post.slug,
            markdown: post.markdown
        }
    })

    // cleanup prisma connection 
    prisma.$disconnect();
    // let's send back the slug we created
    return getPost(post.slug)    
}

export async function updatePost(post){
    //Prisma connection 
    await prisma.$connect()
    // prisma create
    console.log('updatePost id', post.id)
    await prisma.posts.update({
        where: {
            id: post.id
        },
        data: {
            title: post.title,
            slug: post.slug,
            markdown: post.markdown
        }
    })

    // cleanup prisma connection 
    prisma.$disconnect();
    // let's send back the slug we created
    return getPost(post.slug)    
}

export async function deletePost(post){
    await prisma.$connect()
    await prisma.posts.delete({
        where: {
        id: post
        },
    })
    prisma.$disconnect();
    return(post);
}

// async function since we will be loading external data
export async function getPosts(){
// await prisma connection
        await prisma.$connect()
// let's grab all posts using findMany()
// the posts in prisma.posts is the collection we created in Mongo.db
        const allPosts = await prisma.posts.findMany();
// let's cleanup our connection
    prisma.$disconnect();
        // let's see what we are returning
     //  console.log(allPosts)
        return allPosts;
}
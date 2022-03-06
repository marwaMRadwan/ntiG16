const photos = [
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
        albumId: 1,
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
        albumId: 1,
        id: 7,
        title: "officia delectus consequatur vero aut veniam explicabo molestias",
        url: "https://via.placeholder.com/600/b0f7cc",
        thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
        albumId: 1,
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
        albumId: 1,
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
        albumId: 1,
        id: 10,
        title: "beatae et provident et ut vel",
        url: "https://via.placeholder.com/600/810b14",
        thumbnailUrl: "https://via.placeholder.com/150/810b14"
    }
]

const createMyOwnElement = (parent, elementType, classes, txt, attributes=[])=>{
    const el = document.createElement(elementType)
    parent.appendChild(el) 
    if(txt) el.innerText=txt
    if(classes) el.className = classes
    attributes.forEach(attr=>{
        el.setAttribute(attr.attrName, attr.attrVal)
    })
    return el
}
const wrapper = document.querySelector('#wrapper')
const divWrapper = createMyOwnElement(wrapper, 'div', "row", null)
photos.forEach((photo, index)=>{
    const div = createMyOwnElement(divWrapper, "div", "col-md-4 col-12 p-3", null)
    const div1 = createMyOwnElement(div, "div", "border border-primary border-3", null)
    createMyOwnElement(div1, "h3", null, photo.title)
    let attributes = [
        {attrName:"src", attrVal:photo.url},
        {attrName:"id", attrVal:photo.id},
    ]    
    createMyOwnElement(div1, "img", "img-fluid", null, attributes)
})




// const wrapper = document.querySelector('#wrapper')
// const divWrapper = document.createElement("div")
// divWrapper.className = "row"
// wrapper.appendChild(divWrapper) 
// const divWrapper = createMyOwnElement(wrapper, 'div', "row", null)
// photos.forEach((photo, index)=>{
    // let div = document.createElement("div")
    // div.className="col-md-4 col-12 p-3"
    // divWrapper.appendChild(div)
//     const div = createMyOwnElement(divWrapper, "div", "col-md-4 col-12 p-3", null)
//     let div1 = document.createElement("div")
//     div1.classList = "border border-primary border-3"
//     div.appendChild(div1)
//     let h3 = document.createElement("h3")
//     h3.innerText=photo.title
//     div1.appendChild(h3)
//     let img = document.createElement("img")
//     img.setAttribute('src', photo.url)
//     img.className="img-fluid"
//     div1.appendChild(img)
// })


var section=document.getElementById("head");
var div=document.createElement("div")
div.classList.add("container")
section.appendChild(div)




var a=[
    {heading:"Lion",
     content:"The lion is a wild terrestrial animal called the king of the forest.",
     image:"images/Lion.jpg"}]

var b=[     
    {heading1:"Tiger",
     content1:"The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.",
     image1:"images/Tiger.jpg"}]

 var c=[    
    {heading2:"cheetah",
    content2:"The cheetah is the world's fastest land animal and Africa's most endangered big cat.",
    image2:"images/cheetah.jpg"}]

var d=[ 
   {heading3:"Elephant",
    content3:"Elephant ears are full of large blood vessels, which you can actually see on the back of their ears.",
    image3:"images/Elephant.avif"}]
    


a.forEach(function(e){
    var heading=document.createElement("h1")
heading.innerHTML=e.heading
heading.classList.add("mainheading")
div.appendChild(heading)


var para=document.createElement("p")
para.innerHTML=e.content
para.classList.add("content")
div.appendChild(para)


var divimage=document.createElement("div")
divimage.classList.add("div1")
div.appendChild(divimage)

var image=document.createElement("img")
image.setAttribute("src",e.image)
image.classList.add("pic")
divimage.appendChild(image)

})

b.forEach(function(e){
    var heading=document.createElement("h1")
heading.innerHTML=e.heading1
heading.classList.add("mainheading")
div.appendChild(heading)


var para=document.createElement("p")
para.innerHTML=e.content1
para.classList.add("content")
div.appendChild(para)


var divimage=document.createElement("div")
divimage.classList.add("div1")
div.appendChild(divimage)

var image=document.createElement("img")
image.setAttribute("src",e.image1)
image.classList.add("pic")
divimage.appendChild(image)

})

c.forEach(function(e){
    var heading=document.createElement("h1")
heading.innerHTML=e.heading2
heading.classList.add("mainheading")
div.appendChild(heading)


var para=document.createElement("p")
para.innerHTML=e.content2
para.classList.add("content")
div.appendChild(para)


var divimage=document.createElement("div")
divimage.classList.add("div2")
div.appendChild(divimage)

var image=document.createElement("img")
image.setAttribute("src",e.image2)
image.classList.add("pic1")
divimage.appendChild(image)

})

d.forEach(function(e){
    var heading=document.createElement("h1")
heading.innerHTML=e.heading3
heading.classList.add("mainheading")
div.appendChild(heading)


var para=document.createElement("p")
para.innerHTML=e.content3
para.classList.add("content")
div.appendChild(para)


var divimage=document.createElement("div")
divimage.classList.add("div1")
div.appendChild(divimage)

var image=document.createElement("img")
image.setAttribute("src",e.image3)
image.classList.add("pic2")
divimage.appendChild(image)

})
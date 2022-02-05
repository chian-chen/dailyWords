// class PreviewNode{
//     constructor(imgID){
//         this.node = document.createElement("div");
//         this.node.classList += "w3-col l2 m2 s3";
//         let a = document.createElement("a");
//         a.href = '#SHOWCASE';
//         let img = document.createElement("img");
//         img.classList += imgID%12 === 1? "photo selected": "photo";
//         img.id = imgID;
//         img.src = './imgs/'+ imgID + '.JPG';
//         a.appendChild(img);
//         this.node.appendChild(a);
//     }
//     get P_Node(){
//         return this.node;
//     }
// }

// const preview = document.getElementById("CONTAINER");

// for(let i=1; i<=12; i++){
//     let node = new PreviewNode(i);
//     preview.appendChild(node.P_Node);
// }

// const bar = document.getElementById("BAR");


// class AlbumNode{
//     constructor(id){
//         this.node = document.createElement('button');
//         this.node.classList += "w3-button w3-sand2 w3-circle";
//         this.node.innerText = id;
//         this.node.onclick = function(){
//             console.log(id);
//             preview.textContent='';
//             let first = 1+12*(id-1);
//             let end = first + (id===7? 5:11);
//             for(let i=first; i<=end; i++){
//                 let node = new PreviewNode(i);
//                 preview.appendChild(node.P_Node);
//             }
//             };
//     }
//     get A_Node(){
//         return this.node;
//     }
// }

// for(let i=1; i<=7; i++){
//     let node = new AlbumNode(i);
//     bar.appendChild(node.A_Node);
// }



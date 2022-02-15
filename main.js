class PreviewNode{
    constructor(imgID){
        this.node = document.createElement("div");
        this.node.classList += "w3-col l2 m2 s3";
        let a = document.createElement("a");
        a.href = '#SHOWCASE';
        let img = document.createElement("img");
        img.classList += imgID%12 === 1? "photo selected": "photo";
        img.id = imgID;
        img.src = './imgs/'+ imgID + '.JPG';
        a.appendChild(img);
        this.node.appendChild(a);
        this.node.onclick = function(){
            let index = (imgID%12===0? 11:imgID%12-1);
            Selected_Changed(all_photo_node[index]);
            photo_index = index; // auto trans string to number due to my id's setting (p{number})
            showcase.src = current_album[photo_index];
        }
    }
    get P_Node(){
        return this.node;
    }
}

const preview = document.getElementById("CONTAINER");

for(let i=1; i<=12; i++){
    let node = new PreviewNode(i);
    preview.appendChild(node.P_Node);
}

const bar = document.getElementById("BAR");


class AlbumNode{
    constructor(id){
        this.node = document.createElement('button');
        this.node.classList += id===1? "my-button w3-gray w3-circle bg-dark" : "my-button w3-sand2 w3-circle bg-dark";
        this.node.innerText = id;
        this.node.onclick = function(){
            preview.textContent='';
            let first = 1+12*(id-1);
            let end = first + (id===7? 6:12);
            current_album = [];
            for(let i=first; i < end; i++){
                let node = new PreviewNode(i);
                preview.appendChild(node.P_Node);
                current_album.push('./imgs/'+i+'.JPG');
            }
            album_end = current_album.length-1;
            photo_index = 0;
            showcase.src = current_album[0];
            removeSelected();
            this.classList.remove('w3-sand2')
            this.className += ' w3-gray';
            };
    }
    get A_Node(){
        return this.node;
    }
    
}

function removeSelected() {
    let childnodes = bar.childNodes;
    childnodes.forEach(function(i){
        i.classList.remove('w3-gray');
        i.className += ' w3-sand2';
    })
}

for(let i=1; i<=7; i++){
    let node = new AlbumNode(i);
    bar.appendChild(node.A_Node);
}



/* 
================================================================
========== SETTING PHOTOS' SRC and Global Variables ============                  
================================================================
*/

const showcase = document.getElementById("showcase");   // the place to show big picture

var current_album = [];
var photo_index = 0;
var album_end = 11;
var all_photo_node = document.getElementsByClassName("photo");

for(let i=1; i<=12; i++){
    current_album.push('./imgs/'+i+'.JPG');
}

/* 
================================================================
==========              Left and Right             =============                  
================================================================
*/

// Circle: if it reaches the end, go to the End/ back to Start

function left(e){
    if(photo_index === 0){
        Selected_Changed(all_photo_node[album_end]);
        photo_index = album_end;
    }
    else{
        Selected_Changed(all_photo_node[photo_index-1]);
        photo_index--;
    }
    showcase.src = current_album[photo_index];
}

function right(e){
    if(photo_index === album_end){
        Selected_Changed(all_photo_node[0]);
        photo_index = 0;
    }
    else{
        Selected_Changed(all_photo_node[photo_index+1]);
        photo_index++;
    }
    showcase.src = current_album[photo_index];
}

function Selected_Changed(Add_Selected){
    all_photo_node[photo_index].classList.remove("selected");
    Add_Selected.className += " selected";
}
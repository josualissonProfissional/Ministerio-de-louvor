for(i of document.querySelectorAll('[search]')){
    try{
        busca(i,document.querySelector("#"+i.getAttribute('search')))
    }catch(e){}
}

function busca(input_field, div){
    input_field.onkeyup = function(e){
        let filter = this.value.toLowerCase(); 
        for(di of div.children){
            let nome = di.getAttribute("nome").toLowerCase(); 
            if(nome.includes(filter))
                di.style.removeProperty('display');
            else
                di.style.display = "none";
        }
    }
}

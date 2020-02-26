// Get the modal
var modal = document.getElementById("modal");
        
//open the modal
$(".openModal").click(function(){
    var idName=$(this).attr("id");
    idName=idName.substring(0,idName.length-4);
    $('#popup_content').load("/html/MEM/"+idName+".html");
    modal.style.display = "block";
});

//close the modal
function closeModal (){
    modal.style.display = "none";
};
// window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
//     };
// };

//link modal css
function loadCSS(filename){ 
    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
    document.head.appendChild(file);
 }
loadCSS("/css/pc960/MEM/modal.css");
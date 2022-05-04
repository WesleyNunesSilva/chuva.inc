function ViewMore(){
    var elipsis = document.getElementById ("elipsis");
    var all = document.getElementById("All");
    var ButViewMore = document.getElementById("More");

    if(elipsis.style.display === "none"){
        elipsis.style.display = "inline";
        all.style.display = "none";
        ButViewMore.innerHTML="Ver mais";
    }
    else{
        elipsis.style.display = "none";
        all.style.display = "inline";
        ButViewMore.innerHTML = "Ver menos";
    }

}

function create(){
    document.getElementById ("DiscussionContent1").style.display = "none";
    document.getElementById("DiscussionContent2").style.display = "flex";
    document.getElementById("TopicSent").style.display = "none";
}

function send(){
    document.getElementById ("DiscussionContent1").style.display = "none";
    document.getElementById("DiscussionContent2").style.display = "none";
    document.getElementById("TopicSent").style.display = "flex";
}

function newtopic(){
    document.getElementById ("DiscussionContent1").style.display = "none";
    document.getElementById("DiscussionContent2").style.display = "flex";
    document.getElementById("TopicSent").style.display = "none";
}

function Replies(){
    var answer = document.getElementById ("answer");
    var like = document.getElementById("Like1");
    var reply1 = document.getElementById("answer1");

    if(answer.style.display === "inline"){
        answer.style.display = "none";
        like.innerHTML = "1 like ";
        reply1.innerHTML = " 1 resposta ";
    }
    else{
        answer.style.display = "inline";
        like.innerHTML = "4 like";
        reply1.innerHTML = " 4 resposta";       
        
    }

}
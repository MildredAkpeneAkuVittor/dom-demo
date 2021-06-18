const addMovie = document.getElementsByTagName('header')[0].lastElementChild;
const modal = document.querySelector('.modal');
const backdrop = document.getElementById('backdrop');
const add = document.querySelector('.btn--success')
movies=[];

addMovie.addEventListener('click',(e)=>{ 
    modal.style.display='block';
    backDropOccur();
})

function backDropOccur(){
    if( modal.style.display==='block'){
        backdrop.style.display='block';
        backdrop.style.pointerEvents='auto';
    }
    else{
        backdrop.style.display='none';
    }
}

function styleModal(){
    modal.style.display='none';
   backdrop.style.display='none';
}

function closing(){
    backdrop.style.display='none';
    modal.style.display='none';
    backdrop.style.pointerEvents='none';
  
}
document.querySelector('.btn--passive').addEventListener('click',()=>{
    styleModal();
    Clear
})
backdrop.addEventListener('click',()=>{
    closing();
    Clear();
   
})

function Clear(){
    document.getElementById('title').value = "";
    document.getElementById('rating').value="";
    document.getElementById('image-url').value="";
   }

add.addEventListener('click',()=>{Movie()})

function Movie(){
 const title = document.getElementById('title').value;
 const rating = document.getElementById('rating').value;
 const url = document.getElementById('image-url').value;
 movie={};
  if(title==="" || +rating <= 1 || url==="" ){ 
      window.alert('Please Enter Valid Values !!!')
      return
  }
  else{
     movie.title=title;
     movie.rating=rating;
     movie.url=url;
     movies.push(movie);
     Clear();
     styleModal();
    
    
    }
}


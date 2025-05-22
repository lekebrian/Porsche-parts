


 const searchBar = document.getElementById('searchbar');
  const itemlist = document.querySelector('.content-container');
  const source = itemlist.getElementsByTagName('div');

  searchBar.addEventListener('keyup', function(e){
    const searchText = searchBar.value.toLowerCase();


    Array.from(source).forEach(function(part){
      const item = part.textContent.toLowerCase();
      if(item.includes(searchText)){
        window.addEventListener('DOMContentLoaded', ()=>{
    if(source){
        localStorage.setItem('sharedContent', source.innerHTML);
    }
    const target = document.getElementById('target');
    if(target){
        const stored = localStorage.getItem('sharedContent');
        if(stored){
            target.innerHTML = stored;
        }
    }
});
        part.style.display = 'block';
      }
      else{
        part.style.display = 'none';
      }
    });
  });
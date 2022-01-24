function groupbutton(clickedbtn){
    if (clickedbtn == 'left_button'){
        document.getElementById('groupscroller').scrollLeft -= 311;
    }
    if (clickedbtn == 'right_button'){
        document.getElementById('groupscroller').scrollLeft += 311;        
    }
}

function filtertable(){
    let newinput = document.getElementById("searchquery");
    let filter = newinput.value.toUpperCase();

    let tablevalue = document.getElementById("group_table");
    let rows = tablevalue.getElementsByTagName("tr");
    let td,txtValue;


    for (i = 1; i < rows.length; i++)
    {
        td = rows[i].getElementsByTagName("td")[1];
        
        txtValue = td.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {   
            rows[i].style.display = "table";
        }
        else{            
            rows[i].style.display = "none";
        }        
    }
}

function debounce(func, timeout = 500){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  const processChange = debounce(() => filtertable());
  
//----------------------------------------------------------------------


  function sortTableByGroupName(table, column, asc = true) {
    
    const dirModifier = asc ? 1 : -1;
    
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    
  
  
    const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelectorAll("td")[1].textContent.trim();
      const bColText = b.querySelectorAll("td")[1].textContent.trim();
      return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
  
    
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }
  
    
    tBody.append(...sortedRows);
  
    table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  
  table.querySelector("th").classList.toggle("th-sort-asc", asc);
  table.querySelector("th").classList.toggle("th-sort-desc", !asc);
  }
  
  
  
  
  let whichSort = document.getElementById("sorting");
  
  whichSort.addEventListener("click", function () {
  
    
    let tableElement = document.getElementById("group_table");
  
    let checkOrder = tableElement.getElementsByTagName("th")[0];
    let currentIsAscending = checkOrder.classList.contains("th-sort-asc");
    sortTableByGroupName(tableElement, 1, !currentIsAscending);
  
  });

  
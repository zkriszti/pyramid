let j, i, row, itemCount, ulChildren;
let uniqueID = 0;

function liElements() {
	let pyramid = document.getElementById('pyramid');
	/* i --> elementID, j --> nr of rows / rowID */
	 		
	for(j=0; j<5; j++){
		row = document.createElement("ul"); 
		pyramid.appendChild(row);
		row.setAttribute('id', 'ul-' + j);
		itemCount = 2*(j+1) - 1; //put 1,3,5... elements into ul-s
			
		let ulChildren =''; 
		
				for (i=0; i<itemCount; i++) {			
				uniqueID ++;
				ulChildren += "<li>ITEM" +" " +(i+1) + "-" + uniqueID +"</li>";
				row.innerHTML = ulChildren;
					
			}	
		}
	}

liElements();


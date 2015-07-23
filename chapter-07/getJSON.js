function getJSON(url) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();  
				    
    request.open("GET", url);	      
				    
    request.onload = function () {	      
      try {
        if(this.status == 200 ){			
          resolve(JSON.parse(request.response));	
        }
        else {
         reject(this.status + " " + this.statusText); 
        }
      }
      catch(e){
        reject(e.message);					
      }
    };
				    
    request.onerror = function () {				
      reject(this.status + " " + this.statusText);
    };							
				    
    request.send();				
  });
}
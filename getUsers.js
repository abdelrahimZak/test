


   
    
    var url="https://ancient-basin-17410.herokuapp.com/users";
    

    var table= document.getElementById("table");
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        var jsondata=[];
     jsondata=jsondata.concat( data); 
     jsondata.forEach(user => {
         
            // creat tabel row
          var tr = document.createElement("tr");
          tr.setAttribute('class',"alert");
          tr.setAttribute('role',"alert");

          // table data

          // check box
          var td_checkBox=document.createElement("td");
           td_checkBox.innerHTML='<label class="checkbox-wrap checkbox-primary"><input type="checkbox" checked><span class="checkmark"></span></label>';
          //email          
          var td_email = document.createElement("td");
          td_email.setAttribute('class',"d-flex align-items-center");
          td_email.innerHTML='<div class="img" style="background-image: url(\'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png\');"></div>'+
         '<div class="pl-3 email">'+
         '<span>'+user.email+'</span>'+
         '<span>Added: 01/10/2021</span></div>';
          

          var td_name = document.createElement("td");
          
          var nameMatch = user.email.match(/^([^@]*)@/);
          var Uname = nameMatch ? nameMatch[1] : user.email;
          if(Uname.includes('.')){
          Uname=Uname.split('.').join(' ');
          }
          td_name.innerHTML=Uname;
          tr.append(td_checkBox,td_email,td_name);
          
          table.append(tr);
          
          

        });
    });

/*

						    
						    
						      	
						      	
						      		
						      		
						      </td>
						      <td>Markotto89</td>
						      <td class="status"><span class="active">Active</span></td>
						      <td>
						      	<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				            	<span aria-hidden="true"><i class="fa fa-close"></i></span>
				          	</button>
				        	</td>
						    </tr>
*/
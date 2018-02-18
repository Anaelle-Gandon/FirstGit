$(function(){
			$("#bouton1").click(function(){				
				var n = $('#n').val();
				var result = "0, 1";
				var S = [];				
				if(n ==0){
					result = "0";
				} else if(n > 1){			
					for(var i=2; i<n; i++){
						S[0] = 0;
						S[1] = 1; 
						S[i] = S[i-1] + S[i-2];
						
						result += ", " + S[i];		
					}
				}else if(n ==1){
					result = result;
				}else{
					result = "Veuillez entrer un nombre POSITIVE";
				}
				$("#result").text(result);					
			});	
			$("#bouton2").click(function(){
				var n = $("#n2").val();
				result = "";
				if(n<=0 || n==1 || n%2==0){
					result = "Not prime number";
				}else if(n==3){
					result = "Prime number";
				}else {
					result = "Prime number";
					for(var i = 3; i<=n/3; i=i+2){
						if(n%i==0){
							result = "Not prime number";
							break;
						}
					}					
				}
					$("#result2").text(result);	
			});
			$("#bouton3").click(function(){
				var n = $("#n3").val();
				result = "Palindrome number";
				if(n%1!=0){
					result = "Veuillez entrer des chiffres";
				}else{				
					
					var leng = n.length;				
					for(var i=0; i<leng/2; i++){
						a = n.charAt(i);
						b = n.charAt(leng - 1 - i);
						if(a!=b){
							result = " Not palindrome number";
							break;
						}				
					}
				}
				$("#result3").text(result);	
			});
			$("#bouton4").click(function(){
				var n = $("#n4").val();
				var result = 1;
				if(n<0 || n%1!=0){
					result = "Entrez un nombre positive";
				}else if(n>0){
					for(var i=1; i<=n;i++){
						result*=i;
					}
				}
				$("#result4").text(result);	
			});
	});
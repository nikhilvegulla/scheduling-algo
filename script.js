var at=new Array();
var bt=new Array();
var tat=new Array();
var ct=new Array();
var wt=new Array();
var c=0;
var CT=0;
var p=new Array();

$("#btn").click(function(){
var n= $("#num").val();
var s="<div><h2>Input</h2></div><table><tr><th>AT</th><th>BT</th></tr>";
// var inp="";
for(var i=0;i<parseInt(n);i++)
{  var d="<tr><td><input type=\"text\" id=\"a"+(i+1)+ "\"></td><td><input type=\"text\" id=\"b"+(i+1)+ "\"></td></tr>";
    s+=d;
    p.push(parseInt(i));
}

console.log(s);
$(".inptable").html(s);
var b="<input type=\"button\" id=\"get\" value=\"Calculate \" onclick=\"getele()\" >";
console.log(b);
$("#ib").html(b);
// console.log(s);
});


function getele()
{var n= $("#num").val();
            console.log(n);
           
            for(var i=1;i<=parseInt(n);i++)
            {
                var d="a"+String(i);
                var e="b"+String(i);
                at.push(parseInt(document.getElementById(d).value));
                bt.push(parseInt(document.getElementById(e).value));
            }
            
          
            //    start
            for(i=0;i<n;i++){
                for(j=0;j<n-i;j++){
                    if(at[j+1]<at[j]){
                        [at[i],at[j]]=[at[j],at[i]];
                        [bt[i],bt[j]]=[bt[j],bt[i]];
                        [p[i],p[j]]=[p[j],p[i]];
                    }
        
                }
            }
            // console.log(c,CT);
            for(i=0;c<n;i++){
                if(at[c]<=CT){
                    CT += bt[c];
                    ct[c] = CT;
                    tat[c]=ct[c]-at[c];
                    wt[c] = tat[c]-bt[c];
                    c +=1;
                }
                else
                CT += 1;
            }
            for(i=0;i<n;i++){
                for(j=0;j<n-i;j++){
                    if(p[j+1]<p[j]){
                        [at[i],at[j]]=[at[j],at[i]];
                        [bt[i],bt[j]]=[bt[j],bt[i]];
                        [p[i],p[j]]=[p[j],p[i]];
                       [ct[i],ct[j]]=[ct[j],ct[i]];
                        [tat[i],tat[j]]=[tat[j],tat[i]];
                        
                    }
        
                }
            }
            
            console.log(at);
            console.log(bt);
            console.log(p);
            console.log(ct);
            console.log(tat);
            // end


            var x=$(".outtable");
            var r="<h2>Output</h2><table><tr><th>P</th><th>AT</th><th>BT</th><th>CT</th><th>TAT</th><th>WT</th></tr>";
            for(i=0;i<n;i++)
            {
                var f="<tr> <td>p"+p[i]+"</td> <td>"+ at[i]+"</td><td>"+bt[i]+"</td><td>"+ct[i]+"</td><td>"+tat[i]+"</td><td>"+wt[i]+"</td></tr>";
                r+=f;
                x.html(r);
            }
            var tt=0,tw=0;
            for(i=0;i<n;i++)
            {
                tt+=tat[i];
                tw+=wt[i];
            }
            var m=$(".avg").html("<div>Average TAT: "+parseFloat(tt/n)+"</div><div>Average WT: "+parseFloat(tw/n)+"</div>");
            // 
                            //start for gantchart
            var k=$(".chart")
            var z="<h4>Gant chart</h4><table><tr><th>";
            for(i=0;i<n;i++)
            {  z+="p"+p[i]+"</th>";
                        if(i<n-1)
                            z+="<th>";
            }
            
            z+="</tr></table>"
            z+="<div id=\"ch\">";
            z+="<span id\"=pro\">0</span>";
            for(i=0;i<n;i++)
            {  
                z+="<span id\"=pro\">"+parseInt(ct[i])+"</span>";
            }
            k.html(z);

                        //end for gantchart


}

// function swap(a,b)
// {
//     var t;
//     t=a;
//     a=b;
//     b=t;
//     return 
// }
// $("#ib #get").click(function(){
//     alert("hi");
//     console.log(im);
// });
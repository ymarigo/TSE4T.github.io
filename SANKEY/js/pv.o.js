var data={};var sankeyflow={nodes:[],links:[]};var sankeynoderef=[];var s_direction="startevent";var treedataraw=[];var treedata=[];var sunburstpaths=[];var top10=[];var topn=[];var topevents=[];var topsecondevents=[];var topeventsdata=[];var topsecondeventsdata=[];var i_total_count=0,i_max_path_count=0,i_min_path_count=0,i_max_path_length=0;var i_max_edge_width=20,i_min_edge_width=3;getData=function(){s_direction="startevent";sankeyflow={nodes:[],links:[]};sankeynoderef=[];var j=JSON.stringify(data.results[0].data);var h=0;var q=0;var u="";var a="";for(var I=0;I<data.results[0].data.length;I++){var l=JSON.stringify(data.results[0].data[I].path);var K=l.substring(2,(l.length-2)).split(", ");if(u==""){u=K[K.length-1]}var n=K[K.length-1];if(n!=u){h++;break}}if(h==0){s_direction="endevent"}else{for(var I=0;I<data.results[0].data.length;I++){var l=JSON.stringify(data.results[0].data[I].path);var K=l.substring(2,(l.length-2)).split(", ");if(a==""){a=K[0]}var b=K[0];if(b!=a){q++;break}}}i_sankey_slider_created=0;var s=0;var D=0;for(var I=0;I<data.results[0].data.length;I++){var l=JSON.stringify(data.results[0].data[I].path);var k=parseInt(data.results[0].data[I].cnt);var K=l.substring(2,(l.length-2)).split(", ");if(K.length>i_max_path_length){i_max_path_length=K.length}s=(s+K.length);D=(D+k);for(var M=0;M<K.length;M++){var J=M;if(s_direction=="endevent"){J=(K.length-1-M)}var F=K[M]+"-"+J;if(sankeynoderef.indexOf(F)==-1){sankeynoderef.push(F)}var r=0;for(var L=0;L<topevents.length;L++){if(topevents[L].label==K[M]){var G=(topevents[L].data+k);topevents[L].data=G;r++}}if(r==0){var c={label:K[M],data:k};topevents.push(c)}}if(s_direction=="endevent"){var t=0;for(var L=0;L<topsecondevents.length;L++){if(topsecondevents[L].label==K[K.length-2]){var G=(topsecondevents[L].data+k);topsecondevents[L].data=G;t++}}if(t==0){var c={label:K[K.length-2],data:k};topsecondevents.push(c)}}}for(var I=0;I<topevents.length;I++){var y=((topevents[I].data/s)*100);y=Math.round(y*100)/100;var p={label:topevents[I].label,percentage:y,data:topevents[I].data};topeventsdata.push(p);topevents[I].label=topevents[I].label+" ("+y+"%)"}topeventsdata.sort(function(f,e){return e.data-f.data});for(var I=0;I<topsecondevents.length;I++){var y=((topsecondevents[I].data/D)*100);y=Math.round(y*100)/100;var p={label:topsecondevents[I].label,percentage:y,data:topsecondevents[I].data};topsecondeventsdata.push(p);topsecondevents[I].label=topsecondevents[I].label+" ("+y+"%)"}topsecondeventsdata.sort(function(f,e){return e.data-f.data});for(var I=0;I<sankeynoderef.length;I++){var c={name:sankeynoderef[I]};sankeyflow.nodes.push(c)}var d=[];for(var I=0;I<data.results[0].data.length;I++){var l=JSON.stringify(data.results[0].data[I].path);l=l.substring(2,(l.length-2));var k=data.results[0].data[I].cnt;var K=l.split(", ");if(s_direction=="startevent"){d.push(l.replace(/, /g,"^|^")+","+k)}else{d.push(K.slice().reverse().join("^|^")+","+k)}i_total_count=(i_total_count+k);if(i_min_path_count==0||k<i_min_path_count){i_min_path_count=k}if(k>i_max_path_count){i_max_path_count=k}for(var M=0;M<K.length;M++){if(s_direction=="endevent"){if((K.length-2-M)>=0){var g=K[M]+"-"+(K.length-1-M);var C=K[M+1]+"-"+(K.length-2-M);var o=0;for(var L=0;L<sankeyflow.links.length;L++){if(sankeyflow.links[L].source==sankeynoderef.indexOf(g)&&sankeyflow.links[L].target==sankeynoderef.indexOf(C)){sankeyflow.links[L]={source:sankeynoderef.indexOf(g),target:sankeynoderef.indexOf(C),value:(k+sankeyflow.links[L].value)};o++;break}}if(o==0){var c={source:sankeynoderef.indexOf(g),target:sankeynoderef.indexOf(C),value:k};sankeyflow.links.push(c)}}}else{if(M<(K.length-1)){var g=K[M]+"-"+M;var C=K[M+1]+"-"+(M+1);var o=0;for(var L=0;L<sankeyflow.links.length;L++){if(sankeyflow.links[L].source==sankeynoderef.indexOf(g)&&sankeyflow.links[L].target==sankeynoderef.indexOf(C)){sankeyflow.links[L]={source:sankeynoderef.indexOf(g),target:sankeynoderef.indexOf(C),value:(k+sankeyflow.links[L].value)};o++;break}}if(o==0){var c={source:sankeynoderef.indexOf(g),target:sankeynoderef.indexOf(C),value:k};sankeyflow.links.push(c)}}}}}var v=d.sort().reverse().join("^||^");var m=0;for(var I=0;I<data.results[0].data.length;I++){var l=JSON.stringify(data.results[0].data[I].path);var k=data.results[0].data[I].cnt;var K=l.substring(2,(l.length-2)).split(", ");if(q>0){K.unshift("ROOT")}var x="";for(var M=0;M<K.length;M++){var F,H;if(s_direction=="endevent"){if(M<(K.length-1)){F=K[M]+"-"+(K.length-1-M);H=K[M+1]+"-"+(K.length-2-M)}else{F=K[M]+"-"+(K.length-1-M);H="null"}var A=0;for(var L=0;L<treedataraw.length;L++){if(treedataraw[L].name==F&&treedataraw[L].parent==H){var w=(k+treedataraw[L].size);treedataraw[L]={name:F,parent:H,size:w};if(w>m){m=w}A++;break}}if(A==0){var c={name:F,parent:H,size:k};if(k>m){m=k}treedataraw.push(c)}}else{if(M>0){F=K[M]+"-"+M;H=K[M-1]+"-"+(M-1)}else{F=K[M]+"-"+M;H="null"}var A=0;for(var L=0;L<treedataraw.length;L++){if(treedataraw[L].name==F&&treedataraw[L].parent==H){var w=(k+treedataraw[L].size);treedataraw[L]={name:F,parent:H,size:w};if(w>m){m=w}A++;break}}if(A==0){var c={name:F,parent:H,size:k};if(k>m){m=k}treedataraw.push(c)}}}}for(var I=0;I<treedataraw.length;I++){treedataraw[I].width=(Math.ceil((treedataraw[I].size/m)*(i_max_edge_width-i_min_edge_width))+i_min_edge_width)}var B=treedataraw.reduce(function(f,e){f[e.name]=e;return f},{});treedataraw.forEach(function(f){var e=B[f.parent];if(e){(e.children||(e.children=[])).push(f)}else{treedata.push(f)}});for(var I=0;I<data.results[0].data.length;I++){var l=data.results[0].data[I].path;var k=data.results[0].data[I].cnt;topn[I]=[k,l.substring(1,l.length-1)]}topn.sort(sortByFirstColumnDesc);var z=10;if(topn.length<10){z=topn.length}for(var I=(topn.length-1);I>(topn.length-1-z);I--){top10.push(topn[I])}var E={tree:treedata[0],top10:top10,topn:topn,topevents:topevents,topsecondevents:topsecondevents,topeventsdata:topeventsdata,topsecondeventsdata:topsecondeventsdata,sunburstpaths:[v],sankeyflow:[sankeyflow],totalcount:i_total_count,maxpathlength:i_max_path_length,direction:s_direction,syntax:""};return E};function sortByFirstColumnDesc(d,c){if(parseInt(d[0])===parseInt(c[0])){return 0}else{return(parseInt(d[0])<parseInt(c[0]))?-1:1}};
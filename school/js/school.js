$(function(){
    var json =[
        {
            "id": 1,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 2,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 3,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 4,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 5,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 6,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 7,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        },{
            "id": 8,
            "classify":"第一学期",
            "title":"网络工程",
            "eclass":"15网1班",
            "course":"网络发展",
            "score":"90",
            "name":"李xx",
            "teacher":"王xx"
        }
    ]

function initHtml(json){
    var html_ = '<tr title="'+ json.id +'">'+
        '<td>'+
        '<input type="checkbox" class="each">'+
        '<input type="text" class="inp" value="'+json.id+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.classify+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.title+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.eclass+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.course+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.score+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.name+'" disabled></td>'+
        '<td><input type="text" class="inp" value="'+json.teacher+'" disabled></td>'+
        '<td><input type="button" class="del" value="删除" title="'+json.id+'"></td>'+
     '</tr>';
     return html_;
}
    function initPage(json){
        $(".right tbody").html("");
        $.each(json,function(key,val){
            $(".right tbody").append(initHtml(val));
        })
    }

    initPage(json);

//delete
    $("body").on("click",".del",function(){
        var id = parseInt($(this).attr("title"));
        for(var i=0;i<json.length;i++){
            if(id==json[i].id){
                json.splice(i,1);
                 $(this).parent("td").parent("tr").remove();
             }
        }
    })

//add infomation
    function refreshHtml(json,class_){
        json.unshift({
            "id":class_.id,
            "classify":$(class_.classify).val(),
            "title":$(class_.title).val(),
            "eclass":$(class_.eclass).val(),
            "course":$(class_.course).val(),
            "score":$(class_.score).val(),
            "name":$(class_.name).val(),
            "teacher":$(class_.teacher).val()
        })
        $(".add input[type='text']").val("");
        initPage(json);
    }

    $(".btn").on("click",function(){
        var id_ = 0;
        $.each(json,function(key,val){
            if(id_<val.id){
                id_ = val.id;
            }
        })
        id_ = id_+1
        refreshHtml(json,{"id":id_,"classify":'.inp1',title:'.inp2',eclass:'.inp3',
        course:".inp4",score:'.inp5',name:'.inp6',teacher:'.inp7'})
    })

// click to rank
	function dealList(json, status, fun){
		if(status){
			var emp = null;
			for(var i = 0; i < json.length; i ++){
				for(var j = i + 1; j < json.length; j ++){
					if(json[i].id > json[j].id){
						emp = json[i];
						json[i] = json[j];
						json[j] = emp;
					}
				}
			}
		} else {
			for(var i = 0; i < json.length; i ++){
				for(var j = i + 1; j < json.length; j ++){
					if(json[i].id < json[j].id){
						emp = json[i];
						json[i] = json[j];
						json[j] = emp;
					}
				}
			}
		}

		fun();
        $(".right tbody tr").eq(0).addClass("bg").siblings("tr").removeClass("bg");
	}

	$(".icon1").on("click", function(){
		if($(this).hasClass("h")){
			dealList(json, true, function(){
				initPage(json);
			})
			$(this).removeClass("h");
		} else {
			dealList(json, false, function(){
				initPage(json);
			})
			$(this).addClass("h");
		}
	})

//click to change value
    $("body").on("click", "td", function(){
		$(this).children("input[type='text']").removeAttr("disabled");
	})

	$("body").on("blur", "td", function(){
		$(this).children("input[type='text']").attr("disabled", true);
	})


// keyboard to delete//select
    $(".right tbody tr").eq(0).addClass("bg").siblings("tr").removeClass("bg");
    $(document).keydown(function(e){
    		var key = e.keyCode;
    		switch(key){
    		    case 38:
    				index = $("tr.bg").index();
    				if(index > 0){
    					index --;
    				}
    				$(".right tbody tr").eq(index).addClass("bg").siblings("tr").removeClass("bg");
    			break;
    			case 40:
    				index = $("tr.bg").index();
    				if(index < $('.right tbody tr').length - 1){
    					index ++;
    				}
    				$(".right tbody tr").eq(index).addClass("bg").siblings("tr").removeClass("bg");
    			break;
    			case 46:
    				var id = parseInt($("tbody tr.bg").attr("title"));
                    var ind = $("tbody tr.bg").index();
            		for(var i = 0; i < json.length; i ++){
            			if(id == json[i].id){
            				json.splice(i, 1);
            			    $(".right tbody tr").eq(ind).remove();
            			}
            		}
                    $(".right tbody tr").eq(ind).addClass("bg").siblings("tr").removeClass("bg");
    			break;
                case 13:
                    index = $("tr.bg").index();
                    if($(".each").eq(index).is(":checked")){
                        $(".each").eq(index).attr({"checked":false});// 1
                    }else{
                        $(".each").eq(index).attr({"checked":true});
                    }
                break;
    		}
    	})

// all select
    $(".all").click(function(){
        if($(".all").is(":checked")){
            $(".each").attr("checked",true);
        }else{
            $(".each").removeAttr("checked");// 2
        }
    })

    $('.each').click(function(){
        if($('.each:checked').length == $('.each').length){
            $(".all").attr("checked",true);
        }else{
            $(".all").removeAttr("checked");// 2
        }
    })

// 批量删除
    $(".del2").click(function(){
        $("input:checked").each(function(){
            var id = $(this).parent("td").parent("tr").attr("title");
            for(var i=0;i<json.length;i++){
                if(id==json[i].id){
                    json.splice(i,1);
                     $(this).parent("td").parent("tr").remove();
                }
            }
        })
    })
})

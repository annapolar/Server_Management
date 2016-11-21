$(function() {

    //=============== fix table scrollbar issue ==================

    var Groups = $(".BOX");

    for (i = 0; i < Groups.length; i++) {
        var members = $(Groups[i]).find(".cover>ul>li");
        if (members.length < 7) {
            $(Groups[i]).find(">ul").css({ "padding-right": "0" });
        }
    }


    //====================  alert box ======================

    $(".fa-trash-o").on("click", function() {
        $(".swal2-close").css("display", "block");
        swal({
            title: 'Are you sure',
            text: "you want to delete this server now :" + "<br>" + "Server 01",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#3bb1dc',
            cancelButtonColor: '#ccc',
            confirmButtonText: 'Yes'

        })
    })

    $(".PowerOn").on("click", function() {
        swal({
            title: 'Are you sure',
            text: "you want to power on this server now :" + "<br>" + "Server 02",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#3bb1dc',
            cancelButtonColor: '#ccc',
            confirmButtonText: 'Yes'
        })
    })

    $(".PowerOff").on("click", function() {
        swal({
            title: 'Are you sure',
            text: "you want to power off this server now :" + "<br>" + "Server 03",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#3bb1dc',
            cancelButtonColor: '#ccc',
            confirmButtonText: 'Yes'
        })
    })


    $(".Sw_On").on("click", function() {
        swal({
            title: 'Are you sure',
            text: "you want to disable this server now :" + "<br>" + "Server 04",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#3bb1dc',
            cancelButtonColor: '#ccc',
            confirmButtonText: 'Yes'
        }).then(function(button) {
            $(this).css("display", "none");
            $(this).siblings(".Sw_Off").css("display", "block");

        }.bind(this), function(dismiss) {
            // dismiss can be 'cancel', 'overlay', 'close', 'timer'
            if (dismiss === 'cancel') {
                $(".Sw_On").css("display", "block");
            }
        })
    })

    $(".Sw_Off").on("click", function() {
        swal({
            title: 'Are you sure',
            text: "you want to enable this server now :" + "<br>" + "Server 05",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#3bb1dc',
            cancelButtonColor: '#ccc',
            confirmButtonText: 'Yes'
        }).then(function(button) {
            $(this).css("display", "none");
            $(this).siblings(".Sw_On").css("display", "block");

        }.bind(this), function(dismiss) {
            if (dismiss === 'cancel') {
                $(".Sw_Off").css("display", "block");
            }
        })
    })

    //================ plus & minus icons =================

    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });

})





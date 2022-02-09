// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';

    $('.btnNext').click(function () {
        $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
    });

    $('.btnPrevious').click(function () {
        $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
    });

    var i = 1;
    $('#newRow').click(function() {
        $('#edu').clone().appendTo('#eduNext').prop('id', 'edunew' + i);
        i++;
        $('#edunew'+i + '> input', $(this)).each(function(index) {
            this.innerHTML = "";
        })
    });
    var j = 1;
    $('#newJob').click(function() {
        $('#job').clone().appendTo('#jobNext').prop('id', 'jobnew' + j);
        i++;
        $('#jobnew'+i + '> input', $(this)).each(function(index) {
            this.innerHTML = "";
        })
    });
    $('#newRef').click(function() {
        $('#ref2').clone().appendTo('#refNext').prop('id', 'refnew' + j);
        i++;
        $('#refnew'+i + '> input', $(this)).each(function(index) {
            this.innerHTML = "";
        })
    });
    // $('#newRow').click(function() {
    //     $('#eduNext').innerHTML += '< div className = "form-row" id = "edu"'+i+'><div className = "form-group col-md-6" ><label className = "col-form-label" htmlFor = "inputCity" > School < /label> <input className="form-control" id="schoolInput" name="firstname" placeholder="John"type="text"> </div> <div className="form-group col-md-3"> <label className="col-form-label" htmlFor="enrolledInput">Enrolled</label> <input className="form-control" id="enrolledInput" name="enrolledInput" type="date"value="2022-02-09"> </div> <div className="form-group col-md-3"> <label className="col-form-label" htmlFor="gradInput">Graduated</label> <input className="form-control" id="gradInput" name="gradInput" type="date"value="2022-02-09"> </div> </div';
    //
    // });

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// $(document).ready(function () {
//     $('.btnNext').click(function () {
//         $('.nav-tabs .active').parent().next('li').trigger('click');
//     });
//
//     $('.btnPrevious').click(function () {
//         $('.nav-tabs .active').parent().prev('li').trigger('click');
//     });
// });
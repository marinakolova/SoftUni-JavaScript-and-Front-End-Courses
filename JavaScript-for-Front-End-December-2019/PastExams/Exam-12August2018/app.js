function attachEvents() {
    $('input[type="radio"]').click(function () {

        if ($('#support').is(':checked')) {
            changeOptions('Tech Support', 'Medical Support', 'Assistant Support');
        } else if ($('#crm').is(':checked')) {
            changeOptions('Community Manager', 'Customer Care Manager', 'Lead Administrative Officer');
        } else if ($('#marketing').is(':checked')) {
            changeOptions('PR Manager', 'Social Media Manager', 'Marketing Specialist');
        } else if ($('#development').is(':checked')) {
            changeOptions('Junior Developer', 'Regular Developer', 'Senior Developer');
        } else if ($('#other').is(':checked')) {
            changeOptions('Team Lead', 'Employee', 'Intern');
        }

    });

    attachContentEvents();

    function changeOptions(firstInput, secondInput, thirdInput) {
        $('#firstOption').text(firstInput);
        $('#secondOption').text(secondInput);
        $('#thirdOption').text(thirdInput);
    }
}

function attachContentEvents() {
    $('.change-content').click(changeContent);
}

function changeContent() {
    let oldValue = $(this).text();
    let input;

    if($(this).attr('id') === 'ucl') {
        input = $("<input type=\"number\" class=\"form-control change-input text-center\">");
    } else {
        input = $("<input type=\"text\" class=\"form-control change-input text-center\">");
    }

    input.val(oldValue);
    $(this).parent().append(input);
    $(this).remove();

    $('.change-input').on('keypress', function (e) {
        if (e.which === 13) {
            let newValue = $(this).val();
            let h4 = $('<h4 class="h4 text-dark text-center change-content" id="lastName"></h4>');
            h4.text(newValue);
            $(this).parent().append(h4);
            $(this).remove();
            attachContentEvents();
        }
    });
}

attachEvents();
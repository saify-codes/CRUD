$(document).ready(() => {
    $('form').submit((event) => {
        event.preventDefault()
        const name = $('#name').val()
        const email = $('#email').val()
        const phone = $('#phone').val()
        const html = `
        <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>
            <button class="btn btn-success">
                <i class="fas fa-pen"></i>
            </button>
        </td>
        <td>
            <button class=" btn btn-danger">
                <i class="fas fa-trash"></i>
            </button>
        </td>
        </tr>`


        $('table tbody').append(html)
        $('input').val(null)
    })
})
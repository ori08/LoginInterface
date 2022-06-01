
if (localStorage.length > 0) gUser = loadData("userData")

render()
function render() {
    strHtml = ` <tr>
    <th>Username</th>
    <th>Password</td>
    <th>LastLoginTime</th>
    <th>isAdmin</th>
    </tr> 
    `

    for (i = 0; i < gUser.length; i++) {
        strHtml += `<tr><td>${gUser[i].username}</td>
                    <td>${gUser[i].password}</td>
                    <td>${gUser[i].lastLoginTime}</td>
                    <td>${gUser[i].isAdmin}</td></tr>`


    }

    document.querySelector("table").innerHTML = strHtml
}



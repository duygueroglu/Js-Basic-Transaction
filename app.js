const getValuesFromForm = (formId) => {
    const f = document.getElementById(formId)
    //key value pair --> reduce
    return Array.from(f.childNodes)
    .filter((node) => node.tagName === 'INPUT')
    .reduce((prev, curr) => {
        prev[curr.name] = curr.value
        return prev
    },{})
}

const handleOnChangeText = (event, inputName) => {
    state[inputName] = event.target.value

}

const state = {
    inputNameSurname: '',
    inputBalance: '',
    userList: [
        {id: 1 , nameSurname:'Duygu Eroğlu', balance: 1000},
        {id: 2 , nameSurname:'Burcu Yılmaz', balance: 2000},
        {id: 3 , nameSurname:'Pelin Hangişi', balance: 500}
    ]
}
const App = () => {
    return `<div class="container">
    <div class="left form-group shadow p-3 mb-5 rounded">
        <div class="addUserForm">${AddUserForm()}</div>
        <div class="userList">${UserList()}</div>
    </div>
    <div class="center"></div>
    <div class="right"></div>

    </div>`
}



const AddUserForm = () => {
    return `
    <div>
        <form class="addUserForm__form" id="addUserForm">
            <div id="addUserGroup" class="form-group shadow p-3 mb-5 rounded">
                <h4>Add User Form</h4>
                <input onchange="handleOnChangeText(event, 'inputNameSurname')" value="${state.inputNameSurname}" name="nameSurname" class="form-control" type="text" placeholder="enter name"/>
                <input onchange="handleOnChangeText(event, 'inputBalance')" value="${state.inputBalance}" name="balance" class="form-control" type="number" min="0" placeholder="enter balance"/>
                <button type="button" class="btn btn-primary" onclick="javascript:handleAddUser()">Add Person</button>
            </div>
        </form>
    </div>`
}

const UserList = () => {
    return `    
    <div id="userListing" class="form-group shadow p-3 mb-5 rounded">
        <h4>User List Form</h4>
        <ul>
            ${state.userList.map(user=>UserListUser(user)).join(" ")}
        </ul>
    </div>
    `
}

const UserListUser = (props) => {
    return `
    <li class="userListUser__li">
        <div class="userListUser__text">
            <span>${props.nameSurname}</span>
            <span>${props.balance}</span>
        </div>    
            <div class="userListUser__actions">
            <button class="btn btn-success">See Products</button>
            <button class="btn btn-primary">See History</button>
        </div>
    </li>
    `
}

const render = () => {
    const root = document.getElementById("root")
    root.innerHTML = App()
}

const handleAddUser = () => {
    const values = {
        nameSurname: state.inputNameSurname,
        balance: state.inputBalance, 
        id: Math.round(Math.random() * 5000)
    }
    state.userList.push(values)
    state.inputNameSurname = ''
    state.inputBalance = ''
    
    render()
}



render()
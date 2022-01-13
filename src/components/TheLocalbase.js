import Localbase from "localbase";

function TheLocalbase() {

    let myDatabase = new Localbase('myDatabase')

    const insertIntoDb = () => {
        myDatabase.collection('users').add({
            id: 666,
            name: "Mr.Jones",
            age: 39
        })
    }

    const getFromDb = () => {
        myDatabase.collection('users').get().then(users => { console.log(users)})
    }

    const removeFromDb = () => {
        myDatabase.collection('users').delete()
    }

    return ( 
        <>
            <button onClick={insertIntoDb}>ADD</button>
            <button onClick={getFromDb}>GET ALL</button>
            <button onClick={removeFromDb}>DELETE ALL</button>
        </>
     );
}

export default TheLocalbase;
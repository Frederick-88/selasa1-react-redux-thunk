import React from 'react';

// PROPS YANG INI BISA DIBUAT/DIAMBIL DARI 

// tbody>
// {
//     props.data.map((item) => {
//         return (<Item key={item.id} data={item}/>)
//     })
// }
// </tbody>

// PADA MAIN.JS

const Item = (props) => {

    // IBARAT :
    // nama = props.data.nama
    // jurusan = props.data.jurusan
    const { nama, jurusan } = props.data
    
    return (
        <tr>
            <td>{nama}</td>
            <td>{jurusan}</td>
        </tr>
    )
}

export default Item;